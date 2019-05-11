import React, { useState } from 'react';
import { Breadcrumb, BreadcrumbItem, Form, FormGroup, Label, Col, Input, Button, FormFeedback } from 'reactstrap';
import { Link } from 'react-router-dom';

interface IContactProps {

}

export const Contact: React.FC<IContactProps> = (props) => {

    const [state, setState] = useState({
        firstname: '',
        lastname: '',
        telnum: '',
        email: '',
        agree: false,
        contactType: 'Tel.',
        message: '',
        touched: {
            firstname: false,
            lastname: false,
            telnum: false,
            email: false
        }
    });

    const handleBlur: React.ChangeEventHandler<HTMLInputElement> =  (event) => {
        console.log('handleBlur',event);
        setState({ ...state, touched: { ...state.touched, [event.target.id]: true } });
    };

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        console.log(e);
        const et = e.target;
        et.type === 'checkbox' ? setState({ ...state, agree: !state.agree }) :
            setState({ ...state, [et.id]: et.value })
    };

    const handleSubmit: React.FormEventHandler<HTMLElement> = (e) => {
        e.preventDefault()
        console.log(`Current state: ${state}`);
        alert(`Current state: ${JSON.stringify(state)}`);
    }

    const validate = (firstname: string, lastname: string, telnum: string, email: string) => {
        const errors = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
        }
        if (state.touched.firstname && state.firstname.length < 3)
            errors.firstname = 'First name should be >= 3 characters';
        else if (state.touched.firstname && state.firstname.length > 10)
            errors.firstname = 'First name should be <= 10 characters';

        if (state.touched.lastname && state.lastname.length < 3)
            errors.lastname = 'Last name should be >= 3 characters';
        else if (state.touched.lastname && state.lastname.length > 10)
            errors.lastname = 'Last name should be <= 10 characters';

        const reg = /^\d+$/;
        if (state.touched.telnum && !reg.test(state.telnum))
            errors.telnum = "Only digits allowed";

        if (state.touched.email && email.indexOf('@') === -1)
            errors.email = "Email should contain @"

        return errors;
    }

    const errors = validate(state.firstname, state.lastname, state.telnum, state.email);

    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to='/home'>Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>
                        Contact Us
                    </BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Contact Us</h3>
                    <hr />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                    <h5>Our Address</h5>
                    <address>
                        121, Clear Water Bay Road<br />
                        Clear Water Bay, Kowloon<br />
                        HONG KONG<br />
                        <i className="fa fa-phone"></i>: +852 1234 5678<br />
                        <i className="fa fa-fax"></i>: +852 8765 4321<br />
                        <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                    </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h3>Send us Your Feedback</h3>
                </div>
                <div className="col-12 col-md-9">
                    <Form onSubmit={handleSubmit}>
                        <FormGroup row>
                            <Label htmlFor="firstname" md={2}>First Name</Label>
                            <Col md={10}>
                                <Input type="text" id="firstname" name="firstname" 
                                placeholder="First Name" 
                                valid={state.touched.firstname && !(errors.firstname)}
                                invalid={!!(errors.firstname)}
                                value={state.firstname} 
                                onChange={handleChange} 
                                onBlur={handleBlur} />
                                <FormFeedback>
                                    {errors.firstname}
                                </FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="lastname" md={2}>Last Name</Label>
                            <Col md={10}>
                                <Input type="text" id="lastname" name="lastname" 
                                    placeholder="Last Name"
                                    valid={state.touched.lastname && !(errors.lastname)}
                                    invalid={!!(errors.lastname)}
                                    value={state.lastname} 
                                    onChange={handleChange} 
                                    onBlur={handleBlur}/>
                                <FormFeedback>
                                    {errors.lastname}
                                </FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="telnum" md={2}>Telephone</Label>
                            <Col md={10}>
                                <Input type="text" id="telnum" name="telnum" 
                                    placeholder="Tel. Number"
                                    valid={state.touched.telnum && !(errors.telnum)}
                                    invalid={!!(errors.telnum)}
                                    value={state.telnum} 
                                    onChange={handleChange} 
                                    onBlur={handleBlur}/>
                                <FormFeedback>
                                    {errors.telnum}
                                </FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="email" md={2}>Email</Label>
                            <Col md={10}>
                                <Input type="text" id="email" name="email" 
                                placeholder="Email" 
                                valid={state.touched.email && !(errors.email)}
                                invalid={!!(errors.email)}
                                value={state.email} 
                                onChange={handleChange} 
                                onBlur={handleBlur}/>
                                <FormFeedback>
                                    {errors.email}
                                </FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md={{ size: 6, offset: 2 }}>
                                <FormGroup check >
                                    <Label check>
                                        <Input type="checkbox" name="agree" checked={state.agree} onChange={handleChange} />
                                        {' '}<strong>May we contact you?</strong>
                                    </Label>
                                </FormGroup>
                            </Col>
                            <Col md={{ size: 3, offset: 1 }}>
                                <Input type="select" name="contactType" value={state.contactType} onChange={handleChange} >
                                    <option>Tel.</option>
                                    <option>Email</option>
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="feedback" md={2}>Your Feedback</Label>
                            <Col md={10}>
                                <Input type="textarea" id="message" name="message" placeholder="Feedback" rows={12} value={state.message} onChange={handleChange} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md={{ size: 10, offset: 2 }} >
                                <Button type="submit" color="primary">
                                    Send Feedback
                                </Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Contact;