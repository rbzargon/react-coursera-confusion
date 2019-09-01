import React, { FC } from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';
import { Dish } from '../shared/dishes';
import LoadingProgress from './LoadingProgress';
import { BASE_URL } from '../shared/baseUrl';

interface DishCardProps {
    dish: Dish;
    isLoading: boolean;
    errorMessage: string;
}

export const DishCard: FC<DishCardProps> = ({ dish: { description, image, name }, errorMessage, isLoading }) => {
    return (
        <Card>
            {isLoading ? (
                <LoadingProgress />
            ) : errorMessage ? (
                <h4>{errorMessage}</h4>
            ) : (
                <>
                    <CardImg width="100%" src={`${BASE_URL}${image}`} alt={name} />
                    <CardBody>
                        <CardTitle>{name}</CardTitle>
                        <CardText>{description}</CardText>
                    </CardBody>
                </>
            )}
        </Card>
    );
};

export default DishCard;
