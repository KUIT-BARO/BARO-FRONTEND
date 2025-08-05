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
  DeleteData,
  GetHomePageData,
  GetProfileData,
  GetProfileSettingData,
  SignupData,
  SignUpRequestDTO,
  UpdatePasswordData,
  UpdateProfileData,
  UserUpdatePasswordRequestDTO,
  UserUpdateProfileRequestDTO,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Users<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * @description 회원가입을 합니다. 토큰이 필요하지 않습니다.
   *
   * @tags Auth API
   * @name Signup
   * @summary 회원가입
   * @request POST:/users/signup
   * @secure
   * @response `200` `SignupData` OK
   * @response `400` `void`
   * @response `401` `void`
   * @response `403` `void`
   * @response `404` `void`
   * @response `405` `void`
   * @response `500` `void`
   */
  signup = (data: SignUpRequestDTO, params: RequestParams = {}) =>
    this.request<SignupData, void>({
      path: `/users/signup`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 프로필 수정 기능 호출 시 프로필을 조회하는 기능입니다.
   *
   * @tags My Page
   * @name GetProfile
   * @summary 유저 프로필 수정 화면
   * @request GET:/users/profile
   * @secure
   * @response `200` `GetProfileData` OK
   * @response `400` `void`
   * @response `401` `void`
   * @response `403` `void`
   * @response `404` `void`
   * @response `405` `void`
   * @response `500` `void`
   */
  getProfile = (
    query: {
      /** @format int64 */
      userId: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<GetProfileData, void>({
      path: `/users/profile`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description 유저의 이름, 프로필 사진을 변경합니다.
   *
   * @tags My Page
   * @name UpdateProfile
   * @summary 유저 프로필 수정
   * @request POST:/users/profile
   * @secure
   * @response `200` `UpdateProfileData` OK
   * @response `400` `void`
   * @response `401` `void`
   * @response `403` `void`
   * @response `404` `void`
   * @response `405` `void`
   * @response `500` `void`
   */
  updateProfile = (
    data: UserUpdateProfileRequestDTO,
    params: RequestParams = {},
  ) =>
    this.request<UpdateProfileData, void>({
      path: `/users/profile`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 사용자의 비밀번호를 변경합니다.
   *
   * @tags My Page
   * @name UpdatePassword
   * @summary 비밀번호 변경
   * @request POST:/users/password
   * @secure
   * @response `200` `UpdatePasswordData` OK
   * @response `400` `void`
   * @response `401` `void`
   * @response `403` `void`
   * @response `404` `void`
   * @response `405` `void`
   * @response `500` `void`
   */
  updatePassword = (
    data: UserUpdatePasswordRequestDTO,
    params: RequestParams = {},
  ) =>
    this.request<UpdatePasswordData, void>({
      path: `/users/password`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 메인 홈 화면을 조회합니다.
   *
   * @tags Home Page
   * @name GetHomePage
   * @summary 홈 화면 조회
   * @request GET:/users
   * @secure
   * @response `200` `GetHomePageData` OK
   * @response `400` `void`
   * @response `401` `void`
   * @response `403` `void`
   * @response `404` `void`
   * @response `405` `void`
   * @response `500` `void`
   */
  getHomePage = (params: RequestParams = {}) =>
    this.request<GetHomePageData, void>({
      path: `/users`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * @description 사용자가 회원 탈퇴를 합니다.
   *
   * @tags My Page
   * @name Delete
   * @summary 회원 탈퇴
   * @request DELETE:/users
   * @secure
   * @response `200` `DeleteData` OK
   * @response `400` `void`
   * @response `401` `void`
   * @response `403` `void`
   * @response `404` `void`
   * @response `405` `void`
   * @response `500` `void`
   */
  delete = (
    query: {
      /** @format int64 */
      userId: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<DeleteData, void>({
      path: `/users`,
      method: "DELETE",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description 마이페이지에서 설정 기능 호출 시 프로필을 조회하는 기능입니다.
   *
   * @tags My Page
   * @name GetProfileSetting
   * @summary 마이페이지 설정 화면
   * @request GET:/users/profile-setting
   * @secure
   * @response `200` `GetProfileSettingData` OK
   * @response `400` `void`
   * @response `401` `void`
   * @response `403` `void`
   * @response `404` `void`
   * @response `405` `void`
   * @response `500` `void`
   */
  getProfileSetting = (
    query: {
      /** @format int64 */
      userId: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<GetProfileSettingData, void>({
      path: `/users/profile-setting`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
}
