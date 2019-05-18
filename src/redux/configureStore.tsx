import { combineReducers, createStore } from 'redux';
import { Comments } from "./comments";
import { Dishes } from "./dishes";
import { Leaders } from './leaders';
import { Promotions } from "./promotions";

export const configureStore = () => {
    const store = createStore(
        combineReducers({
            comments: Comments,
            dishes: Dishes,
            promotions: Promotions,
            leaders: Leaders,
        })
    );
    return store;
};