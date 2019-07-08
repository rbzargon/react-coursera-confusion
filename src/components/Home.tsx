import React, { FC } from 'react';
import { Dish } from '../shared/dishes';
import { Leader } from '../shared/leaders';
import { Promotion } from '../shared/promotions';
import FeatureCard from './FeatureCard';
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
            <div className="row">
                <div className="col-12 col-md m-1 text-center">
                    {dishesLoading ? (
                        <LoadingProgress />
                    ) : dishesErrorMessage ? (
                        <h4>{dishesErrorMessage}</h4>
                    ) : !!dish ? (
                        <FeatureCard item={dish} />
                    ) : (
                        ''
                    )}
                </div>
                <div className="col-12 col-md m-1">{!!promotion ? <FeatureCard item={promotion} /> : ''}</div>
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
