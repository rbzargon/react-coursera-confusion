import React, { useState } from 'react';
import { Fade, Stagger } from 'react-animation-components';
import { Button } from 'reactstrap';
import { Comment } from '../shared/comments';
import { CommentForm } from './CommentForm';
import LoadingProgress from './LoadingProgress';
export interface CommentsProps {
    comments?: Comment[];
    errorMessage: string;
    isLoading: boolean;
    dishId: number;
}
export function Comments(props: CommentsProps) {
    const { comments, errorMessage, isLoading, dishId } = props;
    const [isFormOpen, setFormOpen] = useState(false);

    return isLoading ? (
        <LoadingProgress />
    ) : errorMessage ? (
        <h4>{errorMessage}</h4>
    ) : !!comments ? (
        <>
            <h4>Comments</h4>
            <Stagger in>
                {comments.map((c, idx) => (
                    <Fade key={idx} in>
                        <blockquote className="blockquote">
                            {c.comment}
                            <footer className="blockquote-footer">
                                <b>{c.author}</b>{' '}
                                {new Date(c.date).toLocaleString(navigator.language, {
                                    year: 'numeric',
                                    month: 'short',
                                    day: '2-digit',
                                })}
                            </footer>
                        </blockquote>
                    </Fade>
                ))}
            </Stagger>
            <Button onClick={() => setFormOpen(true)} type="button" className="btn btn-light">
                <i className="fa fa-pencil"></i> Submit Comment
            </Button>
            <CommentForm
                dishId={dishId}
                isOpen={isFormOpen}
                toggle={() => {
                    setFormOpen(false);
                }}
            />
        </>
    ) : (
        <div></div>
    );
}

export default Comments;
