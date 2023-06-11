import React, { FC, useCallback } from 'react';
import { Search as SearchIcon } from 'react-feather';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';

export interface ISearchData {
  onSearchData: (e: string) => void;
}

const Search: FC<ISearchData> = ({ onSearchData }) => {
  const handleSearchData = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchData(e.target.value);
  }, []);

  return (
    <InputGroup marginBottom="24px">
      <InputLeftElement pointerEvents="none">
        <SearchIcon color="white" />
      </InputLeftElement>
      <Input
        placeholder=""
        borderColor="gray.700"
        backgroundColor="gray.900"
        color="white"
        focusBorderColor="gray.700"
        onChange={handleSearchData}
      />
    </InputGroup>
  );
};

export default Search;
