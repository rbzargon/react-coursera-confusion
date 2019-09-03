import React from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle, CardSubtitle } from 'reactstrap';
import LoadingProgress from './LoadingProgress';
import { BASE_URL } from '../shared/baseUrl';
import { FadeTransform } from 'react-animation-components';

export interface FeatureCardProps {
    item?: {
        image: string;
        name: string;
        designation?: string;
        description: string;
    };
    isLoading: boolean;
    errorMessage: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ item, isLoading, errorMessage }) => {
    return (
        <FadeTransform
            in
            transformProps={{
                exitTransform: 'scale(0.5) translateY(-50%)',
            }}
        >
            <Card>
                {isLoading ? (
                    <LoadingProgress />
                ) : errorMessage ? (
                    <h4>{errorMessage}</h4>
                ) : !!item ? (
                    <>
                        <CardImg src={`${BASE_URL}${item.image}`} alt={item.name} />
                        <CardBody>
                            <CardTitle>{item.name}</CardTitle>
                            {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                            <CardText>{item.description}</CardText>
                        </CardBody>
                    </>
                ) : (
                    ''
                )}
            </Card>
        </FadeTransform>
    );
};

export default FeatureCard;
