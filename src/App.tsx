import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './App.css';

const App: React.FC = () => {
  return (
<div className="App">
      <Navbar>
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
    </div>
  );
}

export default App;
