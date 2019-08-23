import { Reducer } from 'redux';
import { Promotion } from '../shared/promotions';
import { ACTION_TYPE } from './actionType';
import { AppAction } from './appAction';
import { AppState } from './appState';

export interface AddPromotionAction extends AppAction<Promotion[]> {
    type: typeof ACTION_TYPE.ADD_PROMOTIONS;
    payload: Promotion[];
}

export interface PromotionsLoadingAction extends AppAction {
    type: typeof ACTION_TYPE.LOADING_PROMOTIONS;
}

export interface PromotionsFailedAction extends AppAction<string> {
    type: typeof ACTION_TYPE.FAILED_PROMOTIONS;
    payload: string;
}

export type PromotionsActionTypes = AddPromotionAction | PromotionsLoadingAction | PromotionsFailedAction;

export const promotionsReducer: Reducer<AppState<Promotion[]>, PromotionsActionTypes> = (
    state = {
        isLoading: true,
        errorMessage: '',
        data: [],
    },
    action,
) => {
    switch (action.type) {
        case ACTION_TYPE.ADD_PROMOTIONS:
            const { payload: data } = action;
            return {
                ...state,
                isLoading: false,
                errorMessage: '',
                data,
            };
        case ACTION_TYPE.LOADING_PROMOTIONS:
            return { ...state, isLoading: true, errorMessage: '' };
        case ACTION_TYPE.FAILED_PROMOTIONS:
            const { payload: errorMessage } = action;
            return { ...state, isLoading: false, errorMessage };
        default:
            return state;
    }
};
