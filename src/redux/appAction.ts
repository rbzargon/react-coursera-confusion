import { Action } from 'redux';

export interface AppAction<T = undefined> extends Action {
    type: string;
    payload?: T;
}
