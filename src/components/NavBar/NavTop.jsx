import styles from './modules/NavTop.module.css';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Logo } from '../Svgs/Logo';
import { ButtonRounded } from '../layout/Buttons/ButtonRounded.styled';
import { SearchForm } from '../SearchForm/SearchForm';

export function NavTop(){
    return(
        <Navbar className={`justify-content-end ${styles.shadow}`}bg="light" 
            expand="lg">
            <Container fluid>
                <Navbar.Brand>
                    <Link to="/">
                        <Logo />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav as="ul" className="gap-2">
                        <Nav.Item as="li"> 
                            <Link 
                            className={`nav-link ${styles.LinkMenu}`}  to="/">Início</Link> 
                        </Nav.Item>
                        <Nav.Item as="li"> 
                            <Link 
                            className={`nav-link ${styles.LinkMenu}`}  to="/about">Sobre Nós</Link>
                        </Nav.Item>
                        <Nav.Item as="li"> 
                            <Link 
                            className={`nav-link ${styles.LinkMenu}`}  to="/courses">Cursos</Link> 
                        </Nav.Item>
                        <Nav.Item as="li"> 
                            <Link 
                            className={`nav-link ${styles.LinkMenu}`}  to="/partners">Parceiros</Link> 
                        </Nav.Item>
                        <Nav.Item as="li"> 
                            <Link 
                            className={`nav-link ${styles.LinkMenu}`}  to="/transparency">Transparência</Link> 
                        </Nav.Item>
                        <Nav.Item as="li"> 
                            <SearchForm />
                        </Nav.Item>
                        <Nav.Item as="li" className="d-flex align-items-center mr-2"> 
                            <ButtonRounded
                                to="/login"
                                btncolor="#D16FFF"
                                bgcolor="transparent">Entrar</ButtonRounded> 
                        </Nav.Item>
                        <Nav.Item as="li" className="d-flex align-items-center"> 
                            <ButtonRounded
                                to="/login">Cadastrar</ButtonRounded> 
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}