import { Dish } from "../shared/dishes";
import { ACTION_TYPE } from "./actionType";

interface DishesState {
    dishes: Dish[]
    errorMessage: string,
    isLoading: boolean,
}

interface OptionalDishesState {
    dishes?: Dish[]
    errorMessage?: string,
    isLoading?: boolean,
}

interface DishesAction {
    type: string,
    payload: OptionalDishesState
}

export const Dishes = (state: DishesState, action: DishesAction): DishesState => {
    const { payload = {
        dishes: [],
        errorMessage: '',
        isLoading: true
    } } = action;

    switch (action.type) {
        case ACTION_TYPE.ADD_DISHES:
            const nextDishes = !!payload.dishes ? [...state.dishes, ...payload.dishes] : state.dishes;
            return {
                ...state,
                dishes: nextDishes,
                errorMessage: '',
                isLoading: true,
            };
        case ACTION_TYPE.DISHES_FAILED:
            const nextErrorMessage = payload.errorMessage || '';
            return {
                ...state,
                errorMessage: nextErrorMessage,
                isLoading: false,
            };
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