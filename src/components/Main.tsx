import React from 'react';
import { connect } from "react-redux";
import { Redirect, Route, RouteComponentProps, Switch, withRouter } from 'react-router-dom';
import { Dispatch } from 'redux';
import { AddCommentProvider } from '../context/addComment';
import { addComment, CommentEntry } from '../redux/actionCreator';
import { RootState } from '../redux/configureStore';
import About from './About';
import Contact from './Contact';
import DishDetail from './DishDetail';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import Menu from './Menu';

const mapStateToProps = (state: RootState) => {
    return state;
}

interface DispatchFromProps {
    addComment: (entry: CommentEntry) => void,
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    addComment: (entry: CommentEntry) => dispatch(addComment(entry))
});

interface IDishWithIdProps {
    match: {
        params: {
            dishId: string
        }
    }
}


export const Main: React.SFC<RootState & DispatchFromProps & RouteComponentProps> = (props) => {
    console.log(props.comments);
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
            <AddCommentProvider value={props.addComment}>
                <DishDetail dish={props.dishes.find(d => d.id === parseInt(dishId))}
                    comments={props.comments.filter(c => c.dishId === parseInt(dishId))} />
            </AddCommentProvider>
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

export default withRouter(connect<RootState, DispatchFromProps, {}, RootState>(mapStateToProps, mapDispatchToProps)(Main));
