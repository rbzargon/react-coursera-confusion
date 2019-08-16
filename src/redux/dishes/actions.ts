import { Dish } from '../../shared/dishes';
import { ACTION_TYPE } from '../actionType';
import { AppAction } from '../appAction';

export interface DishesFailedAction extends AppAction<string> {
    type: ACTION_TYPE.DISHES_FAILED;
    payload: string;
}

export interface DishesLoadingAction extends AppAction {
    type: ACTION_TYPE.DISHES_LOADING;
}

export interface AddDishesAction extends AppAction<Dish[]> {
    type: ACTION_TYPE.ADD_DISHES;
    payload: Dish[];
}

export type DishesActionTypes = AddDishesAction | DishesFailedAction | DishesLoadingAction;
