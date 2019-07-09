import { PROMOTIONS } from '../shared/promotions';

interface Action {
    type: string;
}

export const promotionsReducer = (state = PROMOTIONS, action: Action) => {
    switch (action.type) {
        default:
            return state;
    }
};
