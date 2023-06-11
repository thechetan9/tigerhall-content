import React from 'react';
import { Routes, Route } from 'react-router-dom';

import ContentWrapper from '../containers/content/content';

const RouteConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<ContentWrapper />} />
    </Routes>
  );
};

export default RouteConfig;
