import { useEffect } from 'react'
import { useConnect } from 'shared/hooks/useConnect'
import { log } from 'shared/utils/log'

export const Wallet: React.FC = () => {
  const { account, isLoading } = useConnect()

  log('info', 'account = ', account, 'isLoading = ', isLoading)

  useEffect(() => {
    if (isLoading) return

    if (!account) {
      localStorage.removeItem('account')

      return
    }

    localStorage.setItem('account', JSON.stringify(account))
  }, [account, isLoading])

  return <></>
}
