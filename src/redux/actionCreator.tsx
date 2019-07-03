import { ACTION_TYPE } from './actionType';
import { DISHES, Dish } from '../shared/dishes';
import { Dispatch } from 'redux';

export interface CommentEntry {
    dishId: number,
    rating: number,
    author: string,
    comment: string
}

export const addComment = (entry: CommentEntry) => ({
    type: ACTION_TYPE.ADD_COMMENT,
    payload: entry
});

export const fetchDishes = () => (dispatch: Dispatch) => {
    dispatch(dishesLoading(true));

    setTimeout(() => {
        dispatch(addDishes(DISHES));
    }, 2000);
};

export const dishesLoading = (isLoading: boolean) => ({
    type: ACTION_TYPE.DISHES_LOADING,
    payload: { isLoading }
});

export const dishesFailed = (errorMessage: string) => ({
    type: ACTION_TYPE.DISHES_FAILED,
    payload: { errorMessage }
});

export const addDishes = (dishes: Dish[]) => ({
    type: ACTION_TYPE.ADD_DISHES,
    payload: { dishes }
});