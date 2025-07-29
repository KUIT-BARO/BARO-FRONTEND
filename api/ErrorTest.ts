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

import { ErrorTestData, ErrorTestError } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class ErrorTest<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags test-controller
   * @name ErrorTest
   * @request GET:/error-test
   * @secure
   * @response `200` `ErrorTestData` OK
   * @response `400` `BaseErrorResponse` Bad Request
   * @response `500` `BaseErrorResponse` Internal Server Error
   */
  errorTest = (params: RequestParams = {}) =>
    this.request<ErrorTestData, ErrorTestError>({
      path: `/error-test`,
      method: "GET",
      secure: true,
      ...params,
    });
}
