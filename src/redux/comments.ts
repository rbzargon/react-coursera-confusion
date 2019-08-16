import { Reducer } from 'redux';
import { Comment } from '../shared/comments';
import { CommentEntry } from '../shared/commentEntry';
import { ACTION_TYPE } from './actionType';
import { AppAction } from './appAction';
import { AppState } from './appState';

export interface AddCommentAction extends AppAction<CommentEntry> {
    type: typeof ACTION_TYPE.ADD_COMMENT;
    payload: CommentEntry;
}

export interface AddCommentsAction extends AppAction<Comment[]> {
    type: typeof ACTION_TYPE.ADD_COMMENTS;
    payload: Comment[];
}

export interface CommentsLoadingAction extends AppAction {
    type: typeof ACTION_TYPE.COMMENTS_LOADING;
}

export interface CommentsFailedAction extends AppAction<string> {
    type: typeof ACTION_TYPE.COMMENTS_FAILED;
    payload: string;
}

export type CommentActionTypes = AppAction<Comment[]> | AppAction<CommentEntry> | AppAction<string> | AppAction;

export const commentsReducer: Reducer<AppState<Comment[]>, CommentActionTypes> = (state, action) => {
    switch (action.type) {
        case ACTION_TYPE.ADD_COMMENT: {
            const { payload: commentEntry } = action as AddCommentAction;
            const newComment = {
                ...commentEntry,
                id: !state || !state.data ? 0 : state.data.length,
                date: new Date(Date.now()).toLocaleString(navigator.language, {
                    year: 'numeric',
                    month: 'short',
                    day: '2-digit',
                }),
            };
            return {
                ...state,
                data: !state || !state.data ? [newComment] : state.data.concat(newComment),
                isLoading: false,
                errorMessage: '',
            };
        }
        case ACTION_TYPE.ADD_COMMENTS: {
            const { payload: data } = action as AddCommentsAction;
            return { ...state, data, isLoading: false, errorMessage: '' };
        }
        case ACTION_TYPE.COMMENTS_LOADING: {
            return {
                ...state,
                data: !state || !state.data ? [] : state.data,
                isLoading: true,
                errorMessage: '',
            };
        }
        case ACTION_TYPE.COMMENTS_FAILED: {
            const { payload: errorMessage } = action as CommentsFailedAction;
            return {
                ...state,
                data: !state || !state.data ? [] : state.data,
                errorMessage,
                isLoading: false,
            };
        }
        default:
            return {
                data: [],
                errorMessage: '',
                isLoading: false,
            };
    }
};
