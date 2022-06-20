import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import {Button} from "react-bootstrap";
import { HashLink } from 'react-router-hash-link';

const Header = () => {

    const {user,logout} = useAuth()
    return (
        <>
            <Navbar collapseOnSelect expand="lg"  bg="dark" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand href="#home">Car Mechanics</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link  as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink } to="/home#services">Services</Nav.Link>
                        <Nav.Link as={HashLink } to="/home#experts">Experts</Nav.Link>
                        { user?.email ? <Button onClick={logout} variant='light'>Logout</Button> :
                            <Nav.Link as={HashLink} to="/login">Login</Nav.Link>
                        }
                        <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>

                </Container>
            </Navbar>

        </>
    );
};

export default Header;