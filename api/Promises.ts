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
  CloseVoteData,
  GetCategoryPlacesData,
  GetConfirmedPromiseResponseData,
  GetHasVotedData,
  GetPendingPromiseData,
  GetPromiseAvailableTimeData,
  GetPromiseAvailableTimeError,
  GetPromiseManagementPageData,
  GetPromiseStatusData,
  GetPromiseSuggestRemainingTimeResponseData,
  GetPromiseVoteRemainingTimeResponseData,
  GetSuggestedPlaceData,
  GetVoteCandidateListData,
  GetVotingPromiseData,
  InitVoteData,
  PromiseSuggestRequestDTO,
  PromiseVoteRequestDTO,
  SetPromiseAvailableTimeData,
  SetPromiseAvailableTimeRequestDTO,
  SetPromiseSuggestedPlaceRequestDTO,
  SetSuggestedPlacesData,
  SuggestPromiseData,
  VoteData,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Promises<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * @description 약속 이름, 날짜, 장소등을 입력하여 약속을 제안합니다.
   *
   * @tags 약속 제안 API
   * @name SuggestPromise
   * @summary 약속 제안
   * @request POST:/promises
   * @secure
   * @response `200` `SuggestPromiseData` OK
   * @response `400` `void`
   * @response `401` `void`
   * @response `403` `void`
   * @response `404` `void`
   * @response `405` `void`
   * @response `500` `void`
   */
  suggestPromise = (
    query: {
      /** @format int64 */
      userId: number;
    },
    data: PromiseSuggestRequestDTO,
    params: RequestParams = {},
  ) =>
    this.request<SuggestPromiseData, void>({
      path: `/promises`,
      method: "POST",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 실제로 원하는 시간, 장소에 투표합니다.
   *
   * @tags 약속 현황 API
   * @name Vote
   * @summary 투표하기
   * @request POST:/promises/{promiseId}/vote
   * @secure
   * @response `200` `VoteData` OK
   * @response `400` `void`
   * @response `401` `void`
   * @response `403` `void`
   * @response `404` `void`
   * @response `405` `void`
   * @response `500` `void`
   */
  vote = (
    promiseId: number,
    query: {
      /** @format int64 */
      userId: number;
    },
    data: PromiseVoteRequestDTO,
    params: RequestParams = {},
  ) =>
    this.request<VoteData, void>({
      path: `/promises/${promiseId}/vote`,
      method: "POST",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 약속 시간 선택 초기 화면입니다.
   *
   * @tags Promise Acceptance
   * @name GetPromiseAvailableTime
   * @summary 약속 수락 - 시간 선택 초기
   * @request GET:/promises/{promiseId}/time-choice
   * @secure
   * @response `200` `GetPromiseAvailableTimeData` OK
   * @response `400` `BaseErrorResponse` Bad Request
   * @response `500` `BaseErrorResponse` Internal Server Error
   */
  getPromiseAvailableTime = (promiseId: number, params: RequestParams = {}) =>
    this.request<GetPromiseAvailableTimeData, GetPromiseAvailableTimeError>({
      path: `/promises/${promiseId}/time-choice`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * @description 약속 참여자가 가능한 시간대를 선택합니다.
   *
   * @tags Promise Acceptance
   * @name SetPromiseAvailableTime
   * @summary 약속 수락 - 시간 선택
   * @request POST:/promises/{promiseId}/time-choice
   * @secure
   * @response `200` `SetPromiseAvailableTimeData` OK
   * @response `400` `void`
   * @response `401` `void`
   * @response `403` `void`
   * @response `404` `void`
   * @response `405` `void`
   * @response `500` `void`
   */
  setPromiseAvailableTime = (
    promiseId: number,
    data: SetPromiseAvailableTimeRequestDTO,
    params: RequestParams = {},
  ) =>
    this.request<SetPromiseAvailableTimeData, void>({
      path: `/promises/${promiseId}/time-choice`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 장소 선택 초기 화면입니다.
   *
   * @tags Promise Acceptance
   * @name GetSuggestedPlace
   * @summary 약속 수락 - 장소 선택 초기
   * @request GET:/promises/{promiseId}/place-choice
   * @secure
   * @response `200` `GetSuggestedPlaceData` OK
   * @response `400` `void`
   * @response `401` `void`
   * @response `403` `void`
   * @response `404` `void`
   * @response `405` `void`
   * @response `500` `void`
   */
  getSuggestedPlace = (
    promiseId: number,
    query: {
      /** @format double */
      latitude: number;
      /** @format double */
      longitude: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<GetSuggestedPlaceData, void>({
      path: `/promises/${promiseId}/place-choice`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description 약속 장소로 제안할 장소를 선택완료합니다.
   *
   * @tags Promise Acceptance
   * @name SetSuggestedPlaces
   * @summary 약속 수락 - 장소 선택
   * @request POST:/promises/{promiseId}/place-choice
   * @secure
   * @response `200` `SetSuggestedPlacesData` OK
   * @response `400` `void`
   * @response `401` `void`
   * @response `403` `void`
   * @response `404` `void`
   * @response `405` `void`
   * @response `500` `void`
   */
  setSuggestedPlaces = (
    promiseId: string,
    data: SetPromiseSuggestedPlaceRequestDTO,
    params: RequestParams = {},
  ) =>
    this.request<SetSuggestedPlacesData, void>({
      path: `/promises/${promiseId}/place-choice`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 약속 가능 시간, 약속 제안 장소 데이터를 바탕으로 투표 목록을 생성, 및 투표를 시작(개설)합니다.
   *
   * @tags 약속 현황 API
   * @name InitVote
   * @summary 투표 시작(개설)하기
   * @request POST:/promises/{promiseId}/init-vote
   * @secure
   * @response `200` `InitVoteData` OK
   * @response `400` `void`
   * @response `401` `void`
   * @response `403` `void`
   * @response `404` `void`
   * @response `405` `void`
   * @response `500` `void`
   */
  initVote = (promiseId: number, params: RequestParams = {}) =>
    this.request<InitVoteData, void>({
      path: `/promises/${promiseId}/init-vote`,
      method: "POST",
      secure: true,
      ...params,
    });
  /**
   * @description 투표를 종료하며, 투표 내역을 확인하여 약속 시간, 장소를 확정합니다.
   *
   * @tags 약속 현황 API
   * @name CloseVote
   * @summary 투표 종료하기
   * @request POST:/promises/{promiseId}/close-vote
   * @secure
   * @response `200` `CloseVoteData` OK
   * @response `400` `void`
   * @response `401` `void`
   * @response `403` `void`
   * @response `404` `void`
   * @response `405` `void`
   * @response `500` `void`
   */
  closeVote = (promiseId: number, params: RequestParams = {}) =>
    this.request<CloseVoteData, void>({
      path: `/promises/${promiseId}/close-vote`,
      method: "POST",
      secure: true,
      ...params,
    });
  /**
   * @description 약속 상태가 '투표중'인 약속의 현황을 조회합니다.
   *
   * @tags 약속 현황 API
   * @name GetVotingPromise
   * @summary 약속 현황 - 투표중
   * @request GET:/promises/{promiseId}/voting
   * @secure
   * @response `200` `GetVotingPromiseData` OK
   * @response `400` `void`
   * @response `401` `void`
   * @response `403` `void`
   * @response `404` `void`
   * @response `405` `void`
   * @response `500` `void`
   */
  getVotingPromise = (
    promiseId: number,
    query: {
      isHost: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<GetVotingPromiseData, void>({
      path: `/promises/${promiseId}/voting`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description 현재 로그인한 유저가 특정 약속에 대해 투표에 참여했는지 여부를 조회합니다.
   *
   * @tags 약속 현황 API
   * @name GetHasVoted
   * @summary 투표 참여 여부 조회
   * @request GET:/promises/{promiseId}/voting-status
   * @secure
   * @response `200` `GetHasVotedData` OK
   * @response `400` `void`
   * @response `401` `void`
   * @response `403` `void`
   * @response `404` `void`
   * @response `405` `void`
   * @response `500` `void`
   */
  getHasVoted = (
    promiseId: number,
    query: {
      /** @format int64 */
      userId: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<GetHasVotedData, void>({
      path: `/promises/${promiseId}/voting-status`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description 투표 만료까지 남은 시간을 조회합니다. 24시간 이상 남을 경우 D-N 형식, 24시간 미만으로 남을 경우 OO시 OO분 OO초 형식
   *
   * @tags 약속 현황 API
   * @name GetPromiseVoteRemainingTimeResponse
   * @summary 투표 남은 시간 조회
   * @request GET:/promises/{promiseId}/vote-remaining-time
   * @secure
   * @response `200` `GetPromiseVoteRemainingTimeResponseData` OK
   * @response `400` `void`
   * @response `401` `void`
   * @response `403` `void`
   * @response `404` `void`
   * @response `405` `void`
   * @response `500` `void`
   */
  getPromiseVoteRemainingTimeResponse = (
    promiseId: number,
    params: RequestParams = {},
  ) =>
    this.request<GetPromiseVoteRemainingTimeResponseData, void>({
      path: `/promises/${promiseId}/vote-remaining-time`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * @description 투표의 후보 목록을 조회합니다. 만약 투표를 하기 이전이라면 그냥 목록만 보이고, 투표를 한 이후 투표 확인, 혹은 수정을 하기 위해 진입한 경우 기존에 어떤 후보에 투표했었는지에 관한 정보를 함께 반환합니다.
   *
   * @tags 약속 현황 API
   * @name GetVoteCandidateList
   * @summary 투표 후보 목록 조회
   * @request GET:/promises/{promiseId}/vote-candidate-list
   * @secure
   * @response `200` `GetVoteCandidateListData` OK
   * @response `400` `void`
   * @response `401` `void`
   * @response `403` `void`
   * @response `404` `void`
   * @response `405` `void`
   * @response `500` `void`
   */
  getVoteCandidateList = (
    promiseId: number,
    query: {
      /** @format int64 */
      userId: number;
      hasVoted: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<GetVoteCandidateListData, void>({
      path: `/promises/${promiseId}/vote-candidate-list`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description 약속 제안의 남은 시간을 조회합니다. 24시간 이상 남을 경우 D-N 형식, 24시간 미만으로 남을 경우 OO시 OO분 OO초 형식
   *
   * @tags 약속 현황 API
   * @name GetPromiseSuggestRemainingTimeResponse
   * @summary 약속 제안 남은 시간 조회
   * @request GET:/promises/{promiseId}/suggest-remaining-time
   * @secure
   * @response `200` `GetPromiseSuggestRemainingTimeResponseData` OK
   * @response `400` `void`
   * @response `401` `void`
   * @response `403` `void`
   * @response `404` `void`
   * @response `405` `void`
   * @response `500` `void`
   */
  getPromiseSuggestRemainingTimeResponse = (
    promiseId: number,
    params: RequestParams = {},
  ) =>
    this.request<GetPromiseSuggestRemainingTimeResponseData, void>({
      path: `/promises/${promiseId}/suggest-remaining-time`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * @description 약속의 상태를 확인합니다.
   *
   * @tags 약속 현황 API
   * @name GetPromiseStatus
   * @summary 약속 상태 확인
   * @request GET:/promises/{promiseId}/status
   * @secure
   * @response `200` `GetPromiseStatusData` OK
   * @response `400` `void`
   * @response `401` `void`
   * @response `403` `void`
   * @response `404` `void`
   * @response `405` `void`
   * @response `500` `void`
   */
  getPromiseStatus = (
    promiseId: number,
    query: {
      /** @format int64 */
      userId: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<GetPromiseStatusData, void>({
      path: `/promises/${promiseId}/status`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description 약속 상태가 '미정'인 약속의 현황을 조회합니다.
   *
   * @tags 약속 현황 API
   * @name GetPendingPromise
   * @summary 약속 현황 - 미정
   * @request GET:/promises/{promiseId}/pending
   * @secure
   * @response `200` `GetPendingPromiseData` OK
   * @response `400` `void`
   * @response `401` `void`
   * @response `403` `void`
   * @response `404` `void`
   * @response `405` `void`
   * @response `500` `void`
   */
  getPendingPromise = (
    promiseId: number,
    query: {
      isHost: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<GetPendingPromiseData, void>({
      path: `/promises/${promiseId}/pending`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description 약속 상태가 '확정'인 약속의 현황을 조회합니다.
   *
   * @tags 약속 현황 API
   * @name GetConfirmedPromiseResponse
   * @summary 약속 현황 - 확정
   * @request GET:/promises/{promiseId}/confirmed
   * @secure
   * @response `200` `GetConfirmedPromiseResponseData` OK
   * @response `400` `void`
   * @response `401` `void`
   * @response `403` `void`
   * @response `404` `void`
   * @response `405` `void`
   * @response `500` `void`
   */
  getConfirmedPromiseResponse = (
    promiseId: number,
    params: RequestParams = {},
  ) =>
    this.request<GetConfirmedPromiseResponseData, void>({
      path: `/promises/${promiseId}/confirmed`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * @description 약속 관리 페이지에 필요한 데이터를 반환합니다.
   *
   * @tags 약속 관리 페이지 API
   * @name GetPromiseManagementPage
   * @summary 약속 관리 페이지
   * @request GET:/promises/management
   * @secure
   * @response `200` `GetPromiseManagementPageData` OK
   * @response `400` `void`
   * @response `401` `void`
   * @response `403` `void`
   * @response `404` `void`
   * @response `405` `void`
   * @response `500` `void`
   */
  getPromiseManagementPage = (
    query: {
      isHost: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<GetPromiseManagementPageData, void>({
      path: `/promises/management`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description 카테고리를 통해 장소를 찾습니다.
   *
   * @tags Promise Acceptance
   * @name GetCategoryPlaces
   * @summary 약속 수락 - 장소 카테고리 검색
   * @request GET:/promises/category-places
   * @secure
   * @response `200` `GetCategoryPlacesData` OK
   * @response `400` `void`
   * @response `401` `void`
   * @response `403` `void`
   * @response `404` `void`
   * @response `405` `void`
   * @response `500` `void`
   */
  getCategoryPlaces = (
    query: {
      categories: string[];
      /** @format double */
      latitude: number;
      /** @format double */
      longitude: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<GetCategoryPlacesData, void>({
      path: `/promises/category-places`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
}
