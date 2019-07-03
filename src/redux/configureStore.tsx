import { applyMiddleware, combineReducers, createStore, Store, AnyAction } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Comment } from '../shared/comments';
import { Dish } from '../shared/dishes';
import { Leader } from '../shared/leaders';
import { Promotion } from '../shared/promotions';
import { Comments } from "./comments";
import { Dishes } from "./dishes";
import { Leaders } from './leaders';
import { Promotions } from "./promotions";

export interface RootState {
    comments: Comment[],
    dishes: Dish[],
    promotions: Promotion[],
    leaders: Leader[]
}

export const configureStore = () => {
    const store: Store<RootState, AnyAction> = createStore(
        combineReducers({
            comments: Comments,
            dishes: Dishes,
            promotions: Promotions,
            leaders: Leaders,
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
};