import React from 'react';
import { Route, Routes, Router } from 'react-router-dom';
import './index.scss';
import Index from '../containers/Index';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={ <Index /> } />
    </Routes>
  );
}

export default App;
