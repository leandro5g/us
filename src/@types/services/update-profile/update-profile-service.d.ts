declare namespace UpdateProfileService {
  type Request = {
    user_id: string;
    name: string;
    password?: string;
    old_password?: string;
  };
}
