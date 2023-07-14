/* istanbul ignore file */

/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise'
import { OpenAPI } from '../core/OpenAPI'
import { request as __request } from '../core/request'
import type { BadgeDto } from '../models/BadgeDto'

export class BadgeControllerService {
  /**
   * Get badge
   * @param accountId User account id
   * @returns BadgeDto Get badge
   * @throws ApiError
   */
  public static badgeControllerGetUserBadges(
    accountId: string,
  ): CancelablePromise<BadgeDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/badge',
      headers: {
        accountId: accountId,
      },
    })
  }

  /**
   * Mint badge
   * @param accountId User account id
   * @returns any Mint badge
   * @throws ApiError
   */
  public static badgeControllerMintBadge(
    accountId: string,
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/badge/mint',
      headers: {
        accountId: accountId,
      },
    })
  }
}
