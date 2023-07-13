/* istanbul ignore file */

/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise'
import { OpenAPI } from '../core/OpenAPI'
import { request as __request } from '../core/request'
import type { AuthDto } from '../models/AuthDto'
import type { GameDto } from '../models/GameDto'

export class AdminControllerService {
  /**
   * Login
   * @param requestBody
   * @returns any Login
   * @throws ApiError
   */
  public static adminControllerAuth(
    requestBody: AuthDto,
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/admin/login',
      body: requestBody,
      mediaType: 'application/json',
    })
  }

  /**
   * Add game
   * @param requestBody
   * @returns any Add game
   * @throws ApiError
   */
  public static adminControllerAddGame(
    requestBody: GameDto,
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/admin/add-game',
      body: requestBody,
      mediaType: 'application/json',
    })
  }

  /**
   * Get games
   * @returns GameDto Get games
   * @throws ApiError
   */
  public static adminControllerGetGames(): CancelablePromise<Array<GameDto>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/admin/games',
    })
  }
}
