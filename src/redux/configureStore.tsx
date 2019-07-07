import { AnyAction, applyMiddleware, combineReducers, createStore, Store } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { Comment } from '../shared/comments';
import { Leader } from '../shared/leaders';
import { Promotion } from '../shared/promotions';
import { Comments } from './comments';
import { dishesReducer, DishesState } from './dishes';
import { Leaders } from './leaders';
import { Promotions } from './promotions';

export interface RootState {
    comments: Comment[];
    dishesState: DishesState;
    promotions: Promotion[];
    leaders: Leader[];
}

export const configureStore = (): Store<RootState, AnyAction> => {
    const store: Store<RootState, AnyAction> = createStore(
        combineReducers({
            comments: Comments,
            dishesState: dishesReducer,
            promotions: Promotions,
            leaders: Leaders,
        }),
        applyMiddleware(thunk, logger),
    );
    return store;
};
