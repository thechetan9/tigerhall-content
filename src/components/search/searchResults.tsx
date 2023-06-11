import React, { FC, useCallback } from "react";
import { Search as SearchIcon } from "react-feather";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

export interface ContentSearch {
  onSearchData: (e: string) => void;
}

const SearchResults: FC<ContentSearch> = ({ onSearchData }) => {
  const handleSearchData = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onSearchData(e.target.value);
    },
    []
  );

  return (
    <InputGroup marginBottom="24px">
      <InputLeftElement pointerEvents="none">
        <SearchIcon color="white" />
      </InputLeftElement>
      <Input
        placeholder="Search..."
        borderColor="gray.700"
        backgroundColor="gray.900"
        color="white"
        focusBorderColor="white.700"
        onChange={handleSearchData}
      />
    </InputGroup>
  );
};

export default SearchResults;
