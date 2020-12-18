import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './pages/Login';
import Category from './pages/Category';
import Products from './pages/Products';

function App() {
  return (
    <BrowserRouter>
      <Route exact path={'/'} component={Products} />
      <Route exact path={'/:csvId'} component={Category} />
    </BrowserRouter>
  );
}

export default App;
