/* istanbul ignore file */


/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise'
import { OpenAPI } from '../core/OpenAPI'
import { request as __request } from '../core/request'
import type { AccountDto } from '../models/AccountDto'

export class AccountControllerService {
  /**
   * Get account info
   * @param address User account id
   * @returns AccountDto Get account info
   * @throws ApiError
   */
  public static accountControllerGetAccountInfo(
    address: string,
  ): CancelablePromise<AccountDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/account',
      headers: {
        address: address,
      },
    })
  }

  /**
   * Get account nfts
   * @param address User account id
   * @returns any Get account nfts
   * @throws ApiError
   */
  public static accountControllerGetOwnedNfts(
    address: string,
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/account/nfts',
      headers: {
        address: address,
      },
    })
  }
}
