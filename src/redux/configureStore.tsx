import { AnyAction, applyMiddleware, combineReducers, createStore, Store } from 'redux';
import logger from 'redux-logger';
import thunk, { ThunkDispatch, ThunkMiddleware } from 'redux-thunk';
import { Comment } from '../shared/comments';
import { Leader } from '../shared/leaders';
import { Promotion } from '../shared/promotions';
import { commentsReducer } from './comments';
import { dishesReducer } from './dishes/reducer';
import { DishesState } from './dishes/state';
import { leadersReducer } from './leaders';
import { promotionsReducer } from './promotions';

export interface RootState {
    comments: Comment[];
    dishesState: DishesState;
    promotions: Promotion[];
    leaders: Leader[];
}

export const configureStore = () => {
    const store = createStore(
        combineReducers({
            comments: commentsReducer,
            dishesState: dishesReducer,
            leaders: leadersReducer,
            promotions: promotionsReducer,
        }),
        applyMiddleware(thunk as ThunkMiddleware<RootState, AnyAction>, logger),
    );
    store.dispatch = store.dispatch as ThunkDispatch<Store, void, AnyAction>;
    return store;
};
