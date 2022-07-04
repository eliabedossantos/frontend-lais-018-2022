import { Container, Row, Col } from "react-bootstrap";
import { Label, TitleGreen } from "../../components/layout/Texts/Texts";
import LogoSedis from "../../assets/img/LogoSedis.png";
import { PartnerTemplate } from "../../components/PartnersPage/ItemPartTemplate";


export function Partners(){
    return(
        <Container className="my-5">
            <Row>
                <Col>
                    <div>
                        <Label textAlign="start" className="mb-3">Início <strong>/ Parceiros</strong></Label>
                        <TitleGreen textAlign="start">Nossos parceiros</TitleGreen>
                        <Label textAlign="start" className="mb-3">
                            <em>6 de 78 resultados</em>
                        </Label>
                    </div>
                </Col>
            </Row>
            <Row>
                <PartnerTemplate
                sourceImg={LogoSedis}
                orgName={"SEDIS - Secretaria de Educação a Distância"}/>
                <PartnerTemplate
                sourceImg={LogoSedis}
                orgName={"SEDIS - Secretaria de Educação a Distância"}/>
                <PartnerTemplate
                sourceImg={LogoSedis}
                orgName={"SEDIS - Secretaria de Educação a Distância"}/>
                <PartnerTemplate
                sourceImg={LogoSedis}
                orgName={"SEDIS - Secretaria de Educação a Distância"}/>
            </Row>
        </Container>
    );
}