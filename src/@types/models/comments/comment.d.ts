declare namespace Comment {
  type CommentType = {
    id: string;
    user_id: string;
    post_id: string;
    content: string;
    is_anonymos: boolean;
    created_at: Date;
    updated_at: Date;
    user: {
      id: string;
      avatar: string;
      name: string;
    };
  };
}
