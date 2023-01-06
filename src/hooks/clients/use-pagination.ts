import { useCallback, useEffect, useState } from "react";
import { HttpClient } from "../../@types/clients/http.client";

type UsePaginationProps = {
  fetchData<T>(
    params: HttpClient.PaginateParams
  ): Promise<HttpClient.PaginateResponse<T>>;
  params?: object;
};

export function usePagination<T>({ fetchData, params }: UsePaginationProps) {
  const [page, setPage] = useState(0);
  const [data, setData] = useState<T[]>([]);
  const [totalPage, setTotalPage] = useState(0);

  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingPaginate, setIsLoadingPaginate] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const addNewItemData = useCallback((item: T) => {
    setData((oldData) => [item, ...oldData]);
  }, []);

  const handleMore = useCallback(() => {
    if (isLoading || page > totalPage) return;

    setIsLoadingPaginate(true);

    fetchData<T>({
      page,
      ...params
    })
      .then(({ data }) => {
        setData((oldData) => [...oldData, ...data]);
        setPage((oldPage) => oldPage + 1);
      })
      .finally(() => {
        setIsLoadingPaginate(false);
      });
  }, [page, totalPage, isLoading]);


  

  const handleRefresh = useCallback(() => {
    setIsRefreshing(true);

    fetchData<T>({
      page: 0,
      ...params
    })
      .then(({ data }) => {
        setData(data);
        setPage(1);
      })
      .finally(() => {
        setIsRefreshing(false);
      });
  }, []);

  useEffect(() => {
    fetchData<T>({
      page: 0,
      ...params
    })
      .then(({ data, total_page }) => {
        setData(data);
        setTotalPage(total_page);
        setPage((oldPage) => oldPage + 1);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return {
    handleMore,
    data,
    isLoading,
    isLoadingPaginate,
    handleRefresh,
    isRefreshing,
    addNewItemData
  };
}
