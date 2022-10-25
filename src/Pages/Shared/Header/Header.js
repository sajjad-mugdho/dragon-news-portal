import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const Header = () => {


    const { user, logOut } = useContext(AuthContext);

    const handlelogout = () => {
        logOut().then(() => { }).catch(error => console.error(error))
    }
    return (

        <div>
            <Navbar className='mb-4' collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand ><Link to={'/'}>Dragon News</Link> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Categorise</Nav.Link>
                            <Nav.Link href="#pricing"> News</Nav.Link>
                            <Nav.Link>
                                {
                                    user?.uid ?
                                        <>
                                            <span> {user?.displayName}</span>
                                            <Button onClick={handlelogout}>logout</Button>
                                        </>
                                        :
                                        <>
                                            <Button variant='light'><Link to={'/login'}>Login</Link></Button>
                                            <Button variant='light'> <Link to={'/register'}>Sign Up</Link></Button>
                                        </>
                                }

                            </Nav.Link>
                            {user?.photoURL ?
                                <Image
                                    style={{ height: '35px' }}
                                    src={user?.photoURL}
                                    rounded />

                                :
                                <FaUserAlt />
                            }

                        </Nav>

                        <div className='d-lg-none mt-2 bg-light-gray'>
                            <LeftSideNav />
                        </div>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>

    );
};

export default Header;