import { COMMENTS, IComment } from '../shared/comments';
import { DISHES, IDish } from '../shared/dishes';
import { LEADERS, ILeader } from '../shared/leaders';
import { PROMOTIONS, IPromotion } from '../shared/promotions';

export interface RootState {
    dishes: IDish[],
    comments: IComment[],
    promotions: IPromotion[],
    leaders: ILeader[]
}

export const initialState: RootState = {
    dishes: DISHES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS
};

export const reducer = (state = initialState, action: any) => {
    return state;
};

