import { ACTION_TYPE } from './actionType';

export interface CommentEntry {
    dishId: number,
    rating: number,
    author: string,
    comment: string
}

export const addComment = (entry: CommentEntry) => ({
    type: ACTION_TYPE.ADD_COMMENT,
    payload: entry
});