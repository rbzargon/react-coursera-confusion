import { LEADERS } from '../shared/leaders';

interface Action {
    type: string;
}

export const leadersReducer = (state = LEADERS, action: Action) => {
    switch (action.type) {
        default:
            return state;
    }
};
