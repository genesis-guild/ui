import { Account, Tokens } from 'shared/types'

export const getAccount = (key = 'account'): Account | undefined => {
  const accountJSON = localStorage.getItem(key)

  if (!accountJSON) return undefined

  return JSON.parse(accountJSON)
}

export const getAccountAT = (_account?: Account): string | undefined => {
  const account = _account ?? getAccount()

  const tokens = localStorage.getItem(stringifyAccount(account))

  if (!tokens) return undefined

  return (JSON.parse(tokens) as Tokens).at
}

export const stringifyAccount = (account: Account | undefined): string => {
  if (!account) return ''

  return `${account.chainType}:${account.address}`
}
