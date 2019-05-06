import React from 'react';
import {
    Card,
    CardBody,
    CardImg,
    CardText,
    CardTitle
} from 'reactstrap';

import { IDish } from '../shared/dishes';
import Comments from './Comments';

export interface IDishDetailProps {
    dish: IDish
}

export const DishDetail: React.FC<IDishDetailProps> = React.memo((props) => {
    const { dish } = props;

    const renderDish = (dish: IDish) => {
        console.log('rerendered dish');
        const { description, image, name } = dish;
        return (
            <Card>
                <CardImg width="100%" object src={image} alt={name} />
                <CardBody>
                    <CardTitle>{name}</CardTitle>
                    <CardText>{description}</CardText>
                </CardBody>
            </Card>
        );
    };

    return (
        !!dish ?
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {renderDish(dish)}
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