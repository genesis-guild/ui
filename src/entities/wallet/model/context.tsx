import { createContext, useEffect, useMemo, useState } from 'react'

import { useSubscribeToMessage } from 'shared/hooks'
import { Account, ChainType, MessageEvent } from 'shared/types'
import { log, stringifyAccount } from 'shared/utils'

import { useConnect, useEthConntect, useSuiConnect } from '../lib/hooks'

interface WalletContextType {
  activeAccount: Account | undefined
  accountIsLoading: boolean
  sessionAccounts: [Account | undefined, Account | undefined]
}

export const WalletContext = createContext<WalletContextType>({
  activeAccount: undefined,
  accountIsLoading: true,
  sessionAccounts: [undefined, undefined],
})

export const WalletProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [sessionAccounts, setSessionAccounts] = useState<
    WalletContextType['sessionAccounts']
  >([undefined, undefined])
  const { signMessage } = useConnect()
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
      sessionAccounts,
    }),
    [activeAccount, accountIsLoading, sessionAccounts],
  )

  useSubscribeToMessage(
    MessageEvent.SIGN_MESSAGE,
    ({ message }) => {
      if (!activeAccount) return

      signMessage(activeAccount.chainType, message)
    },
    [activeAccount, signMessage],
  )

  useSubscribeToMessage(MessageEvent.TOKENS, ({ tokens, account }) => {
    localStorage.setItem(stringifyAccount(account), JSON.stringify(tokens))
  })

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
  }, [activeAccount])

  useEffect(() => {
    if (accountIsLoading) return

    if (!activeAccount) {
      setSessionAccounts([undefined, undefined])
    }

    setSessionAccounts(([, curr]) => [curr, activeAccount])
  }, [activeAccount, accountIsLoading])

  return (
    <WalletContext.Provider value={value}>{children}</WalletContext.Provider>
  )
}
