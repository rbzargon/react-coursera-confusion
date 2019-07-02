import { combineReducers, createStore } from 'redux';
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
    const store: RootState = createStore(
        combineReducers({
            comments: Comments,
            dishes: Dishes,
            promotions: Promotions,
            leaders: Leaders,
        })
    );
    return store;
};