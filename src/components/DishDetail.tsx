import React from 'react';

import { IDish } from '../shared/dishes';
import Comments from './Comments';
import DishCard from './DishCard';

export interface IDishDetailProps {
    dish: IDish
}

export const DishDetail: React.FC<IDishDetailProps> = React.memo((props) => {
    const { dish } = props;



    return (
        !!dish ?
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <DishCard description={dish.description} image={dish.image} name={dish.name} />>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <Comments comments={dish.comments} />
                    </div>
                </div>
            </div> :
            <div></div>
    );
}, (prevProps, nextProps) => {
    const empty = { id: -1 }
    const { dish: prevDish = empty } = prevProps;
    const { dish: nextDish = empty } = nextProps;
    return prevDish === nextDish ||
        prevDish.id === nextDish.id
});

export default DishDetail;