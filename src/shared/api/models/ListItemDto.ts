/* istanbul ignore file */


/* eslint-disable */
import type { GameDto } from './GameDto'
import type { NftDto } from './NftDto'

export type ListItemDto = {
  nft: NftDto
  game: GameDto
  distribution: string
  hash: string
}
