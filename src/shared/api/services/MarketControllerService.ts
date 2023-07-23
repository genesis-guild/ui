/* istanbul ignore file */


/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise'
import { OpenAPI } from '../core/OpenAPI'
import { request as __request } from '../core/request'
import type { ListItemDto } from '../models/ListItemDto'
import type { NftDto } from '../models/NftDto'

export class MarketControllerService {
  /**
   * Get all listings
   * @returns ListItemDto Get all listings
   * @throws ApiError
   */
  public static marketControllerGetListedNfts(): CancelablePromise<
    Array<ListItemDto>
  > {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/market/all-listings',
    })
  }

  /**
   * List an NFT
   * @param requestBody
   * @returns ListItemDto List an NFT
   * @throws ApiError
   */
  public static marketControllerList(
    requestBody: NftDto,
  ): CancelablePromise<ListItemDto> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/market/list',
      body: requestBody,
      mediaType: 'application/json',
    })
  }
}
