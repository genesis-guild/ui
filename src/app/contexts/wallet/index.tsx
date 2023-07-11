import debounce from 'lodash.debounce'
import { createContext, useCallback, useEffect, useMemo } from 'react'
import {
  useDebouncedValue,
  useEmitters,
  useEthConntect,
  useModal,
  useSuiConnect,
} from 'shared/hooks'
import { ConnectAccountType } from 'shared/types'
import { log } from 'shared/utils'
import { LinkWalletModal } from 'widgets/modals'

const findActiveAccount = (
  ...accounts: ConnectAccountType[]
): ConnectAccountType | undefined => {
  return accounts.find(a => a.connected)
}

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
  const { login } = useEmitters()
  // const { socket } = useContext(SocketsContext)
  const { account: ethAccount } = useEthConntect()
  const { account: suiAccount } = useSuiConnect()

  const [LinkModal] = useModal(LinkWalletModal, {
    onClose: () => {
      if (!activeAccount?.address) return

      debouncedLogin(activeAccount.address, activeAccount.chainType)
    },
  })

  const debouncedLogin = useCallback(debounce(login, 200), [login])

  // TODO: MAYBE another way?
  const [activeAccount, accountIsLoading] = useDebouncedValue(
    findActiveAccount(ethAccount, suiAccount),
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

  useEffect(() => {
    // TODO: how to handle this?
    // if (accountIsLoading) return
    // if (!activeAccount) {
    //   localStorage.removeItem('account')
    //   return
    // }
    // const prevAccount = localStorage.getItem('account')
    //   ? JSON.parse(localStorage.getItem('account')!)
    //   : undefined
    // localStorage.setItem('account', JSON.stringify(activeAccount))
    // if (prevAccount && prevAccount.address !== activeAccount.address) {
    //   openLinkWalletModal({
    //     prevAccount,
    //     newAccount: activeAccount,
    //   })
    //   return
    // }
    // if (activeAccount.address && socket) {
    //   debouncedLogin(activeAccount.address, activeAccount.chainType)
    // }
  }, [activeAccount, accountIsLoading])

  return (
    <WalletContext.Provider value={value}>
      {LinkModal}
      {children}
    </WalletContext.Provider>
  )
}
