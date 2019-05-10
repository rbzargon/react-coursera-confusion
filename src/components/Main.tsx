import React, { useState, useMemo } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import Menu from './Menu';
import DishDetail from './DishDetail';
import { COMMENTS } from '../shared/comments';
import { DISHES, IDish } from '../shared/dishes';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';



const MenuPage = React.memo(() => <Menu dishes={DISHES} />);

export const Main: React.FC = () => {

    const [state] = useState({
        dishes: DISHES,
        comments: COMMENTS,
        promotions: PROMOTIONS,
        leaders: LEADERS
    });

    const HomePage = () => {
        return (
            <Home dish={state.dishes.find(d => d.featured)}
                promotion={state.promotions.find(p => p.featured)}
                leader={state.leaders.find(l => l.featured)}/>
        );
    }

    return (
        <div>
            <Header />
            <Switch>
                <Route path='/home' component={HomePage} />
                <Route exact path='/menu' component={MenuPage} />
                <Route exact path='/contactus' component={Contact} />>
                <Redirect to='/home' />
            </Switch>
            <Footer />
        </div>
    );
}

export default Main;
