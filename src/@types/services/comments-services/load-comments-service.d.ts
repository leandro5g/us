declare namespace LoadCommentsServiceDTO {
  type Response = {
    comments: Comment.CommentType[];
    page: number;
    page_size: number;
    total_page: number;
  };
}
