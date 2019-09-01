import React, { FC } from 'react';
import { Dish } from '../shared/dishes';
import { Leader } from '../shared/leaders';
import { Promotion } from '../shared/promotions';
import FeatureCard from './FeatureCard';

interface HomeProps {
    dish?: Dish;
    dishesErrorMessage: string;
    dishesLoading: boolean;
    leader?: Leader;
    leadersErrorMessage: string;
    leadersLoading: boolean;
    promotion?: Promotion;
    promotionsErrorMessage: string;
    promotionsLoading: boolean;
}

export const Home: FC<HomeProps> = props => {
    const {
        dish,
        dishesErrorMessage,
        dishesLoading,
        leader,
        leadersErrorMessage,
        leadersLoading,
        promotion,
        promotionsErrorMessage,
        promotionsLoading,
    } = props;

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md m-1 text-center">
                    <FeatureCard item={dish} errorMessage={dishesErrorMessage} isLoading={dishesLoading} />
                </div>
                <div className="col-12 col-md m-1 text-center">
                    <FeatureCard item={promotion} errorMessage={promotionsErrorMessage} isLoading={promotionsLoading} />
                </div>
                <div className="col-12 col-md m-1 text-center">
                    <FeatureCard item={leader} errorMessage={leadersErrorMessage} isLoading={leadersLoading} />
                </div>
            </div>
        </div>
    );
};

export default Home;
