import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Comment } from '../shared/comments';
import { Dish } from '../shared/dishes';
import Comments from './Comments';
import DishCard from './DishCard';


export interface IDishDetailProps {
    dish?: Dish,
    comments?: Comment[]
}

export const DishDetail: React.FC<IDishDetailProps> = React.memo((props) => {
    const { dish, comments } = props;



    return (
        !!dish ?
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to='/home'>Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <Link to='/menu'>Menu</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>
                            {dish.name}
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <DishCard dish={dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <Comments comments={comments} />
                    </div>
                </div>
            </div> :
            <div></div>
    );
}, (prevProps, nextProps) => {
    const empty = { id: -1 }
    const { dish: prevDish = empty } = prevProps;
    const { dish: nextDish = empty } = nextProps;
    return prevDish === nextDish ||
        prevDish.id === nextDish.id
});

export default DishDetail;