import React, { FC } from 'react';
import { Container } from '@chakra-ui/react';

import RouteConfig from '../../route-config/route-config';

const MainWrapper: FC = () => {
  return (
    <Container maxW="100%" minH="100vh" bg="black" pt="26px" pb="60px">
      <RouteConfig />
    </Container>
  );
};

export default MainWrapper;
