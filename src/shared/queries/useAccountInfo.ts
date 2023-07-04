import { UseQueryResult, useQuery } from '@tanstack/react-query'
import { WalletContext } from 'app/contexts/wallet'
import { useContext } from 'react'
import { AccountControllerService } from 'shared/api'

export const useAccountInfo = (): UseQueryResult => {
  const { accountId } = useContext(WalletContext)
  const query = useQuery(['accountInfo', accountId], () =>
    AccountControllerService.accountControllerGetAccountInfo(accountId),
  )

  return query
}
