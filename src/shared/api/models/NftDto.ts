/* istanbul ignore file */


/* eslint-disable */
import type { NftContractDto } from './NftContractDto'

export type NftDto = {
  contract: NftContractDto
  tokenId: string
  title: string
  description: string
  chainType: NftDto.chainType
  owner: string
}

export namespace NftDto {
  export enum chainType {
    ETH = 'eth',
  }
}
