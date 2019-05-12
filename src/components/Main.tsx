import React from 'react';
import { connect } from "react-redux";
import { Redirect, Route, RouteComponentProps, Switch, withRouter } from 'react-router-dom';
import { RootState } from '../redux/reducer';
import { IComment } from '../shared/comments';
import { IDish } from '../shared/dishes';
import { ILeader } from '../shared/leaders';
import { IPromotion } from '../shared/promotions';
import About from './About';
import Contact from './Contact';
import DishDetail from './DishDetail';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import Menu from './Menu';



type StateProps = {
    dishes: IDish[],
    comments: IComment[],
    promotions: IPromotion[],
    leaders: ILeader[]
}

const mapStateToProps = (state: RootState) => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders,
    }
}

interface IDishWithIdProps {
    match: {
        params: {
            dishId: string
        }
    }
}


export const Main: React.SFC<StateProps & RouteComponentProps> = (props) => {

    const HomePage: React.SFC<void> = () => {
        return (
            <Home dish={props.dishes.find(d => d.featured)}
                promotion={props.promotions.find(p => p.featured)}
                leader={props.leaders.find(l => l.featured)} />
        );
    };

    const MenuPage = React.memo(() => <Menu dishes={props.dishes} />);

    const DishWithId: React.SFC<IDishWithIdProps> = ({ match: { params: { dishId } } }) => {
        return (
            <DishDetail dish={props.dishes.find(d => d.id === parseInt(dishId))}
                comments={props.comments.filter(c => c.dishId === parseInt(dishId))} />
        );
    };

    const AboutUs: React.SFC<void> = () => {
        return (
            <About leaders={props.leaders} />
        );
    };

    return (
        <div>
            <Header />
            <Switch>
                <Route path='/home' component={HomePage} />
                <Route exact path='/menu' component={MenuPage} />
                <Route path='/menu/:dishId' component={DishWithId} />
                <Route exact path='/contactus' component={Contact} />
                <Route exact path='/aboutus' component={AboutUs} />
                <Redirect to='/home' />
            </Switch>
            <Footer />
        </div>
    );
}

export default withRouter(connect(mapStateToProps)(Main));
