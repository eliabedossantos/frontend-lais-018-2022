import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import { Label, TitleGreen } from "../../components/layout/Texts/Texts";
import { Covid } from "../../components/ModulesInternal/Covid";

export function EducModules(){
    return(
        <Container className="py-5">
            <Row>
                <Col>
                    <Label textAlign="start">
                        Início / Cursos / Módulos
                    </Label>
                    <TitleGreen>
                        Módulos Educacionais
                    </TitleGreen>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Tabs defaultActiveKey="covid" id="tabModulesInternal" className="my-3 justify-content-around">
                        <Tab eventKey="covid" title="Covid 19">
                           <Covid />
                        </Tab>
                        <Tab eventKey="sifilis" title="Sífilis e outras Ist's">
                            <h1>teste</h1>
                        </Tab>
                        <Tab eventKey="preceptoria" title="Preceptoria">
                           <h1>teste</h1>
                        </Tab>
                        <Tab eventKey="raras" title="Doenças Raras">
                           <h1>teste</h1>
                        </Tab>
                        <Tab eventKey="webPalestras" title="Web Palestras">
                           <h1>teste</h1>
                        </Tab>
                        <Tab eventKey="prisional" title="Sistema prisional">
                           <h1>teste</h1>
                        </Tab>
                        <Tab eventKey="opas" title="OPAS">
                           <h1>teste</h1>
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        </Container>
        
    );
}