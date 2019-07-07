import React, { FC } from 'react';

import FeatureCard from './FeatureCard';
import { Dish } from '../shared/dishes';
import { Promotion } from '../shared/promotions';
import { Leader } from '../shared/leaders';
import LoadingProgress from './LoadingProgress';

interface HomeProps {
    dish?: Dish;
    promotion?: Promotion;
    leader?: Leader;
    dishesLoading: boolean;
    dishesErrorMessage: string;
}

export const Home: FC<HomeProps> = props => {
    const { dish, promotion, leader, dishesLoading, dishesErrorMessage } = props;

    return (
        <div className="container">
            <div className="row align-items-start">
                {dishesLoading ? (
                    <div className="col-12 col-md m-1">
                        <LoadingProgress />
                    </div>
                ) : dishesErrorMessage ? (
                    <div className="col-12 col-md m-1">
                        <h4>{dishesErrorMessage}</h4>
                    </div>
                ) : !!dish ? (
                    <div className="col-12 col-md m-1">
                        <FeatureCard item={dish} />
                    </div>
                ) : (
                    ''
                )}
                {!!promotion ? (
                    <div className="col-12 col-md m-1">
                        <FeatureCard item={promotion} />
                    </div>
                ) : (
                    ''
                )}
                {!!leader ? (
                    <div className="col-12 col-md m-1">
                        <FeatureCard item={leader} />
                    </div>
                ) : (
                    ''
                )}
            </div>
        </div>
    );
};

export default Home;
