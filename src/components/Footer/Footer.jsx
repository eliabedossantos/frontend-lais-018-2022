import { FooterContainer } from './Organizations.styled';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { Label, SubTitle } from '../layout/Texts/Texts';
import { LogoUfrn } from '../Svgs/LogoUfrn';
import { LogoLais } from '../Svgs/LogoLais';
import { LogoLaisFooter } from '../Svgs/LogoLaisFooter';
import { Link } from 'react-router-dom';
export function Footer(){
    return(
        <div> 
            <FooterContainer backgroundColor="#7DC143">
                <Container>
                    <Row>
                        <Col>
                            <SubTitle textColor="#fff">
                            Realização
                            </SubTitle>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col md={3} className="d-flex justify-content-center">
                            <LogoLais />
                        </Col>
                        <Col md={3} className="d-flex justify-content-center">
                            <LogoUfrn />
                        </Col>
                    </Row>
                </Container>
            </FooterContainer>
            <FooterContainer>
                <Container>
                    <Row>
                        <Col md={3}>
                            <div>
                                <div className="d-flex justify-content-center">
                                    <LogoLaisFooter />
                                </div>
                                <Label className="d-block text-center" textColor="#fff">
                                    Laboratório de Inovação<br /> Tecnológica em Saúde.
                                </Label>
                            </div>
                        </Col>
                        <Col md={4}>
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
                        <Col md={4}>
                            <SubTitle textColor="#fff">
                                Redes Sociais
                            </SubTitle>

                        </Col>
                    </Row>
                </Container>
            </FooterContainer>
        </div>
    );
}