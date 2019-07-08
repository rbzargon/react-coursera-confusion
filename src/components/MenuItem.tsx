import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

import { Dish } from '../shared/dishes';

interface MenuItemProps {
    key: number;
    dish: Dish;
}

export const MenuItem: React.FC<MenuItemProps> = ({ key, dish }) => {
    return (
        <div key={key} className="col-12 col-md-5 m-1">
            <Card>
                <Link to={`/menu/${dish.id}`}>
                    <CardImg width="100%" object src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Link>
            </Card>
        </div>
    );
};

export default MenuItem;
