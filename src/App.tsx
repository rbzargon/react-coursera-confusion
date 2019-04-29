import React, { useState } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

import Menu from './components/Menu';
import { DISHES } from './shared/dishes';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './App.css';

const App: React.FC = () => {

  const [dishes, setDishes] = useState(DISHES);

  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={dishes} />>
    </div>
  );
}

export default App;
