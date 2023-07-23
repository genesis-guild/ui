import { Account, Tokens } from 'shared/types'

export const getAccount = (): Account | undefined => {
  const accountJSON = localStorage.getItem('account')

  if (!accountJSON) return undefined

  return JSON.parse(accountJSON)
}

export const getAccountAT = (): string | undefined => {
  const account = getAccount()

  const tokens = localStorage.getItem(stringifyAccount(account))

  if (!tokens) return undefined

  return (JSON.parse(tokens) as Tokens).at
}

export const stringifyAccount = (account: Account | undefined): string => {
  if (!account) return ''

  return `${account.chainType}:${account.address}`
}
