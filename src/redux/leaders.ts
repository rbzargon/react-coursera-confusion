import { Reducer } from 'redux';
import { Leader } from '../shared/leaders';
import { ACTION_TYPE } from './actionType';
import { AppAction } from './appAction';
import { AppState } from './appState';

export interface AddLeadersAction extends AppAction<Leader[]> {
    type: typeof ACTION_TYPE.ADD_LEADERS;
    payload: Leader[];
}

export interface LeadersLoadingAction extends AppAction {
    type: typeof ACTION_TYPE.LOADING_LEADERS;
}

export interface LeadersFailedAction extends AppAction<string> {
    type: typeof ACTION_TYPE.FAILED_LEADERS;
    payload: string;
}

export type LeadersActionTypes = AddLeadersAction | LeadersLoadingAction | LeadersFailedAction;

const initialLeadersState: AppState<Leader[]> = { data: [], errorMessage: '', isLoading: true };

export const leadersReducer: Reducer<AppState<Leader[]>, LeadersActionTypes> = (
    state = initialLeadersState,
    action,
) => {
    switch (action.type) {
        case ACTION_TYPE.ADD_LEADERS:
            const { payload: data } = action;
            return { ...state, data, isLoading: false, errorMessage: '' };
        case ACTION_TYPE.FAILED_LEADERS:
            const { payload: errorMessage } = action;
            return { ...state, isLoading: false, errorMessage };
        case ACTION_TYPE.LOADING_LEADERS:
            return { ...state, isLoading: true, errorMessage: '' };
        default:
            return state;
    }
};
