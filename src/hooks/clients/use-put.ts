import { HttpClient } from "../../@types/clients/http.client";
import { httpClientPut } from "../../global/clients/http";

type usePutProps = HttpClient.PutParams;

export async function usePut<T>({
  body,
  path,
  options
}: usePutProps): Promise<T | undefined> {
  try {
    const response = await httpClientPut<T>({
      path,
      options,
      body
    });

    return response;
  } catch (err) {
    console.log(err);
  }
}
