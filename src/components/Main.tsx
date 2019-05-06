import React, { useState } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

import Menu from './Menu';
import DishDetail from './DishDetail';
import { DISHES } from '../shared/dishes';

const Main: React.FC = () => {

    const [dishes] = useState(DISHES);
    const [selectedDish, setSelectedDish] = useState();

    const selectDish = (dishId: number) => () => {
        setSelectedDish(dishes.find(d => d.id === dishId));
    }

    return (
        <div>
            <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                </div>
            </Navbar>
            <Menu dishes={dishes}
                selectDish={selectDish} />
            <DishDetail dish={selectedDish} />>
        </div>
    );
}

export default Main;
