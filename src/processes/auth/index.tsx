import { useContext } from 'react'

import { useEmitters } from 'features/sockets'

import { WalletContext } from 'entities/wallet'

import { useSubscribeToMessage } from 'shared/hooks'
import { MessageEvent } from 'shared/types'

export const Auth: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { login, verifyMessage } = useEmitters()
  const { activeAccount } = useContext(WalletContext)

  useSubscribeToMessage(
    MessageEvent.LOGIN,
    () => {
      if (!activeAccount?.address) return

      login({
        accountId: activeAccount.address,
        chainType: activeAccount.chainType,
      })
    },
    [activeAccount],
  )

  useSubscribeToMessage(
    MessageEvent.VERIFY_MESSAGE,
    ({ signature }) => {
      if (!activeAccount?.address) return

      verifyMessage(signature, {
        accountId: activeAccount.address,
        chainType: activeAccount.chainType,
      })
    },
    [activeAccount, verifyMessage],
  )

  return <div>{children}</div>
}
