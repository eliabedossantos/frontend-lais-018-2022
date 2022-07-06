import { Container, Row } from "react-bootstrap";
import { Label } from "../layout/Texts/Texts";
import { ItemTemplate } from "./ItemTemplate";
import sifilisImg from "../../assets/img/sifilis.png"
import Pagination from 'react-bootstrap/Pagination'

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
                
            </Row>
        </Container>
    );
}