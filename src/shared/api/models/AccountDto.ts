/* istanbul ignore file */
/* eslint-disable */

export type AccountDto = {
  hasBadge: boolean
  accountId: string
  chainType: AccountDto.chainType
  linked: boolean
}

export namespace AccountDto {
  export enum chainType {
    ETH = 'eth',
  }
}
