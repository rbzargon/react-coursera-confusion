import { ACTION_TYPE } from './actionType';
import { DISHES, Dish } from '../shared/dishes';
import { Dispatch } from 'redux';
import { DishesActionTypes } from './dishes';

export interface CommentEntry {
    dishId: number;
    rating: number;
    author: string;
    comment: string;
}

export const addComment = (commentEntry: CommentEntry): DishesActionTypes => ({
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

export const fetchDishes = (): Function => (dispatch: Dispatch): void => {
    dispatch(dishesLoading());

    setTimeout((): void => {
        dispatch(addDishes(DISHES));
    }, 2000);
};
