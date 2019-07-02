import React, { ReactNode } from 'react';
import { CommentEntry } from '../redux/actionCreator';

const AddCommentContext = React.createContext((entry: CommentEntry) => { });

interface AddCommentProviderProps {
    value: (entry: CommentEntry) => void,
    children: ReactNode
}

const AddCommentProvider = (props: AddCommentProviderProps) => {
    const { value, children } = props;

    return (
        <AddCommentContext.Provider value={value}>
            {children}
        </AddCommentContext.Provider>
    );
};

export { AddCommentContext, AddCommentProvider };
