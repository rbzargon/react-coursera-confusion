import { Dispatch } from 'redux';
import { BASE_URL } from '../shared/baseUrl';
import { CommentEntry } from '../shared/commentEntry';
import { Comment } from '../shared/comments';
import { Dish } from '../shared/dishes';
import { Promotion } from '../shared/promotions';
import { ACTION_TYPE } from './actionType';
import { AppAction } from './appAction';
import { Leader } from '../shared/leaders';
import { extend } from '../shared/utils';

export interface AppActionCreator<T> {
    add: (data: T) => AppAction<T>;
    fetch: () => (dispatch: Dispatch<AppAction>) => Promise<AppAction<T | string>>;
    failed: (errorMessage: string) => AppAction<string>;
    loading: () => AppAction;
}

const onResolved = (response: Response) => {
    if (response.ok) return response;
    throw new Error(`Error ${response.status}: ${response.statusText}`);
};

const onRejected = (error: Error) => {
    const errorMessage = new Error(error.message);
    throw errorMessage;
};

class AppActionCreatorFactory {
    public static create<T>(endpoint: string): AppActionCreator<T> {
        class TActions {
            public static add = (data: T): AppAction<T> => ({
                type: `${ACTION_TYPE.ADD}_${endpoint.toUpperCase()}`,
                payload: data,
            });

            public static failed = (errorMessage: string): AppAction<string> => ({
                type: `${ACTION_TYPE.FAILED}_${endpoint.toUpperCase()}`,
                payload: errorMessage,
            });

            public static fetch = () => (dispatch: Dispatch): Promise<AppAction<T | string>> => {
                dispatch(TActions.loading());
                return fetch(`${BASE_URL}${endpoint}`)
                    .then(onResolved, onRejected)
                    .then(resp => resp.json())
                    .then((data: T) => dispatch(TActions.add(data)))
                    .catch((error: Error) => dispatch(TActions.failed(error.message)));
            };

            public static loading = (): AppAction => ({
                type: `${ACTION_TYPE.LOADING}_${endpoint.toUpperCase()}`,
            });
        }
        return TActions;
    }
}

export interface CommentEntryAction {
    addCommentEntry: (data: CommentEntry) => { type: ACTION_TYPE.ADD_COMMENT };
}

export interface CommentPostAction {
    postCommentEntry: (data: CommentEntry) => (dispatch: Dispatch) => Promise<AppAction<CommentEntry | void>>;
}

const CommentExtension = () => {
    class CommentEntryExtension {
        public static addCommentEntry = (data: CommentEntry): AppAction<CommentEntry> => ({
            type: ACTION_TYPE.ADD_COMMENT,
            payload: data,
        });
        public static postCommentEntry = (data: CommentEntry) => (dispatch: Dispatch) => {
            const newComment = { ...data, date: new Date().toISOString() };
            return fetch(`${BASE_URL}comments`, {
                method: 'POST',
                body: JSON.stringify(newComment),
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'same-origin',
            })
                .then(onResolved, onRejected)
                .then(response => response.json())
                .then(response => dispatch(CommentEntryExtension.addCommentEntry(response)))
                .catch(error => {
                    console.log(`Post comments ${error}`);
                    alert(`Comeent could not be posted:\nError: ${error.message}`);
                });
        };
    }
    return CommentEntryExtension;
};

const CommentsOnlyActions = AppActionCreatorFactory.create<Comment[]>('comments');
export const CommentsActions = extend(CommentsOnlyActions, CommentExtension());
interface CommentsActions extends AppActionCreator<Comment[]> {
    addCommentEntry(data: CommentEntry): AppAction<CommentEntry>;
    postCommentEntry(data: CommentEntry): AppAction<CommentEntry>;
}
export const DishesActions = AppActionCreatorFactory.create<Dish[]>('dishes');
export const PromotionsActions = AppActionCreatorFactory.create<Promotion[]>('promotions');
export const LeadersActions = AppActionCreatorFactory.create<Leader[]>('leaders');
