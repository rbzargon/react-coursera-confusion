import { Dish } from '../../shared/dishes';

export interface DishesState {
    dishes: Dish[];
    errorMessage: string;
    isLoading: boolean;
}
