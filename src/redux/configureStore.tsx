import { createForms } from 'react-redux-form';
import { AnyAction, applyMiddleware, combineReducers, createStore, Store } from 'redux';
import logger from 'redux-logger';
import thunk, { ThunkDispatch, ThunkMiddleware } from 'redux-thunk';
import { Comment } from '../shared/comments';
import { Leader } from '../shared/leaders';
import { Promotion } from '../shared/promotions';
import { Comments } from './comments';
import { dishesReducer, DishesState } from './dishes';
import { INITIAL_FEEDBACK } from './forms';
import { Leaders } from './leaders';
import { Promotions } from './promotions';

export interface RootState {
    comments: Comment[];
    dishesState: DishesState;
    promotions: Promotion[];
    leaders: Leader[];
    forms: any;
    feedback: any;
}

export const configureStore = () => {
    const store = createStore(
        combineReducers({
            comments: Comments,
            dishesState: dishesReducer,
            promotions: Promotions,
            leaders: Leaders,
            ...createForms({ feedback: INITIAL_FEEDBACK }),
        }),
        applyMiddleware(thunk as ThunkMiddleware<RootState, AnyAction>, logger),
    );
    store.dispatch = store.dispatch as ThunkDispatch<Store, void, AnyAction>;
    return store;
};
