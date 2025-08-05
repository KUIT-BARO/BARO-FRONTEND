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
  AddScheduleData,
  AddScheduleRequestDTO,
  DeleteScheduleData,
  DeleteScheduleError,
  GetPromiseMemberSchedulesData,
  GetPromiseMemberSchedulesError,
  GetSchedulesData,
  UpdateScheduleData,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Schedules<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * @description 마이페이지에서 일정표를 조회합니다.
   *
   * @tags My Page
   * @name GetSchedules
   * @summary 일정표 조회
   * @request GET:/schedules
   * @secure
   * @response `200` `GetSchedulesData` OK
   * @response `400` `void`
   * @response `401` `void`
   * @response `403` `void`
   * @response `404` `void`
   * @response `405` `void`
   * @response `500` `void`
   */
  getSchedules = (params: RequestParams = {}) =>
    this.request<GetSchedulesData, void>({
      path: `/schedules`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * @description 일정표에 일정을 추가합니다.
   *
   * @tags My Page
   * @name AddSchedule
   * @summary 일정 추가
   * @request POST:/schedules
   * @secure
   * @response `200` `AddScheduleData` OK
   * @response `400` `void`
   * @response `401` `void`
   * @response `403` `void`
   * @response `404` `void`
   * @response `405` `void`
   * @response `409` `void`
   * @response `500` `void`
   */
  addSchedule = (data: AddScheduleRequestDTO, params: RequestParams = {}) =>
    this.request<AddScheduleData, void>({
      path: `/schedules`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 선택한 일정을 삭제합니다.
   *
   * @tags My Page
   * @name DeleteSchedule
   * @summary 일정 삭제
   * @request DELETE:/schedules/{scheduleId}
   * @secure
   * @response `200` `DeleteScheduleData` OK
   * @response `400` `BaseErrorResponse` Bad Request
   * @response `500` `BaseErrorResponse` Internal Server Error
   */
  deleteSchedule = (scheduleId: number, params: RequestParams = {}) =>
    this.request<DeleteScheduleData, DeleteScheduleError>({
      path: `/schedules/${scheduleId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * @description 일정표의 일정을 수정합니다.
   *
   * @tags My Page
   * @name UpdateSchedule
   * @summary 일정 수정
   * @request PATCH:/schedules/{scheduleId}
   * @secure
   * @response `200` `UpdateScheduleData` OK
   * @response `400` `void`
   * @response `401` `void`
   * @response `403` `void`
   * @response `404` `void`
   * @response `405` `void`
   * @response `409` `void`
   * @response `500` `void`
   */
  updateSchedule = (
    scheduleId: number,
    data: AddScheduleRequestDTO,
    params: RequestParams = {},
  ) =>
    this.request<UpdateScheduleData, void>({
      path: `/schedules/${scheduleId}`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 약속 참여자들의 일정표를 조회합니다.
   *
   * @tags Promise Acceptance
   * @name GetPromiseMemberSchedules
   * @summary 약속 참여자 일정표 조회
   * @request GET:/schedules/{userId}
   * @secure
   * @response `200` `GetPromiseMemberSchedulesData` OK
   * @response `400` `BaseErrorResponse` Bad Request
   * @response `500` `BaseErrorResponse` Internal Server Error
   */
  getPromiseMemberSchedules = (userId: number, params: RequestParams = {}) =>
    this.request<GetPromiseMemberSchedulesData, GetPromiseMemberSchedulesError>(
      {
        path: `/schedules/${userId}`,
        method: "GET",
        secure: true,
        ...params,
      },
    );
}
