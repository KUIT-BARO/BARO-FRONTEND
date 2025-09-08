import { isAxiosError, type AxiosRequestConfig } from 'axios';
import axiosInstance from '@/api/axiosInstance';
import type { BaseResponse } from '@/api/types';

export const HTTPMethod = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
  PATCH: 'PATCH',
} as const;

export type HTTPMethodType = (typeof HTTPMethod)[keyof typeof HTTPMethod];

export interface RequestConfig {
  method: HTTPMethodType;
  url: string;
  query?: Record<string, string | number | boolean>;
  body?: Record<string, unknown> | FormData;
  headers?: Record<string, string>;
}

export const request = async <T>(config: RequestConfig): Promise<T> => {
  const { method, url, query, body, headers } = config;

  const requestConfig: AxiosRequestConfig = {
    method,
    url,
    params: query,
    data: body,
  };

  if (headers) {
    requestConfig.headers = headers;
  } else if (body && !(body instanceof FormData)) {
    requestConfig.headers = { 'Content-Type': 'application/json' };
  }

  try {
    const response = await axiosInstance.request<BaseResponse<T>>(requestConfig);
    return response.data.data;
  } catch (error: unknown) {
    if (!isAxiosError(error)) {
      console.error(`[실패] ${url} : 네트워크 오류`);
      throw error;
    }

    if (error.response) {
      const { status, data } = error.response;
      const message = data?.message;

      const displayMessage = status + ' ' + message || '알 수 없는 오류가 발생했습니다.';

      if (import.meta.env.DEV) {
        console.error(`[실패] ${url} : ${displayMessage}`);
      }
    } else {
      if (import.meta.env.DEV) {
        console.error(`[실패] ${url} : 서버에 연결할 수 없습니다.`);
      }
    }
    throw error;
  }
};
