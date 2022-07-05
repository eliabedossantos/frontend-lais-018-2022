import { Col, Container, Row } from "react-bootstrap";
import { CardModuleIndex } from "../CardsModulesIndex/ContainerModule.styled";
import { Label, SubTitle, TitleGreen } from "../layout/Texts/Texts";
import styled from "styled-components";
import { useQuery } from 'react-query';
import axios from 'axios';
import { Loading } from "../Loading";

const ContainerPartners = styled.div`
    width: 190px;
`;
export function PartnersIndex() {
    const {data, isFetching} = useQuery('principalPartners', async () => {
        const response = await axios.get('http://localhost:3004/parceiros?_start=0&_end=4')
        return response.data;
    });

    return(
        <div>
            {isFetching && <Loading /> }
            <TitleGreen fontSize="1.7rem" className="mt-5 mb-3">
                Parceiros
            </TitleGreen>
            <Container>
                <Row>
                    <Col>
                        <CardModuleIndex className="align-items-center">
                        {
                            data?.map(item => {
                                return(
                                    <ContainerPartners  key={item.id}>
                                        <img src={item.capa} alt={item.titulo} className="mw-100 w-100 h-auto" />
                                        <Label textColor="#000">
                                            {item.titulo}
                                        </Label>
                                    </ContainerPartners>
                                );
                            })
                        }
                        </CardModuleIndex>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}