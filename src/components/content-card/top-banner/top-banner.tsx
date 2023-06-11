import React, { FC } from 'react';
import { Headphones, Clock } from 'react-feather';
import { Box, Text as TextBlock, Icon } from '@chakra-ui/react';

import exampleGraph from '../../../img/graph.svg';

export interface ITopBanner {
  imageUrl: string;
}

const TopBanner: FC<ITopBanner> = ({ imageUrl }) => {
  const url = new URL(imageUrl);
  const resizeInject = 'resize/250x';
  const { origin, pathname } = url;

  return (
    <Box
      height="120px"
      backgroundImage={`${origin}/${resizeInject}${pathname}`}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      backgroundPosition="center"
      borderTopLeftRadius="8px"
      borderTopRightRadius="8px"
      position="relative"
    >
      <Box
        bg="orange.50"
        width="auto"
        top="0"
        left="0"
        zIndex={9}
        position="absolute"
        padding="8px"
        borderTopLeftRadius="8px"
      >
        <Box display="flex">
          <img src={exampleGraph} />
          <TextBlock fontSize="12px" fontWeight="700" color="gray.900" ml="4px">
            {/* TODO: need to integrate with real data */}
            30% Completed
          </TextBlock>
        </Box>
      </Box>
      <Box
        zIndex={9}
        position="absolute"
        bottom="8px"
        left="8px"
        height="24px"
        width="24px"
        borderRadius="99px"
        bg="orange.600"
        textAlign="center"
      >
        <Icon as={Headphones} fontSize="14px" color="white" />
      </Box>
      <Box
        zIndex={9}
        position="absolute"
        bottom="8px"
        right="8px"
        height="24px"
        borderRadius="50px"
        bg="gray.70"
        textAlign="center"
        padding="0 10px"
      >
        <Box display="flex" alignItems="center" justifyContent="center">
          <Icon as={Clock} fontSize="14px" color="white" />
          <TextBlock size="xs" ml="4px" color="white" fontWeight="700">
            {/* TODO: need to integrate with real data */}
            20 m
          </TextBlock>
        </Box>
      </Box>
      <Box
        width="30%"
        height="2px"
        bg="orange.600"
        position="absolute"
        bottom="-2px"
        left="0"
        zIndex={3}
      />
      <Box
        width="100%"
        height="2px"
        bg="gray.400"
        position="absolute"
        bottom="-2px"
        left="0"
        zIndex={1}
      />
    </Box>
  );
};

export default TopBanner;
