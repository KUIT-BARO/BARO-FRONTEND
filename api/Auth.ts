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
  CheckAuthCodeData,
  CheckAuthCodeError,
  CodeCheckRequestDTO,
  LoginData,
  LoginRequestDTO,
  LogoutData,
  MailRequestDTO,
  ReissueTokensData,
  SendAuthCodeMailData,
  SendAuthCodeMailError,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Auth<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * @description 리프레시 토큰을 가지고 토큰을 재발급합니다. 리프레시 토큰이 필요합니다.
   *
   * @tags Auth API
   * @name ReissueTokens
   * @summary 토큰 재발급
   * @request POST:/auth/reissue
   * @secure
   * @response `200` `ReissueTokensData` OK
   * @response `400` `void`
   * @response `401` `void`
   * @response `403` `void`
   * @response `404` `void`
   * @response `405` `void`
   * @response `500` `void`
   */
  reissueTokens = (params: RequestParams = {}) =>
    this.request<ReissueTokensData, void>({
      path: `/auth/reissue`,
      method: "POST",
      secure: true,
      ...params,
    });
  /**
   * @description 메일로 인증번호를 전송합니다. 액세스 토큰이 필요합니다.
   *
   * @tags Auth API
   * @name SendAuthCodeMail
   * @summary 인증번호 전송
   * @request POST:/auth/mail/send
   * @secure
   * @response `200` `SendAuthCodeMailData` OK
   * @response `400` `BaseErrorResponse` Bad Request
   * @response `500` `BaseErrorResponse` Internal Server Error
   */
  sendAuthCodeMail = (data: MailRequestDTO, params: RequestParams = {}) =>
    this.request<SendAuthCodeMailData, SendAuthCodeMailError>({
      path: `/auth/mail/send`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 메일로 받은 인증번호를 검증합니다. 액세스 토큰이 필요합니다.
   *
   * @tags Auth API
   * @name CheckAuthCode
   * @summary 인증번호 검증
   * @request POST:/auth/mail/check
   * @secure
   * @response `200` `CheckAuthCodeData` OK
   * @response `400` `BaseErrorResponse` Bad Request
   * @response `500` `BaseErrorResponse` Internal Server Error
   */
  checkAuthCode = (data: CodeCheckRequestDTO, params: RequestParams = {}) =>
    this.request<CheckAuthCodeData, CheckAuthCodeError>({
      path: `/auth/mail/check`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 로그인합니다. 토큰이 필요하지 않습니다.
   *
   * @tags Auth API
   * @name Login
   * @summary 로그인
   * @request POST:/auth/login
   * @secure
   * @response `200` `LoginData` OK
   * @response `400` `void`
   * @response `401` `void`
   * @response `403` `void`
   * @response `404` `void`
   * @response `405` `void`
   * @response `500` `void`
   */
  login = (data: LoginRequestDTO, params: RequestParams = {}) =>
    this.request<LoginData, void>({
      path: `/auth/login`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 로그아웃합니다. 액세스 토큰과 리프레시 토큰이 필요합니다.
   *
   * @tags Auth API
   * @name Logout
   * @summary 로그아웃
   * @request PATCH:/auth/logout
   * @secure
   * @response `200` `LogoutData` OK
   * @response `400` `void`
   * @response `401` `void`
   * @response `403` `void`
   * @response `404` `void`
   * @response `405` `void`
   * @response `500` `void`
   */
  logout = (params: RequestParams = {}) =>
    this.request<LogoutData, void>({
      path: `/auth/logout`,
      method: "PATCH",
      secure: true,
      ...params,
    });
}
