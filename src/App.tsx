import React, { Suspense } from 'react';
import { BrowserRouter as Routes } from 'react-router-dom';
import RouteContainer from './routes/route.container';
import GlobalStyle from './styles/globalStyle';

const App: React.FC = () => {
  return (
    <Routes>
      <Suspense fallback={<div>Loading...</div>}>
        <GlobalStyle />
        <RouteContainer />
      </Suspense>
    </Routes>
  );
};

export default App;
