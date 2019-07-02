import React, { useMemo } from 'react';
import {
    Breadcrumb,
    BreadcrumbItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Dish } from '../shared/dishes';
import MenuItem from './MenuItem';

interface IMenuProps {
    dishes: Array<Dish>,
    // selectDish: (dishId: number) => () => void
}

const Menu: React.FC<IMenuProps> = ({ dishes }) => {
    const menu = useMemo(() => dishes.map((dish: Dish) =>
        <MenuItem key={dish.id} dish={dish} />), [dishes]);

    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to='/home'>Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>
                        Menu
                    </BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Menu</h3>
                    <hr/>
                </div>
            </div>
            <div className="row">
                {menu}
            </div>
        </div>
    );
};

export default Menu;