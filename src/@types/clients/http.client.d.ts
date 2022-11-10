import { CodeStatusError } from "../dtos/code-status-error";

declare namespace HttpClient {
  type PostParams = {
    options?: ExternalModules.Axios.AxiosRequestConfig;
    body: Object;
    path: string;
  };

  type PutParams = {
    options?: ExternalModules.Axios.AxiosRequestConfig;
    body: Object;
    path: string;
  };

  type GetParams = {
    options?: ExternalModules.Axios.AxiosRequestConfig;
    params?: Object;
    path: string;
  };

  type Response<T> = ExternalModules.Axios.AxiosResponse<T>;

  type ResponseErrorHTTP = {
    code_error: CodeStatusError;
    message: string;
  };
}
