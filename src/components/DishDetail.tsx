import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { CommentEntry } from '../shared/commentEntry';
import { Comment } from '../shared/comments';
import { Dish } from '../shared/dishes';
import Comments from './Comments';
import DishCard from './DishCard';
import LoadingProgress from './LoadingProgress';

export interface DishDetailProps {
    addComment?: (entry: CommentEntry) => void;
    dish?: Dish;
    dishErrorMessage: string;
    dishLoading: boolean;
    comments: Comment[];
    commentsErrorMessage: string;
    commentsLoading: boolean;
}

function DishDetail(props: DishDetailProps) {
    const { comments, commentsErrorMessage, commentsLoading, dish, dishErrorMessage, dishLoading } = props;

    if (dishLoading)
        return (
            <div className="container">
                <div className="row">
                    <LoadingProgress />
                </div>
            </div>
        );
    else if (dishErrorMessage)
        return (
            <div className="container">
                <div className="row">
                    <h4>{dishErrorMessage}</h4>
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
                    <DishCard dish={dish} isLoading={dishLoading} errorMessage={dishErrorMessage} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <Comments
                        comments={comments}
                        isLoading={commentsLoading}
                        errorMessage={commentsErrorMessage}
                        dishId={dish.id}
                    />
                </div>
            </div>
        </div>
    ) : (
        <div></div>
    );
}

export default DishDetail;
