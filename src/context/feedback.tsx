import React, { ReactNode, useState } from 'react';

export enum FEEDBACK_CONTACT_TYPE {
    TELEPHONE = 'Tel.',
    EMAIL = 'Email',
}

export interface Feedback {
    firstname?: string;
    lastname?: string;
    telnum?: string;
    email?: string;
    agree?: boolean;
    contactType?: FEEDBACK_CONTACT_TYPE;
    message?: string;
}

export const FeedbackContext = React.createContext({
    feedback: {},
    setFeedback: (feedback: Feedback) => {},
});

interface FeedbackProviderProps {
    children: ReactNode;
}

export const FeedbackProvider = (props: FeedbackProviderProps) => {
    const { children } = props;
    const [feedback, setFeedback] = useState({});
    return <FeedbackContext.Provider value={{ feedback, setFeedback }}>{children}</FeedbackContext.Provider>;
};
