import { useQuery } from '@tanstack/react-query'

import { LinkWalletModal, SignInModal } from 'features/modals'
import { useEmitters } from 'features/sockets'

import { AccountControllerService } from 'shared/api'
import { useModal, useSubscribeToMessage } from 'shared/hooks'
import { Account, MessageEvent } from 'shared/types'
import { getAccount, stringifyAccount } from 'shared/utils'

export const Auth: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [LinkWallet, openLinkWalletModal] = useModal(LinkWalletModal)
  const [SignIn, openSignInModal] = useModal(SignInModal)
  const { login, verifyMessage, finishLogin, mergeAccounts } = useEmitters()
  const { refetch: getIsNew } = useQuery({
    enabled: false,
    cacheTime: 0,
    queryFn: () => AccountControllerService.accountControllerIsAccountNew(),
  })

  useSubscribeToMessage(MessageEvent.LOGIN, () => login(), [login])

  useSubscribeToMessage(
    MessageEvent.VERIFY_MESSAGE,
    ({ signature }) => {
      verifyMessage(signature)
    },
    [verifyMessage],
  )

  useSubscribeToMessage(
    MessageEvent.LOGGED_IN,
    (account: Account) => {
      getIsNew()
        .then(({ data: { isNew } }) => {
          const sessionAccount = getAccount('sessionAccount')

          if (sessionAccount && isNew) {
            openLinkWalletModal({
              sessionAccount,
              activeAccount: account,
              onLink: () => mergeAccounts(sessionAccount),
              onSignInNew: finishLogin,
            })

            return
          }

          finishLogin()
        })
        .finally(() => {
          localStorage.setItem('sessionAccount', JSON.stringify(account))
        })
    },
    [finishLogin, mergeAccounts],
  )

  useSubscribeToMessage(MessageEvent.TOKENS, ({ tokens, account }) => {
    localStorage.setItem(stringifyAccount(account), JSON.stringify(tokens))
  })

  useSubscribeToMessage(MessageEvent.SIGN_MESSAGE, ({ message, account }) => {
    openSignInModal({ account, message })
  })

  return (
    <div>
      {SignIn}
      {LinkWallet}
      {children}
    </div>
  )
}
