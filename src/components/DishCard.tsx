import React from 'react';
import {
    Card,
    CardBody,
    CardImg,
    CardText,
    CardTitle
} from 'reactstrap';

interface IDishCardProps {
    description: string,
    image: string,
    name: string
}

export const DishCard: React.FC<IDishCardProps> = ({ description, image, name }) => {
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