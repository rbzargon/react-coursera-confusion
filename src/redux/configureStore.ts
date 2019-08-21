import { AnyAction, applyMiddleware, combineReducers, createStore, Store } from 'redux';
import logger from 'redux-logger';
import thunk, { ThunkDispatch, ThunkMiddleware } from 'redux-thunk';
import { Dish } from '../shared/dishes';
import { Leader } from '../shared/leaders';
import { Promotion } from '../shared/promotions';
import { AppState } from './appState';
import { commentsReducer } from './comments';
import { dishesReducer } from './dishes/reducer';
import { leadersReducer } from './leaders';
import { promotionsReducer } from './promotions';
import { Comment } from '../shared/comments';

export interface RootState {
    commentsState: AppState<Comment[]>;
    dishesState: AppState<Dish[]>;
    promotions: Promotion[];
    leaders: Leader[];
}

export const configureStore = () => {
    const store = createStore(
        combineReducers({
            commentsState: commentsReducer,
            dishesState: dishesReducer,
            leaders: leadersReducer,
            promotions: promotionsReducer,
        }),
        applyMiddleware(thunk as ThunkMiddleware<RootState, AnyAction>, logger),
    );
    store.dispatch = store.dispatch as ThunkDispatch<Store, void, AnyAction>;
    return store;
};
