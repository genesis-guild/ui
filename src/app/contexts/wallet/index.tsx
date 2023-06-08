import { createContext, useCallback, useEffect, useState } from 'react'

const accountState = {
  isConnected: false,
  accountId: '',
  chainId: '',
}

const defaultState = {
  ...accountState,
  connectMetamask: () => {},
  connectSuiWallet: () => {},
  logout: () => {},
}

export const WalletContext = createContext(defaultState)

interface WalletProviderProps {
  children: React.ReactNode
}

export const WalletProvider: React.FC<WalletProviderProps> = ({ children }) => {
  const state = localStorage.getItem('account')
    ? JSON.parse(localStorage.getItem('account')!)
    : null

  const [isConnected, setIsConnected] = useState(
    state?.isConnected || defaultState.isConnected,
  )
  const [accountId, setAccountId] = useState(
    state?.accountId || defaultState.accountId,
  )
  const [chainId, setChainId] = useState(state?.chainId || defaultState.chainId)

  const connectMetamask = useCallback(() => {
    if (!window.ethereum) {
      return
    }
    window.ethereum
      .request({ method: 'eth_requestAccounts' })
      .then((res: string[]) => {
        setIsConnected(true)
        setAccountId(res[0])

        window.ethereum.on('accountsChanged', (accounts: string[]) => {
          if (!accounts.length) {
            logout()
            return
          }
          setAccountId(accounts[0])
        })

        window.ethereum.on('chainChanged', (chainId: string) => {
          setChainId(chainId)
        })
      })
      .catch((error: unknown) => console.log(error))
  }, [])

  useEffect(() => {
    localStorage.setItem(
      'account',
      JSON.stringify({ isConnected, accountId, chainId }),
    )
  }, [isConnected, accountId, chainId])

  const logout = () => {
    setIsConnected(false)
    setAccountId('')
    setChainId('')
  }

  const connectSuiWallet = useCallback(() => {
    console.log(window.__suiet__)
  }, [])

  return (
    <WalletContext.Provider
      value={{
        isConnected,
        connectMetamask,
        connectSuiWallet,
        logout,
        accountId,
        chainId,
      }}
    >
      {children}
    </WalletContext.Provider>
  )
}
