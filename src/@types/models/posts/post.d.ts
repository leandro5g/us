declare namespace Post {
  type PostType = {
    id: string;
    user_id: string;
    feeling_id: string;
    content: string;
    is_anonymos: boolean;
    feeling: {
      emoji: string;
      title: string;
    };
    user: {
      name: string;
      avatar: string;
    };
    created_at: Date;
    updated_at: Date;
  };
}
