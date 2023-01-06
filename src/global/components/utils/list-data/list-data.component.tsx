import React from "react";
import { ListRenderItemInfo } from "react-native";
import { HttpClient } from "../../../../@types/clients/http.client";

import { usePagination } from "../../../../hooks/clients/use-pagination";

import { Loading } from "../loading/loading.component";

import { Container, Content, List } from "./list-data.styles";

type ListDataProps = {
  fetchData<T>(
    params: HttpClient.PaginateParams
  ): Promise<HttpClient.PaginateResponse<T>>;
  renderItem(props: ListRenderItemInfo<any>): JSX.Element;
};

function ListData<M>({ fetchData, renderItem }: ListDataProps) {
  const {
    data,
    handleMore,
    isLoading,
    isLoadingPaginate,
    handleRefresh,
    isRefreshing
  } = usePagination<M>({ fetchData });

  return (
    <Container>
      {!isLoading && (
        <Content>
          <List
            showsVerticalScrollIndicator={false}
            data={data}
            onRefresh={handleRefresh}
            refreshing={isRefreshing}
            onEndReached={handleMore}
            onEndReachedThreshold={0.7}
            keyExtractor={(_, index) => String(index)}
            renderItem={renderItem}
            ListFooterComponent={() => (
              <Loading isLoading={isLoadingPaginate} />
            )}
          />
        </Content>
      )}

      {isLoading && <Loading isLoading={isLoading} />}
    </Container>
  );
}

export { ListData };
