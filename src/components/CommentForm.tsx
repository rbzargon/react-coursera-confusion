import React, { useContext } from 'react';
import { Control, Errors, LocalForm } from "react-redux-form";
import { Button, Col, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';
import { AddCommentContext } from '../context/addComment';

interface CommentFormProps {
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

export const CommentForm: React.FunctionComponent<CommentFormProps> = ({ isOpen, toggle }) => {

    const { addComment, dishId } = useContext(AddCommentContext);

    const submitHandler = (values: any) => {
        console.log(values);
        toggle();
        const { author, comment, rating } = values;
        addComment({
            author, comment, dishId, rating,
        });
    };

    return (
        <Modal isOpen={isOpen} >
            <ModalHeader toggle={toggle}>Submit Comment</ModalHeader>
            <ModalBody>
                <LocalForm>
                    <Row className="form-group">
                        <Label htmlFor="rating" md={12}>Rating</Label>
                        <Col md={12}>
                            <Control.text model=".rating" id="rating" name="rating"
                                className="form-control"
                                type="number"
                                min={0}
                                max={5}
                                step={1}
                                value={1}
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
                </LocalForm>
            </ModalBody>
            <ModalFooter>
                <Button type="submit" color="primary" onClick={submitHandler}>Submit</Button>
            </ModalFooter>
        </Modal>
    );
}

export default CommentForm;