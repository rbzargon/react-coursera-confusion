import React from 'react';
import { CommentEntry } from '../redux/actionCreator';

const AddCommentContext = React.createContext({
    addComment: (entry: CommentEntry) => { },
    dishId: -1
});

interface AddCommentProviderProps {
    addComment: (entry: CommentEntry) => void,
    dishId: number
    children: React.ReactNode
}

const AddCommentProvider = (props: AddCommentProviderProps) => {
    const { addComment, dishId, children } = props;

    return (
        <AddCommentContext.Provider value={{ addComment, dishId }}>
            {children}
        </AddCommentContext.Provider>
    );
};

export { AddCommentContext, AddCommentProvider };
