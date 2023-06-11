import React, { FC } from 'react';
import { Bookmark, Share2 } from 'react-feather';
import { Box, Heading, Text as TextBlock, Icon } from '@chakra-ui/react';

import { IContent } from '../../../types/content.types';

export interface IContentBottom {
  content: IContent;
}

const ContentBottom: FC<IContentBottom> = ({ content }) => {
  const { experts, categories, name } = content;
  const { firstName, lastName, company } = experts[0];
  const { name: categoryName } = categories[0];

  return (
    <Box
      backgroundColor="white"
      borderBottomRightRadius="8px"
      borderBottomLeftRadius="8px"
      padding="8px"
    >
      <Heading as="h5" size="xs" color="gray.700">
        {categoryName}
      </Heading>
      <Heading as="h1" size="md" color="black" mb="8px" textTransform="capitalize">
        {name}
      </Heading>
      <TextBlock fontSize="12px" color="gray.800" fontWeight={500} lineHeight="12px">
        {firstName} {lastName}
      </TextBlock>
      <TextBlock fontSize="12px" fontWeight="700">
        {company}
      </TextBlock>
      <Box display="flex" justifyContent="flex-end">
        <Icon as={Share2} mr="10px" fontSize="20px" color="orange.600" />
        <Icon as={Bookmark} fontSize="20px" color="orange.600" />
      </Box>
    </Box>
  );
};

export default ContentBottom;
