import React from 'react';

import { routes } from './router/routes';
import { useRoutes } from 'react-router-dom';

import './App.css';

const App = () => {
  const element = useRoutes(routes);
  return <div className='App w-screen h-screen'>{element}</div>;
};

export default App;
