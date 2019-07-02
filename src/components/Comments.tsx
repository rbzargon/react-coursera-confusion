import React, { useState } from 'react';

import { Comment } from '../shared/comments';
import { CommentForm } from './CommentForm';
import { Button } from 'reactstrap';

export interface ICommentsProps {
    comments?: Array<Comment>
}

const Comments: React.FC<ICommentsProps> = React.memo((props) => {

    const { comments } = props;
    const [isFormOpen, setFormOpen] = useState(false);

    return (
        !!comments ? //null check
            <>
                <h4>Comments</h4>
                {comments.map((c, idx) =>
                    <blockquote key={idx} className="blockquote">{c.comment}
                        <footer className="blockquote-footer">
                            <b>{c.author}</b> {new Date(c.date).toLocaleString(navigator.language, { year: 'numeric', month: 'short', day: '2-digit' })}
                        </footer>
                    </blockquote>)}
                <Button onClick={() => setFormOpen(true)} type="button" className="btn btn-light"><i className="fa fa-pencil"></i>{' '}Submit Comment</Button>
                <CommentForm isOpen={isFormOpen} toggle={() => { setFormOpen(false); }} />
            </> :
            <div></div>
    );
}, (prevProps, nextProps) => {
    const empty = [{ id: -1 }]
    const { comments: prevComments = empty } = prevProps;
    const { comments: nextComments = empty } = nextProps;
    return prevComments === nextComments ||
        (prevComments.length === nextComments.length &&
            prevComments.every((prevComment, idx) => prevComment.id === nextComments![idx].id))
});

export default Comments;