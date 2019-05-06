import React from 'react';
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
    selectDish(dishId: number): any
}

const Menu: React.FC<IMenuProps> = (props) => {
    const { dishes, selectDish } = props;

    const menu = dishes.map((dish) => {
        return (
            <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card onClick={selectDish(dish.id)}>
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
        </div>
    );
};

export default Menu;