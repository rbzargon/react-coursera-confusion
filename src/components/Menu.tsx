import React, { useMemo, FC } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Dish } from '../shared/dishes';
import MenuItem from './MenuItem';
import LoadingProgress from './LoadingProgress';
import classNames from 'classnames';

interface MenuProps {
    dishes: Dish[];
    isLoading: boolean;
    errorMessage: string;
}

const Menu: FC<MenuProps> = ({ dishes, isLoading, errorMessage }) => {
    const menu = useMemo(() => dishes.map((dish: Dish) => <MenuItem key={dish.id} dish={dish} />), [dishes]);

    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to="/home">Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>Menu</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Menu</h3>
                    <hr />
                </div>
            </div>
            <div className={classNames('row justify-content-around', { 'text-center': isLoading })}>
                {isLoading ? <LoadingProgress /> : errorMessage ? <h4>{errorMessage}</h4> : menu}
            </div>
        </div>
    );
};

export default Menu;
