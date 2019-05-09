import React from 'react';
import Main from './components/Main';
import './App.css';
import {BrowserRouter} from 'react-router-dom';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
}

export default App;
