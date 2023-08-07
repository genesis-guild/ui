import { createContext, useEffect, useMemo, useState } from 'react'

import { publishMessage, useSubscribeToMessage } from 'shared/hooks'
import { Account, ChainType, MessageEvent } from 'shared/types'
import { log } from 'shared/utils'

import { useEthConntect, useSuiConnect } from '../lib/hooks'

interface WalletContextType {
  activeAccount: Account | undefined
  accountIsLoading: boolean
}

export const WalletContext = createContext<WalletContextType>({
  activeAccount: undefined,
  accountIsLoading: true,
})

export const WalletProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { account: ethAccount } = useEthConntect()
  const { account: suiAccount } = useSuiConnect()
  const [chainLoading, setIsLoading] = useState<Record<ChainType, boolean>>({
    [ChainType.ETH]: false,
    [ChainType.SUI]: false,
  })
  const activeAccount = useMemo(
    (): Account | undefined => [ethAccount, suiAccount].find(a => a),
    [ethAccount, suiAccount],
  )

  const connectLoading = useMemo(
    () => Object.values(chainLoading).some(b => b),
    [chainLoading],
  )
  const accountIsLoading = useMemo(() => connectLoading, [connectLoading])

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
    MessageEvent.CONNECTION_LOADING,
    ({ isLoading, chainType }) => {
      setIsLoading(currLoading => ({
        ...currLoading,
        [chainType]: isLoading,
      }))
    },
  )

  useEffect(() => {
    if (!activeAccount) {
      localStorage.removeItem('account')

      return
    }

    localStorage.setItem('account', JSON.stringify(activeAccount))
    publishMessage(MessageEvent.LOGIN, undefined)
  }, [activeAccount])

  useEffect(() => {
    if (connectLoading) return

    if (!activeAccount) {
      localStorage.removeItem('sessionAccount')
    }
  }, [activeAccount, connectLoading])

  return (
    <WalletContext.Provider value={value}>{children}</WalletContext.Provider>
  )
}
