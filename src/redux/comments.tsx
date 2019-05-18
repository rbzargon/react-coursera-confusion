import { COMMENTS } from '../shared/comments';

interface Action {
    type: string
}

export const Comments = (state = COMMENTS, action: Action) => {
    switch (action.type) {
        default:
            return state
    }
};