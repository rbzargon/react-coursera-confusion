import { Dispatch } from 'redux';
import { Dish, DISHES } from '../shared/dishes';
import { ACTION_TYPE } from './actionType';
import { DishesActionTypes } from './dishes/actions';
import { CommentActionTypes } from './comments';

export interface CommentEntry {
    dishId: number;
    rating: number;
    author: string;
    comment: string;
}

export const addComment = (commentEntry: CommentEntry): CommentActionTypes => ({
    type: ACTION_TYPE.ADD_COMMENT,
    payload: { commentEntry },
});

export const addDishes = (dishes: Dish[]): DishesActionTypes => ({
    type: ACTION_TYPE.ADD_DISHES,
    payload: { dishes },
});

export const dishesFailed = (errorMessage: string): DishesActionTypes => ({
    type: ACTION_TYPE.DISHES_FAILED,
    payload: { errorMessage },
});

export const dishesLoading = (): DishesActionTypes => ({
    type: ACTION_TYPE.DISHES_LOADING,
});

export const fetchDishes = () => (dispatch: Dispatch) => {
    dispatch(dishesLoading());

    setTimeout((): void => {
        dispatch(addDishes(DISHES));
    }, 2000);
};
