import {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError
} from "axios";

declare global {
  namespace ExternalModules {
    namespace Axios {
      export type {
        AxiosInstance,
        AxiosRequestConfig,
        AxiosResponse,
        AxiosError
      };
    }
  }
}
