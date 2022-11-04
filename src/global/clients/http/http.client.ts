import axios, { AxiosError } from "axios";
import { ClientHttp } from "../../../@types/global/clients/http/client-http";

export const client = axios.create({
  baseURL: "http://localhost:3333",
  timeout: 30000
});

client.interceptors.request.use(async (config) => {
  return config;
});

client.interceptors.response.use(
  async (response) => {
    return response;
  },
  async (error: AxiosError) => {
    return Promise.reject(error);
  }
);

export function setDefaultToken(token: string) {
  client.defaults.headers.common["Authorization"] = token;
}

export async function httpClientGet<T>({
  path,
  options,
  params
}: ClientHttp.GetParams): Promise<T> {
  const response = await client.get<T>(path, {
    ...options,
    params
  });

  return response.data;
}

export async function httpClientPost<T>({
  path,
  options,
  body
}: ClientHttp.PostParams): Promise<T> {
  const response = await client.post<T>(path, body, {
    ...options
  });

  return response.data;
}
