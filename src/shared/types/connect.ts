import { ChainType } from './chain'

export interface ConnectAccountType {
  connected: boolean
  address: string | undefined
  chainType: ChainType
}
