import React from 'react';

import FeatureCard from './FeatureCard';
import { Dish } from '../shared/dishes';
import { Promotion } from '../shared/promotions';
import { Leader } from '../shared/leaders';

interface IHomeProps {
    dish?: Dish,
    promotion?: Promotion,
    leader?: Leader,
}



export const Home: React.FC<IHomeProps> = (props) => {
    const { dish, promotion, leader } = props;

    return (
        <div className="container">
            <div className="row align-items-start">
                {!!dish ?
                    <div className="col-12 col-md m-1">
                        <FeatureCard item={dish} />
                    </div> : ''}
                {!!promotion ?
                    <div className="col-12 col-md m-1">
                        <FeatureCard item={promotion} />
                    </div> : ''}
                {!!leader ?
                    <div className="col-12 col-md m-1">
                        <FeatureCard item={leader} />
                    </div> : ''}
            </div>
        </div>
    )
};

export default Home;