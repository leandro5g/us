import { useCallback } from "react";

import { useStorage } from "../libs/storage";

type TokenResponse = {
  token: string;
};

export function useAuthenticate() {
  const { KEY_TOKEN, getItem, KEY_USER } = useStorage();

  const getDataStorage = useCallback(async () => {
    const responseToken = (await getItem(KEY_TOKEN)) as TokenResponse;

    if (responseToken?.token) {
      const user = (await getItem(KEY_USER)) as User.UserModal;

      if (user) {
        return {
          token: responseToken.token,
          user
        };
      }
    }
  }, []);

  return { getDataStorage };
}
