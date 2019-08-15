import { Action, Reducer } from 'redux';
import { Comment } from '../shared/comments';
import { CommentEntry } from './actionCreator';
import { ACTION_TYPE } from './actionType';

export interface CommentState {
    comments: Comment[];
    errorMessage: string;
    isLoading: boolean;
}

export interface AddCommentAction extends Action {
    type: ACTION_TYPE.ADD_COMMENT;
    payload: {
        commentEntry: CommentEntry;
    };
}

export interface AddCommentsAction extends Action {
    type: ACTION_TYPE.ADD_COMMENTS;
    payload: {
        comments: Comment[];
    };
}

export interface CommentsLoadingAction extends Action {
    type: ACTION_TYPE.COMMENTS_LOADING;
}

export interface CommentsFailedAction extends Action {
    type: ACTION_TYPE.COMMENTS_FAILED;
    payload: {
        errorMessage: string;
    };
}

export type CommentActionTypes = AddCommentAction | AddCommentsAction | CommentsLoadingAction | CommentsFailedAction;

export const commentsReducer: Reducer<CommentState | undefined, CommentActionTypes> = (state, action) => {
    switch (action.type) {
        case ACTION_TYPE.ADD_COMMENT: {
            const {
                payload: { commentEntry },
            } = action as AddCommentAction;
            const newComment = {
                ...commentEntry,
                id: !state || !state.comments ? 0 : state.comments.length,
                date: new Date(Date.now()).toLocaleString(navigator.language, {
                    year: 'numeric',
                    month: 'short',
                    day: '2-digit',
                }),
            };
            return {
                ...state,
                comments: !state || !state.comments ? [newComment] : state.comments.concat(newComment),
                isLoading: false,
                errorMessage: '',
            };
        }
        case ACTION_TYPE.ADD_COMMENTS: {
            const {
                payload: { comments },
            } = action as AddCommentsAction;
            return { ...state, comments, isLoading: false, errorMessage: '' };
        }
        case ACTION_TYPE.COMMENTS_LOADING: {
            return {
                ...state,
                comments: !state || !state.comments ? [] : state.comments,
                isLoading: true,
                errorMessage: '',
            };
        }
        case ACTION_TYPE.COMMENTS_FAILED: {
            const {
                payload: { errorMessage },
            } = action as CommentsFailedAction;
            return {
                ...state,
                comments: !state || !state.comments ? [] : state.comments,
                errorMessage,
                isLoading: false,
            };
        }
        default:
            return {
                comments: [],
                errorMessage: '',
                isLoading: false,
            };
    }
};
