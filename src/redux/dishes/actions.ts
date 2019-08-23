import { Dish } from '../../shared/dishes';
import { ACTION_TYPE } from '../actionType';
import { AppAction } from '../appAction';

export interface DishesFailedAction extends AppAction<string> {
    type: ACTION_TYPE.FAILED_DISHES;
    payload: string;
}

export interface DishesLoadingAction extends AppAction {
    type: ACTION_TYPE.LOADING_DISHES;
}

export interface AddDishesAction extends AppAction<Dish[]> {
    type: ACTION_TYPE.ADD_DISHES;
    payload: Dish[];
}

export type DishesActionTypes = AddDishesAction | DishesFailedAction | DishesLoadingAction;
