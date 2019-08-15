import { DishesState } from './state';
import { DishesActionTypes, AddDishesAction, DishesFailedAction } from './actions';
import { ACTION_TYPE } from '../actionType';

const initialDishesState: DishesState = { dishes: [], errorMessage: '', isLoading: true };

export const dishesReducer = (state: DishesState = initialDishesState, action: DishesActionTypes): DishesState => {
    switch (action.type) {
        case ACTION_TYPE.ADD_DISHES: {
            const {
                payload: { dishes },
            } = action as AddDishesAction;
            const nextDishes = !!dishes ? [...state.dishes, ...dishes] : state.dishes;
            return {
                ...state,
                dishes: nextDishes,
                errorMessage: '',
                isLoading: false,
            };
        }
        case ACTION_TYPE.DISHES_FAILED: {
            const {
                payload: { errorMessage = '' },
            } = action as DishesFailedAction;
            const nextErrorMessage = errorMessage || '';
            return {
                ...state,
                errorMessage: nextErrorMessage,
                isLoading: false,
            };
        }
        case ACTION_TYPE.DISHES_LOADING:
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
