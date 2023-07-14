import debounce from 'lodash.debounce'
import { createContext, useCallback, useMemo, useState } from 'react'

import { LinkWalletModal } from 'widgets/modals'

import {
  useConnect,
  useEmitters,
  useEthConntect,
  useModal,
  useSuiConnect,
} from 'shared/hooks'
import { useSubscribeToMessage } from 'shared/hooks/useSubscribeToMessage'
import { ChainType, ConnectAccountType, MessageEvent } from 'shared/types'
import { log } from 'shared/utils'

interface WalletContextType {
  activeAccount: ConnectAccountType | undefined
  accountIsLoading: boolean
}

export const WalletContext = createContext<WalletContextType>({
  activeAccount: undefined,
  accountIsLoading: true,
})

export const WalletProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { login, verifyMessage } = useEmitters()
  const { signMessage } = useConnect()
  const { account: ethAccount } = useEthConntect()
  const { account: suiAccount } = useSuiConnect()
  const [chainLoading, setIsLoading] = useState<Record<ChainType, boolean>>({
    [ChainType.ETH]: false,
    [ChainType.SUI]: false,
  })

  const [LinkModal] = useModal(LinkWalletModal, {
    onClose: () => {
      if (!activeAccount?.address) return

      debouncedLogin({
        accountId: activeAccount.address,
        chainType: activeAccount.chainType,
      })
    },
  })

  const debouncedLogin = useCallback(debounce(login, 200), [login])
  const activeAccount = useMemo(
    () => [ethAccount, suiAccount].find(a => a.connected),
    [ethAccount, suiAccount],
  )
  const accountIsLoading = useMemo(
    () => Object.values(chainLoading).some(b => b),
    [chainLoading],
  )

  log(
    'info',
    'activeAccount = ',
    activeAccount,
    'accountIsLoading = ',
    accountIsLoading,
  )

  const value = useMemo(
    (): WalletContextType => ({
      activeAccount,
      accountIsLoading,
    }),
    [activeAccount, accountIsLoading],
  )

  useSubscribeToMessage(
    MessageEvent.SIGN_MESSAGE,
    // TODO: signMessage
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ({ message }) => {
      // signMessage(activeAccount?.chainType, message)
    },
    [activeAccount, signMessage],
  )

  useSubscribeToMessage(
    MessageEvent.CONNECTION_LOADING,
    ({ isLoading, chainType }) => {
      setIsLoading(currLoading => ({
        ...currLoading,
        [chainType]: isLoading,
      }))
    },
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

  useSubscribeToMessage(
    MessageEvent.LOGIN,
    () => {
      if (!activeAccount?.address) return

      debouncedLogin({
        accountId: activeAccount.address,
        chainType: activeAccount.chainType,
      })
    },
    [activeAccount],
  )

  return (
    <WalletContext.Provider value={value}>
      {LinkModal}
      {children}
    </WalletContext.Provider>
  )
}
