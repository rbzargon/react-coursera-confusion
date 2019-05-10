import React from 'react';

import { IComment } from '../shared/comments';

export interface ICommentsProps {
    comments?: Array<IComment>
}

const Comments: React.FC<ICommentsProps> = React.memo((props) => {

    const { comments } = props;
    console.log('rerendered comments');
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