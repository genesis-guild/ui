/* istanbul ignore file */

/* eslint-disable */

export type AccountDto = {
  hasBadge: boolean
  address: string
  chainType: AccountDto.chainType
  linked: boolean
}

export namespace AccountDto {
  export enum chainType {
    ETH = 'eth',
  }
}
