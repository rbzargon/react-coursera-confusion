import { Dish } from '../../shared/dishes';
import { ACTION_TYPE } from '../actionType';
import { AppState } from '../appState';
import { AddDishesAction, DishesActionTypes, DishesFailedAction } from './actions';

const initialDishesState: AppState<Dish[]> = { data: [], errorMessage: '', isLoading: true };

export const dishesReducer = (
    state: AppState<Dish[]> = initialDishesState,
    action: DishesActionTypes,
): AppState<Dish[]> => {
    switch (action.type) {
        case ACTION_TYPE.ADD_DISHES: {
            const { payload: dishes } = action as AddDishesAction;
            const nextDishes = !!dishes ? [...state.data, ...dishes] : state.data;
            return {
                ...state,
                data: nextDishes,
                errorMessage: '',
                isLoading: false,
            };
        }
        case ACTION_TYPE.FAILED_DISHES: {
            const { payload: errorMessage } = action as DishesFailedAction;
            const nextErrorMessage = errorMessage || '';
            return {
                ...state,
                errorMessage: nextErrorMessage,
                isLoading: false,
            };
        }
        case ACTION_TYPE.LOADING_DISHES:
            //no payload in this action type
            return {
                ...state,
                errorMessage: '',
                isLoading: true,
            };
        default:
            return state;
    }
};
