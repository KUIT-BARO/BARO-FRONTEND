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

import { TestData, TestError } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class HealthCheck<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags test-controller
   * @name Test
   * @request GET:/health-check
   * @secure
   * @response `200` `TestData` OK
   * @response `400` `BaseErrorResponse` Bad Request
   * @response `500` `BaseErrorResponse` Internal Server Error
   */
  test = (params: RequestParams = {}) =>
    this.request<TestData, TestError>({
      path: `/health-check`,
      method: "GET",
      secure: true,
      ...params,
    });
}
