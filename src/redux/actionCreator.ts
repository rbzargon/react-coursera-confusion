import { Dispatch } from 'redux';
import { BASE_URL } from '../shared/baseUrl';
import { Dish } from '../shared/dishes';
import { Comment } from '../shared/comments';
import { ACTION_TYPE } from './actionType';
import { CommentActionTypes } from './comments';
import { DishesActionTypes } from './dishes/actions';
import { PromotionsActionTypes } from './promotions';
import { Promotion } from '../shared/promotions';

export interface CommentEntry {
    dishId: number;
    rating: number;
    author: string;
    comment: string;
}

export const addComment = (commentEntry: CommentEntry): CommentActionTypes => ({
    type: ACTION_TYPE.ADD_COMMENT,
    payload: { commentEntry },
});

export const addComments = (comments: Comment[]): CommentActionTypes => ({
    type: ACTION_TYPE.ADD_COMMENTS,
    payload: { comments },
});

export const commentsFailed = (errorMessage: string): CommentActionTypes => ({
    type: ACTION_TYPE.COMMENTS_FAILED,
    payload: { errorMessage },
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
    payload: { dishes },
});

export const dishesFailed = (errorMessage: string): DishesActionTypes => ({
    type: ACTION_TYPE.DISHES_FAILED,
    payload: { errorMessage },
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
    payload: { promotions },
});

export const promotionsFailed = (errorMessage: string): PromotionsActionTypes => ({
    type: ACTION_TYPE.PROMOTIONS_FAILED,
    payload: { errorMessage },
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
