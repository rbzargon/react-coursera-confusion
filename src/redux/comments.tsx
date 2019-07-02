import { COMMENTS } from '../shared/comments';
import { ACTION_TYPE } from './actionType';
import { CommentEntry } from './actionCreator';

interface Action {
    type: string,
    payload: CommentEntry
}

export const Comments = (state = COMMENTS, action: Action) => {
    switch (action.type) {
        case ACTION_TYPE.ADD_COMMENT: {
            const commentEntry = {
                ...action.payload,
                id: state.length,
                date: new Date(Date.now()).toLocaleString(navigator.language, { year: 'numeric', month: 'short', day: '2-digit' })
        };
            return state.concat(commentEntry);
        }
        default:
            return state;
    }
};