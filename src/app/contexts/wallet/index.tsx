import { createContext, useCallback, useEffect, useMemo, useState } from 'react'

import { WalletTag } from './types'

const accountState = {
  isConnected: false,
  accountId: '',
  chainId: '',
  walletTag: '' as WalletTag,
  detected: {
    [WalletTag.Metamask]: false,
    [WalletTag.Sui]: false,
  },
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

  const detected = {
    [WalletTag.Metamask]: Boolean(window.ethereum),
    [WalletTag.Sui]: Boolean(window.__suiet__),
  }

  const [isConnected, setIsConnected] = useState(
    state?.isConnected || defaultState.isConnected,
  )

  const [walletTag, setWalletTag] = useState(
    state?.walletTag || defaultState.walletTag,
  )

  const [accountId, setAccountId] = useState(
    state?.accountId || defaultState.accountId,
  )

  const [chainId, setChainId] = useState(state?.chainId || defaultState.chainId)

  const connectMetamask = useCallback(() => {
    if (!detected.metamask) {
      return
    }
    window.ethereum
      .request({ method: 'eth_requestAccounts' })
      .then((res: string[]) => {
        setIsConnected(true)
        setAccountId(res[0])
        setWalletTag(WalletTag.Metamask)

        window.ethereum.on('accountsChanged', (accounts: string[]) => {
          if (!accounts.length) {
            logout()

            return
          }
          setAccountId(accounts[0])
        })

        window.ethereum.on('chainChanged', (chainID: string) => {
          setChainId(chainID)
        })
      })
      .catch(() => {})
  }, [])

  const logout = (): void => {
    setIsConnected(false)
    setAccountId('')
    setChainId('')
  }

  const connectSuiWallet = useCallback(() => {}, [])

  const value = useMemo(
    () => ({
      isConnected,
      detected,
      connectMetamask,
      connectSuiWallet,
      logout,
      walletTag,
      accountId,
      chainId,
    }),
    [isConnected, detected, walletTag, accountId, chainId],
  )

  useEffect(() => {
    localStorage.setItem(
      'account',
      JSON.stringify({ isConnected, accountId, chainId, walletTag }),
    )
  }, [isConnected, accountId, chainId, walletTag])

  return (
    <WalletContext.Provider value={value}>{children}</WalletContext.Provider>
  )
}
