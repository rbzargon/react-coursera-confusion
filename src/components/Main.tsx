import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import Menu from './Menu';
import DishDetail from './DishDetail';
import { DISHES } from '../shared/dishes';

const HomePage = () => {
    return (
        <Home />
    );
}

export const Main: React.FC = () => {

    const [dishes] = useState(DISHES);
    return (
        <div>
            <Header />
            <Switch>
                <Route path='/home' component={Home} />
                <Route exact path='/menu' component={() => <Menu dishes={dishes} />} />
                <Redirect to='/home' />
            </Switch>
            <Footer />
        </div>
    );
}

export default Main;
