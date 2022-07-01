import { Col, Container, Row } from "react-bootstrap";
import { CardModuleIndex } from "../CardsModulesIndex/ContainerModule.styled";
import { Label, SubTitle, TitleGreen } from "../layout/Texts/Texts";

export function PartnersIndex() {
    return(
        <div>
            <TitleGreen fontSize="1.7rem" className="mt-5 mb-3">
                Parceiros
            </TitleGreen>
            <Container>
                <Row>
                    <Col>
                        <CardModuleIndex>
                            <div style={{width: "190px"}}>
                                <SubTitle fontSize="1.2rem">
                                    Governo do RN
                                </SubTitle>
                                <Label textColor="#000">
                                    Governo do Estado do Rio Grande do Norte.
                                </Label>
                            </div>
                            <div style={{width: "190px"}}>
                                <SubTitle fontSize="1.2rem">
                                    SESAP
                                </SubTitle>
                                <Label textColor="#000">
                                    Secretaria de Saúde Pública do Estado do Rio Grande do Norte.
                                </Label>
                            </div>
                            <div style={{width: "190px"}}>
                                <SubTitle fontSize="1.2rem">
                                    UFRN
                                </SubTitle>
                                <Label textColor="#000">
                                    Universidade Federal do Rio Grande do Norte.
                                </Label>
                            </div>
                            <div style={{width: "190px"}}>
                                <SubTitle fontSize="1.2rem">
                                    HUOL
                                </SubTitle>
                                <Label textColor="#000">
                                Hospital Onofre Lopes: Hospital Universitário da UFRN (Universidade Federal do Rio Grande do Norte). 
                                </Label>
                            </div>
                        </CardModuleIndex>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}