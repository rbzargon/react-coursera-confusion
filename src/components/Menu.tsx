import React, { useState } from 'react';
import {
    Card,
    CardImg,
    CardImgOverlay,
    CardTitle
} from 'reactstrap';

import { IDish } from '../shared/dishes';

import { DishDetail } from './DishDetail';

interface IMenuProps {
    dishes: Array<IDish>,
}

const Menu: React.FC<IMenuProps> = (props) => {

    const [selectedDish, setSelectedDish] = useState();

    const selectDish = (dish: IDish) => {
        setSelectedDish(dish);
    }

    const menu = props.dishes.map((dish) => {
        return (
            <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card onClick={() => selectDish(dish)}>
                    <CardImg width="100%" object src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Card>
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                {menu}
            </div>
            <DishDetail dish={selectedDish} />
        </div>
    );
};

export default Menu;