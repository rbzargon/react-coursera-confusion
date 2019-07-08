export interface Feedback {
    firstName: string;
    lastName: string;
    telephone: string;
    email: string;
    agree: boolean;
    contactType: string;
    message: string;
}

export const INITIAL_FEEDBACK = {
    firstname: '',
    lastname: '',
    telnum: '',
    email: '',
    agree: false,
    contactType: 'Tel.',
    message: '',
}