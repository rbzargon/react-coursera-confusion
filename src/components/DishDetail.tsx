import React from 'react';
import {
    Card,
    CardBody,
    CardImg,
    CardText,
    CardTitle
} from 'reactstrap';

import { IComment, IDish } from '../shared/dishes';

export interface IDishDetailProps {
    dish: IDish
}

const renderDish = (dish: IDish) => {
    const { description, image, name } = dish;
    return (
        <Card>
            <CardImg width="100%" object src={image} alt={name} />>
                         <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardText>{description}</CardText>
            </CardBody>
        </Card>
    );
};

const renderComments = (comments: Array<IComment>) => {



    return (
        !!comments ? //null check
            <>
                <h4>Comments</h4>
                {comments.map((c, idx) =>
                    <blockquote key={idx} className="blockquote">{c.comment}
                        <footer className="blockquote-footer">
                            <b>{c.author}</b> {new Date(c.date).toLocaleString(navigator.language, { year: 'numeric', month: 'short', day: '2-digit' })}
                        </footer>
                    </blockquote>)}
            </> :
            <div></div>
    );
}

export const DishDetail: React.FC<IDishDetailProps> = (props) => {
    const { dish } = props;
    return (
        !!dish ?
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {renderDish(dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {renderComments(dish.comments)}
                    </div>
                </div>
            </div> :
            <div></div>
    );
}

export default DishDetail;