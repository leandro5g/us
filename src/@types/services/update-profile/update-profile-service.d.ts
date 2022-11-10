declare namespace UpdateProfileService {
  type Request = {
    name: string;
    email: string;
    password?: string;
    old_password?: string;
  };
}
