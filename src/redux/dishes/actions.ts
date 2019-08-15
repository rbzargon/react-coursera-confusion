import { Action } from 'redux';
import { ACTION_TYPE } from '../actionType';
import { Dish } from '../../shared/dishes';

export interface DishesFailedAction extends Action {
    type: ACTION_TYPE.DISHES_FAILED;
    payload: {
        errorMessage: string;
    };
}

export interface DishesLoadingAction extends Action {
    type: ACTION_TYPE.DISHES_LOADING;
}

export interface AddDishesAction extends Action {
    type: ACTION_TYPE.ADD_DISHES;
    payload: {
        dishes: Dish[];
    };
}

export type DishesActionTypes = AddDishesAction | DishesFailedAction | DishesLoadingAction;
