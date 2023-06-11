import React, { FC, useMemo } from 'react';
import { Skeleton, SkeletonText, Box } from '@chakra-ui/react';

export interface ILoadingSkeleton {
  loadingArray: number;
}

const LoadingSkeleton: FC<ILoadingSkeleton> = ({ loadingArray }) => {
  const loadingArrayByPager = useMemo(() => new Array(loadingArray).fill(''), [loadingArray]);

  return (
    <>
      {loadingArrayByPager.map((_, key) => (
        <Box padding="6" boxShadow="lg" bg="white" key={key} borderRadius="8px">
          <Skeleton height="120px" />
          <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
        </Box>
      ))}
    </>
  );
};

export default LoadingSkeleton;
