import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Comment } from '../shared/comments';
import { Dish } from '../shared/dishes';
import Comments from './Comments';
import DishCard from './DishCard';
import LoadingProgress from './LoadingProgress';

export interface DishDetailProps {
    dish?: Dish;
    comments?: Comment[];
    isLoading: boolean;
    errorMessage: string;
}

export const DishDetail: FunctionComponent<DishDetailProps> = React.memo(
    props => {
        const { dish, comments, isLoading, errorMessage } = props;

        if (isLoading)
            return (
                <div className="container">
                    <div className="row">
                        <LoadingProgress />
                    </div>
                </div>
            );
        else if (errorMessage)
            return (
                <div className="container">
                    <div className="row">
                        <h4>{errorMessage}</h4>
                    </div>
                </div>
            );

        return !!dish ? (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/home">Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <Link to="/menu">Menu</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <DishCard dish={dish} isLoading={isLoading} errorMessage={errorMessage} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <Comments comments={comments} dishId={dish.id} />
                    </div>
                </div>
            </div>
        ) : (
            <div></div>
        );
    },
    (prevProps, nextProps) => {
        const empty = { id: -1 };
        const { dish: prevDish = empty, isLoading: prevLoading, errorMessage: prevError } = prevProps;
        const { dish: nextDish = empty, isLoading: nextLoading, errorMessage: nextError } = nextProps;
        return (
            prevDish === nextDish ||
            prevDish.id === nextDish.id ||
            prevLoading === nextLoading ||
            prevError === nextError
        );
    },
);

DishDetail.displayName = 'DishDetail';

export default DishDetail;
