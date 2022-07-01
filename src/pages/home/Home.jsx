import { Col, Container, Row, Tab, Tabs } from 'react-bootstrap';
import { TitleGreen } from '../../components/layout/Texts/Texts';
import { MostPopular } from '../../components/CardsModulesIndex/MostPopular';
import { VitrineCourses } from '../../components/VitrineCourses/VitrineCourses';
import { WellRated } from '../../components/CardsModulesIndex/WellRated';
import { LastModules } from '../../components/CardsModulesIndex/LastModules';
import { ButtonRounded } from '../../components/layout/Buttons/ButtonRounded.styled';
import { PartnersIndex } from '../../components/partnersIndex/PartnersIndex';
export function Home(){
    return(
        <main>
            <VitrineCourses />
            <section className="py-5">
                <TitleGreen fontSize="1.5rem">
                    Módulos Educacionais
                </TitleGreen>
                <Container>
                    <Row>
                        <Col>
                            <Tabs defaultActiveKey="popular" id="tabModules" className="mb-3">
                                <Tab eventKey="popular" title="Mais populares">
                                    <MostPopular />
                                </Tab>
                                <Tab eventKey="WellRated" title="Mais bem avaliados">
                                    <WellRated />
                                </Tab>
                                <Tab eventKey="LastModules" title="Mais recentes">
                                    <LastModules />
                                </Tab>
                            </Tabs>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex justify-content-center">
                            <ButtonRounded 
                            to="/courses"
                            btnwidth="15em">Ver mais</ButtonRounded>
                        </Col>
                    </Row>
                </Container>
                <PartnersIndex />
            </section>
        </main>
    );
}