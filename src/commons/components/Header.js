import React from 'react'
import {
    Navbar,
    Container,
    Nav,
    NavDropdown,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import commonLabels from '../constants/commonLabels';

const Header = () => {

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="mb-4" >
            <Container>
                <Navbar.Brand href="/">{commonLabels.NAVBAR.TITULO}</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">{commonLabels.NAVBAR.INICIO}</Nav.Link>
                        <Nav.Link href="#seccion">{commonLabels.NAVBAR.SECCION}</Nav.Link>
                        <NavDropdown title={commonLabels.NAVBAR.CATEGORIAS} id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#categoria/3.1">{commonLabels.NAVBAR.CATEGORIA_1}</NavDropdown.Item>
                            <NavDropdown.Item href="#categoria/3.2">{commonLabels.NAVBAR.CATEGORIA_2}</NavDropdown.Item>
                            <NavDropdown.Item href="#categoria/3.3">{commonLabels.NAVBAR.CATEGORIA_3}</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#categoria/3.4">{commonLabels.NAVBAR.OTROS}</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link eventKey={2} href="#login">
                            {commonLabels.NAVBAR.INICIAR_SESION}
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;
