declare namespace SignInService {
  type SignInReponse = {
    token: string;
    user: User.UserModal;
  };

  type SignInErrorResponse = ClientDTO.ResponseErrorHttpClient;
}
