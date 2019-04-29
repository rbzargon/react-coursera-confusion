import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

import Menu from './components/Menu';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './App.css';

const App: React.FC = () => {
  return (
    <div>
      <Navbar>
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu />>
    </div>
  );
}

export default App;
