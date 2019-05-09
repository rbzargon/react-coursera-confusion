import React, { useCallback, useState } from 'react';
import { Collapse, Navbar, NavbarBrand, Nav, NavbarToggler, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

interface IHeaderProps {

}

export const Header: React.FC<IHeaderProps> = (props) => {

    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNavbar = useCallback(() => {
        setIsNavOpen(!isNavOpen);
    }, [isNavOpen]);

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
                                    <i className="fa fa-address0card fa-lg" /> Contact Us
                            </NavLink>
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
        </>
    );
};

export default Header;