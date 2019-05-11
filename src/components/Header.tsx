import React, { useCallback, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Collapse, Form, FormGroup, Input, Jumbotron, Label, Modal, ModalBody, ModalHeader, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from 'reactstrap';

interface IHeaderProps {

}

export const Header: React.FC<IHeaderProps> = (props) => {

    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    let username = React.createRef<HTMLInputElement>();
    let password = React.createRef<HTMLInputElement>();
    let remember = React.createRef<HTMLInputElement>();

    const toggleNavbar = useCallback(() => {
        setIsNavOpen(!isNavOpen);
    }, [isNavOpen]);

    const toggleLogin = useCallback(() => {
        setIsLoginOpen(!isLoginOpen);
    }, [isLoginOpen]);

    const handleLogin: React.FormEventHandler<HTMLFormElement> = (event) => {
        toggleLogin();
        if (username.current && password.current && remember.current)
            alert(`Username: ${username.current.value} password: ${password.current.value}} remember: ${remember.current.checked}}`);
        event.preventDefault();
    }

    return (
        <>
            <Navbar dark expand="md">
                <div className="container">
                    <NavbarToggler onClick={toggleNavbar} />
                    <NavbarBrand className="mr-auto" href="/">
                        <img src="assets/images/logo.png" height="30" width="41"
                            alt="Ristorante Con Fusion" />
                    </NavbarBrand>
                    <Collapse navbar isOpen={isNavOpen}>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/home">
                                    <i className="fa fa-home fa-lg" /> Home
                            </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/aboutus">
                                    <i className="fa fa-info fa-lg" /> About Us
                            </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/menu">
                                    <i className="fa fa-list fa-lg" /> Menu
                            </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/contactus">
                                    <i className="fa fa-address-card fa-lg" /> Contact Us
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Button outline onClick={toggleLogin}>
                                    <i className="fa fa-sign-in fa-lg" /> Login
                                </Button>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
            <Jumbotron>
                <div className="container">
                    <div className="row row-header">
                        <div className="col-12 col-sm-6">
                            <h1>Ristorante Con Fusion</h1>
                            <p>We take inspiration from the world's best cuisines to create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                        </div>
                    </div>
                </div>
            </Jumbotron>
            <Modal isOpen={isLoginOpen} toggle={toggleLogin}>
                <ModalHeader>Login</ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleLogin}>
                        <FormGroup>
                            <Label htmlFor="username">
                                Username
                            </Label>
                            <Input type="text" id="username" name="username"
                                innerRef={username} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="password">
                                Password
                            </Label>
                            <Input type="password" id="password" name="password"
                                innerRef={password} />
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" name="remember"
                                    innerRef={remember} />
                                Remember me
                            </Label>
                        </FormGroup>
                        <Button type="submit" value="submit" color="bg-primary">Login</Button>
                    </Form>
                </ModalBody>
            </Modal>
        </>
    );
};

export default Header;