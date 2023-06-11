import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import MainWrapper from './containers/main/main';

function App() {
  return (
    <Router>
      <MainWrapper />
    </Router>
  );
}

export default App;
