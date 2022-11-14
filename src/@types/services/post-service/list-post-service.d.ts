declare namespace ListPostService {
  interface ListPostResponse {
    posts: PostType[];
    page: number;
    page_size: number;
    total_page: number;
  }
}
