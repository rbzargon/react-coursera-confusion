import React from 'react';

import FeatureCard from './FeatureCard';
import { IDish } from '../shared/dishes';
import { IPromotion } from '../shared/promotions';
import { ILeader } from '../shared/leaders';

interface IHomeProps {
    dish?: IDish,
    promotion?: IPromotion,
    leader?: ILeader,
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