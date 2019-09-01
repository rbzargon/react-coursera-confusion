import React, { FunctionComponent, FunctionComponentElement, useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, RouteComponentProps, Switch, withRouter } from 'react-router-dom';
import { Dispatch } from 'redux';
import { AddCommentProvider } from '../context/addComment';
import { CommentsActions, DishesActions, PromotionsActions, LeadersActions } from '../redux/actionCreator';
import { RootState } from '../redux/configureStore';
import About from './About';
import Contact from './Contact';
import DishDetail from './DishDetail';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import Menu from './Menu';
import { Comment } from '../shared/comments';
import { CommentEntry } from '../shared/commentEntry';
import { AppState } from '../redux/appState';
import { Dish } from '../shared/dishes';
import { Leader } from '../shared/leaders';

const mapStateToProps = (state: RootState) => {
    return state;
};

interface DispatchFromProps {
    addComment: (entry: CommentEntry) => void;
    fetchComments: () => void;
    fetchDishes: () => void;
    fetchLeaders: () => void;
    fetchPromotions: () => void;
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    addComment: (entry: CommentEntry) => CommentsActions.postCommentEntry(entry)(dispatch),
    fetchComments: () => CommentsActions.fetch()(dispatch),
    fetchDishes: () => DishesActions.fetch()(dispatch),
    fetchLeaders: () => LeadersActions.fetch()(dispatch),
    fetchPromotions: () => PromotionsActions.fetch()(dispatch),
});

interface DishMatch {
    params: {
        dishId: string;
    };
}

export const Main: FunctionComponent<RootState & DispatchFromProps & RouteComponentProps> = props => {
    const {
        addComment,
        commentsState,
        dishesState,
        fetchComments,
        fetchDishes,
        fetchLeaders,
        fetchPromotions,
        leadersState,
        promotionsState,
    } = props;

    useEffect(() => {
        fetchComments();
        fetchDishes();
        fetchLeaders();
        fetchPromotions();
    }, [fetchComments, fetchDishes, fetchLeaders, fetchPromotions]);

    const HomePage = (): FunctionComponentElement<void> => {
        return (
            <Home
                dish={dishesState.data.find(d => d.featured)}
                dishesLoading={dishesState.isLoading}
                dishesErrorMessage={dishesState.errorMessage}
                promotion={promotionsState.data.find(p => p.featured)}
                promotionsLoading={promotionsState.isLoading}
                promotionsErrorMessage={promotionsState.errorMessage}
                leader={leadersState.data.find(l => l.featured)}
                leadersLoading={leadersState.isLoading}
                leadersErrorMessage={leadersState.errorMessage}
            />
        );
    };

    function MenuPage(dishesState: AppState<Dish[]>) {
        return <Menu {...dishesState} />;
    }

    function DishWithId({
        match: {
            params: { dishId },
        },
        addComment,
        commentsState,
        dishesState,
    }: {
        match: DishMatch;
        addComment: (entry: CommentEntry) => void;
        commentsState: AppState<Comment[]>;
        dishesState: AppState<Dish[]>;
    }) {
        return (
            <AddCommentProvider value={addComment}>
                <DishDetail
                    dish={dishesState.data.find(d => d.id === parseInt(dishId))}
                    dishLoading={dishesState.isLoading}
                    dishErrorMessage={dishesState.errorMessage}
                    comments={commentsState.data.filter(c => c.dishId === parseInt(dishId))}
                    commentsErrorMessage={commentsState.errorMessage}
                    commentsLoading={commentsState.isLoading}
                />
            </AddCommentProvider>
        );
    }

    function AboutUs(leadersState: AppState<Leader[]>) {
        return <About leaders={leadersState.data} />;
    }

    return (
        <div>
            <Header />
            <Switch>
                <Route path="/home" component={HomePage} />
                <Route exact path="/menu" component={() => MenuPage(dishesState)} />
                <Route
                    path="/menu/:dishId"
                    component={({ match }: { match: DishMatch }) =>
                        DishWithId({ match, addComment, commentsState, dishesState })
                    }
                />
                <Route exact path="/contactus" component={Contact} />
                <Route exact path="/aboutus" component={() => AboutUs(leadersState)} />
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
