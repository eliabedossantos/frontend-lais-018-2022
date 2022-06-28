import styles from './modules/VitrineCourses.module.css';
import { Carousel, Col, Container, Row } from "react-bootstrap";
import { SubTitle, TitleGreen } from "../layout/Texts/Texts";
import imgPepsu from "../../assets/img/pepsuVitrine.png";
import { useState } from "react";
import { ButtonRounded } from '../layout/Buttons/ButtonRounded.styled';

export function VitrineCourses(){
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return(
        <section  className={`${styles.BgVitrine}`}>
            <Container>
                <Row className="justify-content-center">
                    <Col md={8}>
                        <Carousel activeIndex={index} onSelect={handleSelect}>
                            <Carousel.Item>
                                <TitleGreen>Especialização PEPSUS</TitleGreen>
                                <SubTitle>
                                    Conheça o curso de Especialização em Saúde da Família
                                </SubTitle>
                                <div className="d-flex justify-content-center my-4">
                                    <ButtonRounded 
                                    to="/courses">Acesse</ButtonRounded>
                                </div> 
                                <img
                                    className="d-block w-100"
                                    src={imgPepsu}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}