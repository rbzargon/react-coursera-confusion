import { Action } from 'redux';
import { Promotion, PROMOTIONS } from '../shared/promotions';
import { ACTION_TYPE } from './actionType';
import { AppAction } from './appAction';

export interface AddPromotionAction extends AppAction<Promotion[]> {
    type: ACTION_TYPE.ADD_PROMOTIONS;
    payload: Promotion[];
}

export interface PromotionsLoadingAction extends AppAction {
    type: ACTION_TYPE.PROMOTIONS_LOADING;
}

export interface PromotionsFailedAction extends AppAction<string> {
    type: ACTION_TYPE.PROMOTIONS_FAILED;
    payload: string;
}

export type PromotionsActionTypes = AddPromotionAction | PromotionsLoadingAction | PromotionsFailedAction;

export const promotionsReducer = (state = PROMOTIONS, action: Action) => {
    switch (action.type) {
        default:
            return state;
    }
};
