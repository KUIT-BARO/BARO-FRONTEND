/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import {
  GetPinData,
  GetPinPageData,
  GetPinPageError,
  RegisterPinData,
} from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Pin<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * @description 새로운 핀을 등록합니다.
   *
   * @tags 핀 API
   * @name RegisterPin
   * @summary 핀 등록
   * @request POST:/pin
   * @secure
   * @response `200` `RegisterPinData` OK
   * @response `400` `void`
   * @response `401` `void`
   * @response `403` `void`
   * @response `404` `void`
   * @response `405` `void`
   * @response `500` `void`
   */
  registerPin = (
    query: {
      /** @format int64 */
      placeId: number;
      placeName?: string;
      placeAddress?: string;
      /**
       * @format double
       * @min -90
       * @max 90
       */
      latitude?: number;
      /**
       * @format double
       * @min -180
       * @max 180
       */
      longitude?: number;
      review: string;
      /** @format int32 */
      score: number;
      categoryIds?: number[];
      /** @format int64 */
      userId: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<RegisterPinData, void>({
      path: `/pin`,
      method: "POST",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description 핀을 열람합니다.
   *
   * @tags 핀 API
   * @name GetPin
   * @summary 핀 열람
   * @request GET:/pin/{pinId}
   * @secure
   * @response `200` `GetPinData` OK
   * @response `400` `void`
   * @response `401` `void`
   * @response `403` `void`
   * @response `404` `void`
   * @response `405` `void`
   * @response `500` `void`
   */
  getPin = (pinId: number, params: RequestParams = {}) =>
    this.request<GetPinData, void>({
      path: `/pin/${pinId}`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * @description 핀 등록 페이지를 열람합니다.
   *
   * @tags 핀 API
   * @name GetPinPage
   * @summary 핀 등록 페이지
   * @request GET:/pin/page
   * @secure
   * @response `200` `GetPinPageData` OK
   * @response `400` `BaseErrorResponse` Bad Request
   * @response `500` `BaseErrorResponse` Internal Server Error
   */
  getPinPage = (params: RequestParams = {}) =>
    this.request<GetPinPageData, GetPinPageError>({
      path: `/pin/page`,
      method: "GET",
      secure: true,
      ...params,
    });
}
