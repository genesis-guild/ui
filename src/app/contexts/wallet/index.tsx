import { createContext, useCallback, useState } from 'react'

const defaultState = {
  isConnected: false,
  connectMetamask: () => {},
  connectSuiWallet: () => {},
}

export const WalletContext = createContext(defaultState)

interface WalletProviderProps {
  children: React.ReactNode
}

export const WalletProvider: React.FC<WalletProviderProps> = ({ children }) => {
  const [isConnected, setIsConnected] = useState(defaultState.isConnected)

  const connectMetamask = useCallback(() => {
    if (!window.ethereum) {
      return
    }
    window.ethereum
      .request({ method: 'eth_requestAccounts' })
      .then((res: unknown) => console.log(res))
  }, [])

  const connectSuiWallet = useCallback(() => {
    console.log(window.__suiet__)
  }, [])

  return (
    <WalletContext.Provider
      value={{ isConnected, connectMetamask, connectSuiWallet }}
    >
      {children}
    </WalletContext.Provider>
  )
}
