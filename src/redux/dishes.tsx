import { Action } from 'redux';
import { Dish } from '../shared/dishes';
import { CommentEntry } from './actionCreator';
import { ACTION_TYPE } from './actionType';

export interface DishesState {
    dishes: Dish[];
    errorMessage: string;
    isLoading: boolean;
}

const initialDishesState: DishesState = { dishes: [], errorMessage: '', isLoading: true };

export interface DishesFailedAction extends Action {
    type: typeof ACTION_TYPE.DISHES_FAILED;
    payload: {
        errorMessage: string;
    };
}

export interface DishesLoadingAction extends Action {
    type: typeof ACTION_TYPE.DISHES_LOADING;
}

export interface AddDishesAction extends Action {
    type: typeof ACTION_TYPE.ADD_DISHES;
    payload: {
        dishes: Dish[];
    };
}

export interface AddCommentAction extends Action {
    type: typeof ACTION_TYPE.ADD_COMMENT;
    payload: {
        commentEntry: CommentEntry;
    };
}

export type DishesActionTypes = AddDishesAction | AddCommentAction | DishesFailedAction | DishesLoadingAction;

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
                isLoading: true,
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
            return {
                ...state,
                errorMessage: '',
                isLoading: true,
            };
        default:
            return state;
    }
};
