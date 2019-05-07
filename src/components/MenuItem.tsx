import React from 'react';
import {
    Card,
    CardImg,
    CardImgOverlay,
    CardTitle
} from 'reactstrap';

import { IDish } from '../shared/dishes';

interface IMenuItemProps {
    key: number,
    dish: IDish,
    selectDish: (dishId: number) => () => void
}

export const MenuItem: React.FC<IMenuItemProps> = ({ key, dish, selectDish }) => {
    return (
        <div key={key} className="col-12 col-md-5 m-1">
            <Card onClick={selectDish(dish.id)}>
                <CardImg width="100%" object src={dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Card>
        </div>
    );
}

export default MenuItem;