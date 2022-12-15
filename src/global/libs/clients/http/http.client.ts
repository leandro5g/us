import axios, { AxiosError } from "axios";
import { HttpClient } from "../../../../@types/clients/http.client";

export const client = axios.create({
  baseURL: "http://192.168.10.24:3333",
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
  client.defaults.headers.common["Authorization"] = `Beare ${token}`;
}

export async function httpClientGet<T>({
  path,
  options,
  params
}: HttpClient.GetParams): Promise<T> {
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
}: HttpClient.PostParams): Promise<T> {
  const response = await client.post<T>(path, body, {
    ...options
  });

  return response.data;
}

export async function httpClientPut<T>({
  path,
  options,
  body
}: HttpClient.PutParams): Promise<T> {
  const response = await client.put<T>(path, body, {
    ...options
  });

  return response.data;
}
