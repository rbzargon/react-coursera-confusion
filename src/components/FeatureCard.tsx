import React from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle, CardSubtitle } from 'reactstrap';

export interface FeatureCardProps {
    item: {
        image: string;
        name: string;
        designation?: string;
        description: string;
    };
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ item }) => {
    return (
        <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );
};

export default FeatureCard;
