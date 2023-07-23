/* istanbul ignore file */


/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise'
import { OpenAPI } from '../core/OpenAPI'
import { request as __request } from '../core/request'
import type { BadgeDto } from '../models/BadgeDto'

export class BadgeControllerService {
  /**
   * Get badge
   * @param address User account id
   * @returns BadgeDto Get badge
   * @throws ApiError
   */
  public static badgeControllerGetUserBadges(
    address: string,
  ): CancelablePromise<BadgeDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/badge',
      headers: {
        address: address,
      },
    })
  }

  /**
   * Mint badge
   * @param address User account id
   * @returns any Mint badge
   * @throws ApiError
   */
  public static badgeControllerMintBadge(
    address: string,
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/badge/mint',
      headers: {
        address: address,
      },
    })
  }
}
