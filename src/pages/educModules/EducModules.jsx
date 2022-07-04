import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import { Label, TitleGreen } from "../../components/layout/Texts/Texts";
import { Covid } from "../../components/ModulesPage/Covid";
import { Opas } from "../../components/ModulesPage/Opas";
import { Preceptoria } from "../../components/ModulesPage/Preceptoria";
import { PrisonSystem } from "../../components/ModulesPage/PrisonSystem";
import { RareDeseases } from "../../components/ModulesPage/RareDeseases";
import { Syphilis } from "../../components/ModulesPage/Syphilis";
import { WebTalks } from "../../components/ModulesPage/WebTalks";

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
                            <Syphilis />
                        </Tab>
                        <Tab eventKey="preceptoria" title="Preceptoria">
                           <Preceptoria />
                        </Tab>
                        <Tab eventKey="raras" title="Doenças Raras">
                           <RareDeseases />
                        </Tab>
                        <Tab eventKey="webPalestras" title="Web Palestras">
                           <WebTalks />
                        </Tab>
                        <Tab eventKey="prisional" title="Sistema prisional">
                          <PrisonSystem />
                        </Tab>
                        <Tab eventKey="opas" title="OPAS">
                           <Opas />
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        </Container>
        
    );
}