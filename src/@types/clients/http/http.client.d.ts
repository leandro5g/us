import { AxiosRequestConfig, AxiosResponse } from "axios";

declare namespace HttpClient {
  type PostParams = {
    options?: AxiosRequestConfig;
    body?: Object;
    path: string;
  };

  type GetParams = {
    options?: AxiosRequestConfig;
    params?: Object;
    path: string;
  };

  type Response<T> = AxiosResponse<T>;
}
