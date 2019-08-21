import { Dispatch } from 'redux';
import { BASE_URL } from '../shared/baseUrl';
import { CommentEntry } from '../shared/commentEntry';
import { Comment } from '../shared/comments';
import { Dish } from '../shared/dishes';
import { Promotion } from '../shared/promotions';
import { ACTION_TYPE } from './actionType';
import { AppAction } from './appAction';

export interface AppActionCreator<T> {
    add: (data: T) => AppAction<T>;
    fetch: () => (dispatch: Dispatch<AppAction>) => Promise<AppAction<T>>;
    failed: (errorMessage: string) => AppAction<string>;
    loading: () => AppAction;
}
interface AddCommentEntry {
    addCommentEntry(data: CommentEntry): AppAction<CommentEntry>;
}

export const CommentsActions: AppActionCreator<Comment[]> & AddCommentEntry = class {
    public static add = (data: Comment[]): AppAction<Comment[]> => ({
        type: ACTION_TYPE.ADD_COMMENTS,
        payload: data,
    });

    public static addCommentEntry = (data: CommentEntry): AppAction<CommentEntry> => ({
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

    public static loading = (): AppAction => ({
        type: ACTION_TYPE.COMMENTS_LOADING,
    });
};

export const DishesActions: AppActionCreator<Dish[]> = class {
    public static add = (dishes: Dish[]): AppAction<Dish[]> => ({
        type: ACTION_TYPE.ADD_DISHES,
        payload: dishes,
    });

    public static failed = (errorMessage: string): AppAction<string> => ({
        type: ACTION_TYPE.DISHES_FAILED,
        payload: errorMessage,
    });

    public static loading = (): AppAction => ({
        type: ACTION_TYPE.DISHES_LOADING,
    });

    public static fetch = () => (dispatch: Dispatch): Promise<AppAction<Dish[]>> => {
        dispatch(DishesActions.loading());
        return fetch(`${BASE_URL}dishes`)
            .then(resp => resp.json())
            .then((dishes: Dish[]) => dispatch(DishesActions.add(dishes)));
    };
};

const PromotionsActions: AppActionCreator<Promotion[]> = class {
    public static add = (promotions: Promotion[]): AppAction<Promotion[]> => ({
        type: ACTION_TYPE.ADD_PROMOTIONS,
        payload: promotions,
    });

    public static failed = (errorMessage: string): AppAction<string> => ({
        type: ACTION_TYPE.PROMOTIONS_FAILED,
        payload: errorMessage,
    });

    public static loading = (): AppAction => ({
        type: ACTION_TYPE.PROMOTIONS_LOADING,
    });

    public static fetch = () => (dispatch: Dispatch): Promise<AppAction<Promotion[]>> => {
        dispatch(PromotionsActions.loading());
        return fetch(`${BASE_URL}promotions`)
            .then(resp => resp.json())
            .then((promotions: Promotion[]) => dispatch(PromotionsActions.add(promotions)));
    };
}
