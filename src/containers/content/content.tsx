import React, { FC, useCallback, useState } from 'react';
import { Container, Grid, Text as TextBlock } from '@chakra-ui/react';
import { useQuery } from '@apollo/client';
import LodashDebounce from 'lodash/debounce';

import Search from '../../components/search/search';
import ContentCard from '../../components/content-card/content-card';
import LoadingSkeleton from '../../components/content-card/loading-skeleton/loading-skeleton';
import { GET_CONTENTS } from '../../query/get-contents';
import { CONTENT_TYPES } from '../../constants/content-types';
import { IContent } from '../../types/content.types';

const ContentWrapper: FC = () => {
  const [keyword, setKeyword] = useState('');
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
      <Search onSearchData={debouncedHandleKeyWordChange} />
      <Grid templateColumns="repeat(1, 1fr)" gap={6}>
        {loading && <LoadingSkeleton loadingArray={5} />}
        {!loading && edges?.length > 0 && (
          <>
            {edges?.map((item: IContent) => (
              <ContentCard key={item.id} content={item} />
            ))}
          </>
        )}
        {!loading && edges?.length === 0 && (
          <TextBlock fontSize="12px" fontWeight="700" color="white" ml="4px">
            Sorry, there is no data to show
          </TextBlock>
        )}
        {loading && error && (
          <TextBlock fontSize="12px" fontWeight="700" color="white" ml="4px">
            Sorry, there is an error occured
          </TextBlock>
        )}
      </Grid>
    </Container>
  );
};

export default ContentWrapper;
