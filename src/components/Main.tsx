import React, { FunctionComponent, FunctionComponentElement, useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, RouteComponentProps, Switch, withRouter } from 'react-router-dom';
import { Dispatch } from 'redux';
import { AddCommentProvider } from '../context/addComment';
import { addComment, CommentEntry, fetchDishes } from '../redux/actionCreator';
import { RootState } from '../redux/configureStore';
import { actions } from 'react-redux-form';
import About from './About';
import Contact from './Contact';
import DishDetail from './DishDetail';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import Menu from './Menu';

const mapStateToProps = (state: RootState) => {
    return state;
};

interface DispatchFromProps {
    addComment: (entry: CommentEntry) => void;
    fetchDishes: () => void;
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    addComment: (entry: CommentEntry) => dispatch(addComment(entry)),
    fetchDishes: () => fetchDishes()(dispatch),
});

interface DishWithIdProps {
    match: {
        params: {
            dishId: string;
        };
    };
}

export const Main: FunctionComponent<RootState & DispatchFromProps & RouteComponentProps> = props => {
    const {
        addComment,
        comments,
        dishesState,
        fetchDishes,
        leaders,
        promotions,
    } = props;

    console.log('main props', props);
    useEffect(() => {
        fetchDishes();
    }, [fetchDishes]);

    const HomePage = (): FunctionComponentElement<void> => {
        return (
            <Home
                dish={dishesState.dishes.find(d => d.featured)}
                dishesLoading={dishesState.isLoading}
                dishesErrorMessage={dishesState.errorMessage}
                promotion={promotions.find(p => p.featured)}
                leader={leaders.find(l => l.featured)}
            />
        );
    };

    const MenuPage = () => <Menu {...dishesState} />;
    MenuPage.displayName = 'MenuPage';

    const DishWithId: FunctionComponent<DishWithIdProps> = ({
        match: {
            params: { dishId },
        },
    }) => {
        return (
            <AddCommentProvider value={addComment}>
                <DishDetail
                    dish={dishesState.dishes.find(d => d.id === parseInt(dishId))}
                    isLoading={dishesState.isLoading}
                    errorMessage={dishesState.errorMessage}
                    comments={comments.filter(c => c.dishId === parseInt(dishId))}
                />
            </AddCommentProvider>
        );
    };

    const AboutUs: FunctionComponent<void> = () => {
        return <About leaders={leaders} />;
    };

    return (
        <div>
            <Header />
            <Switch>
                <Route path="/home" component={HomePage} />
                <Route exact path="/menu" component={MenuPage} />
                <Route path="/menu/:dishId" component={DishWithId} />
                <Route
                    exact
                    path="/contactus"
                    component={() => (<Contact />)}
                />
                <Route exact path="/aboutus" component={AboutUs} />
                <Redirect to="/home" />
            </Switch>
            <Footer />
        </div>
    );
};

export default withRouter(
    connect<RootState, DispatchFromProps, {}, RootState>(
        mapStateToProps,
        mapDispatchToProps,
    )(Main),
);
