import { Action } from 'redux';
import { Promotion, PROMOTIONS } from '../shared/promotions';
import { ACTION_TYPE } from './actionType';

export interface AddPromotionAction extends Action {
    type: ACTION_TYPE.ADD_PROMOTIONS;
    payload: {
        promotions: Promotion[];
    };
}

export interface PromotionsLoadingAction extends Action {
    type: ACTION_TYPE.PROMOTIONS_LOADING;
}

export interface PromotionsFailedAction extends Action {
    type: ACTION_TYPE.PROMOTIONS_FAILED;
    payload: {
        errorMessage: string;
    };
}

export type PromotionsActionTypes = AddPromotionAction | PromotionsLoadingAction | PromotionsFailedAction;

export const promotionsReducer = (state = PROMOTIONS, action: Action) => {
    switch (action.type) {
        default:
            return state;
    }
};
