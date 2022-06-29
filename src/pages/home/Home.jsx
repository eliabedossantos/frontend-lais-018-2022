import { Col, Container, Row, Tab, Tabs } from 'react-bootstrap';
import { TitleGreen } from '../../components/layout/Texts/Texts';
import { MostPopular } from '../../components/MostPopular/MostPopular';
import { VitrineCourses } from '../../components/VitrineCourses/VitrineCourses';
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
                            <Tabs defaultActiveKey="profile" id="tabModules" className="mb-3">
                                <Tab eventKey="home" title="Mais populares">
                                    <MostPopular />
                                </Tab>
                                <Tab eventKey="profile" title="Mais bem avaliados">
                                <h1>teste Profile</h1>
                                </Tab>
                                <Tab eventKey="contact" title="Mais recentes">
                                    <h1>teste contact</h1>
                                </Tab>
                            </Tabs>
                        </Col>
                    </Row>
                </Container>
            </section>
        </main>
    );
}