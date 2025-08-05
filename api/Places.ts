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
  PlacePinListData,
  PlaceSearchData,
  PlaceSummaryInfoData,
} from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Places<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * @description 현재 좌표와 카테고리를 기준으로 반경 2KM 이내의 장소를 조회합니다.
   *
   * @tags 장소 탐색 API
   * @name PlaceSearch
   * @summary 장소 탐색
   * @request GET:/places
   * @secure
   * @response `200` `PlaceSearchData` OK
   * @response `400` `void`
   * @response `401` `void`
   * @response `403` `void`
   * @response `404` `void`
   * @response `405` `void`
   * @response `500` `void`
   */
  placeSearch = (
    query: {
      /**
       * 필터링에 사용할 장소 카테고리들의 ID
       * @example "1,2,3,4"
       */
      placeCategoryIds: number[];
      /**
       * 위도
       * @format double
       * @min -90
       * @max 90
       * @example 37.1233712
       */
      latitude: number;
      /**
       * 경도
       * @format double
       * @min -180
       * @max 180
       * @example 121.12371231
       */
      longitude: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<PlaceSearchData, void>({
      path: `/places`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description 특정 장소에 대한 요약 정보 ex) 장소명, 별점, 핀 개수 등등을 조회합니다
   *
   * @tags 장소 탐색 API
   * @name PlaceSummaryInfo
   * @summary 장소 요약 정보 조회
   * @request GET:/places/{placeId}
   * @secure
   * @response `200` `PlaceSummaryInfoData` OK
   * @response `400` `void`
   * @response `401` `void`
   * @response `403` `void`
   * @response `404` `void`
   * @response `405` `void`
   * @response `500` `void`
   */
  placeSummaryInfo = (placeId: number, params: RequestParams = {}) =>
    this.request<PlaceSummaryInfoData, void>({
      path: `/places/${placeId}`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * @description 특정 장소에 대한 핀 목록을 조회합니다.
   *
   * @tags 장소 탐색 API
   * @name PlacePinList
   * @summary 장소 핀 목록 조회
   * @request GET:/places/{placeId}/pins
   * @secure
   * @response `200` `PlacePinListData` OK
   * @response `400` `void`
   * @response `401` `void`
   * @response `403` `void`
   * @response `404` `void`
   * @response `405` `void`
   * @response `500` `void`
   */
  placePinList = (placeId: number, params: RequestParams = {}) =>
    this.request<PlacePinListData, void>({
      path: `/places/${placeId}/pins`,
      method: "GET",
      secure: true,
      ...params,
    });
}
