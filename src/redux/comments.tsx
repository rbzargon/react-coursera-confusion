import { COMMENTS, Comment } from '../shared/comments';
import { ACTION_TYPE } from './actionType';
import { CommentEntry } from './actionCreator';
import { Action } from 'redux';

export interface AddCommentAction extends Action {
    type: typeof ACTION_TYPE.ADD_COMMENT;
    payload: {
        commentEntry: CommentEntry;
    };
}

export type CommentActionTypes = AddCommentAction;

export const commentsReducer = (state: Comment[] = COMMENTS, action: CommentActionTypes): Comment[] => {
    switch (action.type) {
        case ACTION_TYPE.ADD_COMMENT: {
            const {
                payload: { commentEntry },
            } = action as AddCommentAction;
            const newComment = {
                ...commentEntry,
                id: state.length,
                date: new Date(Date.now()).toLocaleString(navigator.language, {
                    year: 'numeric',
                    month: 'short',
                    day: '2-digit',
                }),
            };
            return state.concat(newComment);
        }
        default:
            return state;
    }
};
