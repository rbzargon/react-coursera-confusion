import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { COMMENTS } from '../shared/comments';
import { DISHES } from '../shared/dishes';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import Contact from './Contact';
import DishDetail from './DishDetail';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import Menu from './Menu';

interface IDishWithIdProps {
    match: {
        params: {
            dishId: string
        }
    }
}

const MenuPage = React.memo(() => <Menu dishes={DISHES} />);

export const Main: React.FC = () => {

    const [state] = useState({
        dishes: DISHES,
        comments: COMMENTS,
        promotions: PROMOTIONS,
        leaders: LEADERS
    });

    const HomePage: React.SFC = () => {
        return (
            <Home dish={state.dishes.find(d => d.featured)}
                promotion={state.promotions.find(p => p.featured)}
                leader={state.leaders.find(l => l.featured)} />
        );
    };

    const DishWithId: React.SFC<IDishWithIdProps> = ({ match: { params: { dishId } } }) => {
        return (
            <DishDetail dish={state.dishes.find(d => d.id === parseInt(dishId))}
                comments={state.comments.filter(c => c.dishId === parseInt(dishId))} />
        );
    };

    return (
        <div>
            <Header />
            <Switch>
                <Route path='/home' component={HomePage} />
                <Route exact path='/menu' component={MenuPage} />
                <Route path='/menu/:dishId' component={DishWithId} />
                <Route exact path='/contactus' component={Contact} />>
                <Redirect to='/home' />
            </Switch>
            <Footer />
        </div>
    );
}

export default Main;
