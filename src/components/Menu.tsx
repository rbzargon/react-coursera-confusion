import React, { useMemo } from 'react';

import { IDish } from '../shared/dishes';
import MenuItem from './MenuItem';

interface IMenuProps {
    dishes: Array<IDish>,
   // selectDish: (dishId: number) => () => void
}

const Menu: React.FC<IMenuProps> = ({ dishes }) => {
    const menu = useMemo(() => dishes.map((dish: IDish) =>
        <MenuItem key={dish.id} dish={dish}  />), [dishes]);

    return (
        <div className="container">
            <div className="row">
                {menu}
            </div>
        </div>
    );
};

export default Menu;