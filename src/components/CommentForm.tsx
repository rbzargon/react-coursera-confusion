import React, { useContext } from 'react';
import { Control, Errors, LocalForm } from "react-redux-form";
import { Button, Col, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';
import { AddCommentContext } from '../context/addComment';

interface CommentFormProps {
    dishId: number,
    isOpen: boolean,
    toggle: () => void
};

interface ModelValues {
    author: string,
    comment: string,
    rating: number,
}

const maxLength = (len: number) => ({ length } = '') => (length <= len);
const minLength = (len: number) => ({ length } = '') => (length >= len);

export const CommentForm: React.FunctionComponent<CommentFormProps> = ({ dishId, isOpen, toggle }) => {

    const addComment = useContext(AddCommentContext);

    const handleUpdate = (form: any) => {
        console.log('update', form);
    };

    const handleChange = (values: any) => {
        console.log('change', values);
    }

    const handleSubmit = (values: any) => {
        console.log('submit', values);
        toggle();
        const { author, comment, rating } = values;
        addComment({
            author, comment, dishId, rating,
        });
    }

    return (
        <Modal isOpen={isOpen} >
            <ModalHeader toggle={toggle}>Submit Comment</ModalHeader>
            <LocalForm
                onUpdate={(form) => handleUpdate(form)}
                onChange={(values) => handleChange(values)}
                onSubmit={(values) => handleSubmit(values)}
            >
                <ModalBody>
                    <Row className="form-group">
                        <Label htmlFor="rating" md={12}>Rating</Label>
                        <Col md={12}>
                            <Control.text model=".rating" id="rating" name="rating"
                                className="form-control"
                                type="number"
                                parser={v => parseInt(v) || 1}
                                min={1}
                                max={5}
                            />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="author" md={12}>Your Name</Label>
                        <Col md={12}>
                            <Control.text model=".author" id="author" name="author"
                                className="form-control"
                                validators={{
                                    minLength: minLength(3),
                                    maxLength: maxLength(15)
                                }}
                            />
                            <Errors
                                className="text-danger"
                                model=".author"
                                show="touched"
                                messages={{
                                    minLength: 'Must be more than 2 characters',
                                    maxLength: 'Must be fewer than 16 characters'
                                }}
                            />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="comment" md={12}>Comment</Label>
                        <Col md={12}>
                            <Control.textarea model=".comment" id="comment" name="comment"
                                className="form-control"
                            />
                        </Col>
                    </Row>
                </ModalBody>
                <ModalFooter>
                    <Button type="submit" color="primary">Submit</Button>
                </ModalFooter>
            </LocalForm>
        </Modal>
    );
}

export default CommentForm;