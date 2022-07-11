import { Container, Row } from "react-bootstrap";
import { Label } from "../layout/Texts/Texts";
import { ItemTemplate } from "./ItemTemplate";
import sifilisImg from "../../assets/img/sifilis.png"

export function Covid(){

    return(
        <Container>
            <Row className="mb-4">
                <Label textColor="#2F2E41" textAlign="start">
                    <em>
                        6 de 20 resultados
                    </em>
                </Label>
            </Row>
            <Row>
            <ItemTemplate   
                sourceImg={sifilisImg}
                titleModule="Sífilis: Sífilis: Vigilância Epidemiológica"
                labelInstitution="LAIS / EBSERH"
                totalPeople={"27.645"}
                totalHour={"12h"}
                rating={"5,0"}
                labelDescription="O módulo Sífilis: Vigilância Epidemiológica tem como objetivo promover uma atualização dos profissionais de saúde acerca dos conceitos essenciais nessa área de conhecimento, com foco na sífilis..."
                openModule="/sifilis"
                />
            </Row>
        </Container>
    );
}