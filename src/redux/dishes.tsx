import { DISHES } from '../shared/dishes';

interface Action {
    type: string
}

export const Dishes = (state = DISHES, action: Action) => {
    switch (action.type) {
        default:
            return state
    }
};