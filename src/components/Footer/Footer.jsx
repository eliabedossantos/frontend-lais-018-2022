import { FooterContainer } from './Organizations.styled';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { Label, SubTitle, TitleGreen } from '../layout/Texts/Texts';
import { LogoUfrn } from '../Svgs/LogoUfrn';
import { LogoLais } from '../Svgs/LogoLais';
import { LogoLaisFooter } from '../Svgs/LogoLaisFooter';
import { Link } from 'react-router-dom';
import { FacebookLogo, InstagramLogo, TwitterLogo } from 'phosphor-react';
export function Footer(){
    return(
        <div> 
            <FooterContainer backgroundColor="#7DC143" className="py-4">
                <Container>
                    <Row>
                        <Col>
                            <TitleGreen textColor="#fff" fontSize="1.4rem" className='mb-4'>
                                Realização
                            </TitleGreen>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col md={3} className="d-flex justify-content-center mt-3 mt-md-0">
                            <LogoLais />
                        </Col>
                        <Col md={3} className="d-flex justify-content-center mt-3 mt-md-0">
                            <LogoUfrn />
                        </Col>
                    </Row>
                </Container>
            </FooterContainer>
            <FooterContainer>
                <Container>
                    <Row>
                        <Col md={4}>
                            <div>
                                <div className="d-flex justify-content-center">
                                    <LogoLaisFooter />
                                </div>
                                <Label className="d-block text-center" textColor="#fff">
                                    Laboratório de Inovação<br /> Tecnológica em Saúde.
                                </Label>
                            </div>
                        </Col>
                        <Col md={4} className="mt-3 mt-lg-0">
                            <SubTitle textColor="#fff">
                                Links Úteis
                            </SubTitle>
                            <Nav as="ul" className="d-block text-center">
                                <Nav.Item as="li" className='mt-2'> 
                                    <Link 
                                    className={`text-light text-decoration-none `}  to="/">Início</Link> 
                                </Nav.Item>
                                <Nav.Item as="li" className='mt-2'> 
                                    <Link 
                                    className={`text-light text-decoration-none `}  to="/about">Sobre Nós</Link>
                                </Nav.Item>
                                <Nav.Item as="li" className='mt-2'> 
                                    <Link 
                                    className={`text-light text-decoration-none `}  to="/courses">Cursos</Link> 
                                </Nav.Item>
                                <Nav.Item as="li" className='mt-2'> 
                                    <Link 
                                    className={`text-light text-decoration-none `}  to="/partners">Parceiros</Link> 
                                </Nav.Item>
                                <Nav.Item as="li" className='mt-2'> 
                                    <Link 
                                    className={`text-light text-decoration-none `}  to="/transparency">Transparência</Link> 
                                </Nav.Item>
                            </Nav>

                        </Col>
                        <Col md={4} className="mt-3 mt-lg-0">
                            <SubTitle textColor="#fff">
                                Redes Sociais
                            </SubTitle>
                            <div className="d-flex justify-content-center">
                                <div>
                                    <a href="#" target="_blank" rel="noopener noreferrer">
                                    <FacebookLogo size={32} color="#fff" />
                                    </a>
                                    <a href="#" target="_blank" rel="noopener noreferrer">
                                        <TwitterLogo size={32} color="#fff" />
                                    </a>
                                    <a href="#" target="_blank" rel="noopener noreferrer">
                                        <InstagramLogo size={32} color="#fff"/>
                                    </a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col className="d-flex justify-content-center">
                            <Label textColor="#fff">
                                2022 © LAIS (HUOL). Todos os direitos reservados
                            </Label>
                        </Col>
                    </Row>
                </Container>
            </FooterContainer>
        </div>
    );
}