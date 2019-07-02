import React from 'react';
import {
    Card,
    CardBody,
    CardImg,
    CardText,
    CardTitle
} from 'reactstrap';
import { Dish } from '../shared/dishes';

interface IDishCardProps {
    dish: Dish
}

export const DishCard: React.FC<IDishCardProps> = ({ dish: { description, image, name } }) => {
    console.log(`rendered dishcard ${name}`);
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

export default DishCard;