import { Dispatch } from 'redux';
import { BASE_URL } from '../shared/baseUrl';
import { CommentEntry } from '../shared/commentEntry';
import { Comment } from '../shared/comments';
import { Dish } from '../shared/dishes';
import { Promotion } from '../shared/promotions';
import { ACTION_TYPE } from './actionType';
import { AppAction } from './appAction';
import { AddCommentAction, CommentActionTypes, CommentsLoadingAction } from './comments';
import { DishesActionTypes } from './dishes/actions';
import { PromotionsActionTypes } from './promotions';

export interface AppActionCreator<T> {
    add: (data: T) => AppAction<T>;
    fetch: () => (dispatch: Dispatch<AppAction>) => Promise<AppAction<T>>;
    failed: (errorMessage: string) => AppAction<string>;
    loading: () => AppAction;
}

export const CommentsActions: AppActionCreator<Comment[]> = class {
    public static add = (data: Comment[]): AppAction<Comment[]> => ({
        type: ACTION_TYPE.ADD_COMMENTS,
        payload: data,
    });

    public static addCommentEntry = (data: CommentEntry): AddCommentAction => ({
        type: ACTION_TYPE.ADD_COMMENT,
        payload: data,
    });

    public static failed = (errorMessage: string): AppAction<string> => ({
        type: ACTION_TYPE.COMMENTS_FAILED,
        payload: errorMessage,
    });

    public static fetch = () => (dispatch: Dispatch): Promise<AppAction<Comment[]>> => {
        dispatch(CommentsActions.loading());
        return fetch(`${BASE_URL}comments`)
            .then(resp => resp.json())
            .then((comments: Comment[]) => dispatch(CommentsActions.add(comments)));
    };

    public static loading = (): CommentsLoadingAction => ({
        type: ACTION_TYPE.COMMENTS_LOADING,
    });
};

export const addComment = (commentEntry: CommentEntry): CommentActionTypes => ({
    type: ACTION_TYPE.ADD_COMMENT,
    payload: commentEntry,
});

export const addComments = (comments: Comment[]): CommentActionTypes => ({
    type: ACTION_TYPE.ADD_COMMENTS,
    payload: comments,
});

export const commentsFailed = (errorMessage: string): CommentActionTypes => ({
    type: ACTION_TYPE.COMMENTS_FAILED,
    payload: errorMessage,
});

export const commentsLoading = (): CommentActionTypes => ({
    type: ACTION_TYPE.COMMENTS_LOADING,
});

export const fetchComments = () => (dispatch: Dispatch) => {
    dispatch(commentsLoading());
    return fetch(`${BASE_URL}comments`)
        .then(resp => resp.json())
        .then((comments: Comment[]) => dispatch(addComments(comments)));
};

export const addDishes = (dishes: Dish[]): DishesActionTypes => ({
    type: ACTION_TYPE.ADD_DISHES,
    payload: dishes,
});

export const dishesFailed = (errorMessage: string): DishesActionTypes => ({
    type: ACTION_TYPE.DISHES_FAILED,
    payload: errorMessage,
});

export const dishesLoading = (): DishesActionTypes => ({
    type: ACTION_TYPE.DISHES_LOADING,
});

export const fetchDishes = () => (dispatch: Dispatch) => {
    dispatch(dishesLoading());
    return fetch(`${BASE_URL}dishes`)
        .then(resp => resp.json())
        .then((dishes: Dish[]) => dispatch(addDishes(dishes)));
};

export const addPromotions = (promotions: Promotion[]): PromotionsActionTypes => ({
    type: ACTION_TYPE.ADD_PROMOTIONS,
    payload: promotions,
});

export const promotionsFailed = (errorMessage: string): PromotionsActionTypes => ({
    type: ACTION_TYPE.PROMOTIONS_FAILED,
    payload: errorMessage,
});

export const promotionsLoading = (): PromotionsActionTypes => ({
    type: ACTION_TYPE.PROMOTIONS_LOADING,
});

export const fetchPromotions = () => (dispatch: Dispatch) => {
    dispatch(dishesLoading());
    return fetch(`${BASE_URL}promotions`)
        .then(resp => resp.json())
        .then((dishes: Dish[]) => dispatch(addDishes(dishes)));
};
