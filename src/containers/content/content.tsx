import React, { FC, useCallback, useState } from "react";
import { Container, Grid, Text as TextBlock } from "@chakra-ui/react";
import { useQuery } from "@apollo/client";
import LodashDebounce from "lodash/debounce";

import SearchResults from "../../components/search/searchResults";
import ContentCard from "../../components/card/content-card";
import LoadingSkeleton from "../../components/card/card-skeleton";
import { GET_CONTENTS } from "../../query/get-contents";
import { CONTENT_TYPES } from "../../constants/content-types";
import { CardContent } from "../../types/content.types";

const ContentWrapper: FC = () => {
  const [keyword, setKeyword] = useState("");
  const { loading, error, data } = useQuery(GET_CONTENTS, {
    variables: {
      filter: {
        types: [CONTENT_TYPES.PODCAST],
        limit: 20,
        keywords: keyword,
      },
    },
  });

  const { edges } = data?.contentCards || {};

  const handleSearchData = useCallback((value: string) => {
    setKeyword(value);
  }, []);

  const debouncedHandleKeyWordChange = LodashDebounce(handleSearchData, 300);

  return (
    <Container>
      <SearchResults onSearchData={debouncedHandleKeyWordChange} />
      <Grid templateColumns="repeat(1, 1fr)" gap={6}>
        {loading && <LoadingSkeleton loadingArray={5} />}
        {!loading && edges?.length > 0 && (
          <>
            {edges?.map((item: CardContent) => (
              <ContentCard key={item.id} content={item} />
            ))}
          </>
        )}
        {!loading && edges?.length === 0 && (
          <TextBlock fontSize="12px" fontWeight="700" color="white" ml="4px">
            Oops, this is not available at the moment.
          </TextBlock>
        )}
        {loading && error && (
          <TextBlock fontSize="12px" fontWeight="700" color="white" ml="4px">
            Something went wrong!!!
          </TextBlock>
        )}
      </Grid>
    </Container>
  );
};

export default ContentWrapper;
