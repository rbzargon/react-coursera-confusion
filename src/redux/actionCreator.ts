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
    fetch: () => (dispatch: Dispatch<AppAction>) => Promise<AppAction<T>>;
    failed: (errorMessage: string) => AppAction<string>;
    loading: () => AppAction;
}

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

            public static fetch = () => (dispatch: Dispatch): Promise<AppAction<T>> => {
                dispatch(TActions.loading());
                return fetch(`${BASE_URL}${endpoint}`)
                    .then(resp => resp.json())
                    .then((data: T) => dispatch(TActions.add(data)));
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

const CommentsOnlyActions = AppActionCreatorFactory.create<Comment[]>('comments');
export const CommentsActions = extend(
    CommentsOnlyActions,
    class {
        public static addCommentEntry = (data: CommentEntry): AppAction<CommentEntry> => ({
            type: ACTION_TYPE.ADD_COMMENT,
            payload: data,
        });
    },
);
interface CommentsActions extends AppActionCreator<Comment[]> {
    addCommentEntry(data: CommentEntry): AppAction<CommentEntry>;
}
export const DishesActions = AppActionCreatorFactory.create<Dish[]>('dishes');
export const PromotionsActions = AppActionCreatorFactory.create<Promotion[]>('promotions');
export const LeadersActions = AppActionCreatorFactory.create<Leader[]>('leaders');
