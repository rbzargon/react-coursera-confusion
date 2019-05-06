import React, { useMemo } from 'react';
import {
    Card,
    CardImg,
    CardImgOverlay,
    CardTitle
} from 'reactstrap';

import { IDish } from '../shared/dishes';

interface IMenuProps {
    dishes: Array<IDish>,
    selectDish: (dishId: number) => () => void
}

const Menu: React.FC<IMenuProps> = (props) => {
    const { dishes, selectDish } = props;

    const menu = useMemo(() => dishes.map((dish: IDish) => {
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
    }), [dishes, selectDish]);

    return (
        <div className="container">
            <div className="row">
                {menu}
            </div>
        </div>
    );
};

export default Menu;