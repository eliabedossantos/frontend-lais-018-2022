import { Container, Row, Col } from "react-bootstrap";
import { Label, SubTitle, TitleGreen } from "../../components/layout/Texts/Texts";
import styled from "styled-components";
import { PeopleIcon } from "../../components/Svgs/PeopleIcon";
import { SubscriptionsIcon } from "../../components/Svgs/SubscriptionsIcon";
import { CapIcon } from "../../components/Svgs/CapIcon";
import { CertificateIcon } from "../../components/Svgs/CertificateIcon";
import { CapMoneyIcon } from "../../components/Svgs/CapMoneyIcon";
import { PeopleMoneyIcon } from "../../components/Svgs/PeopleMoneyIcon";
import graphicImg from "../../assets/img/graphic.png";
import brazilMap from "../../assets/img/brazilMap.png";
import { DotIcon } from "../../components/Svgs/DotIcon";
import { useQuery } from 'react-query';
import axios from 'axios';
import { Loading } from "../../components/Loading";
import { useEffect } from "react";
const DataContainer = styled.div`
    width: 100%;
    max-width: 100%;
    min-height: 160px;
    background-color: #F5F5F7;
    padding: 1rem;
    border-radius: 20px;
`;


export function Transparency(){
    // const {data, isLoading} = useQuery('transparency', async () => {
    //     const response = await axios.get('http://localhost:3004/transparecia')
    //     return response.data;
    // });

    return(
        <>
            <Container className="py-5">
            <Row>
                <Col>
                    <Label textAlign="start" className="mb-3">Início <strong>/ Transparência</strong></Label>
                    <TitleGreen>Transparência</TitleGreen>
                </Col>
            </Row>
            <Row>
                <Col>
                    <DataContainer>
                        <SubTitle textColor="#7dc143" className="mb-3">
                            Dados Gerais
                        </SubTitle>
                        <div className="d-flex justify-content-center justify-content-lg-between flex-wrap gap-3">
                            <div>
                                <span className="d-flex mb-2 align-items-center justify-content-center gap-2">
                                    <PeopleIcon />
                                    <strong>Total de usuários registrados</strong>
                                </span>
                                <SubTitle textColor="#7dc143">{}</SubTitle>
                            </div>
                            <div>
                                <span className="d-flex mb-2 align-items-center justify-content-center gap-2">
                                    <SubscriptionsIcon />
                                    <strong>Inscrições realizadas</strong>
                                </span>
                                <SubTitle textColor="#7dc143">{}</SubTitle>
                            </div>
                            <div>
                                <span className="d-flex mb-2 align-items-center justify-content-center gap-2"> 
                                    <CapIcon />
                                    <strong>Cursos ativos</strong>
                                </span> 
                                <SubTitle textColor="#7dc143">1.870.190</SubTitle>
                            </div>
                            <div>
                                <span className="d-flex mb-2 align-items-center justify-content-center gap-2"> 
                                    <CertificateIcon/>
                                    <strong>Direito à Certificação</strong>
                                </span> 
                                <SubTitle textColor="#7dc143">324</SubTitle>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center flex-wrap gap-3">
                            <div>
                                <span className="d-flex mb-2 align-items-center justify-content-center gap-2">
                                    <CapMoneyIcon />
                                    <strong>Investimento médio por curso</strong>
                                </span>
                                <SubTitle textColor="#7dc143">R$ 42,951</SubTitle>
                            </div>
                            <div>
                                <span className="d-flex mb-2 align-items-center justify-content-center gap-2">
                                    <PeopleMoneyIcon />
                                    <strong>Investimento médio por aluno</strong>
                                </span>
                                <SubTitle textColor="#7dc143">R$ 7,25</SubTitle>
                            </div>
                        </div>
                    </DataContainer>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col md={6}>
                    <DataContainer className="mb-5">
                        <SubTitle textColor="#7dc143" className="mb-3">
                            Usuários por curso
                        </SubTitle>
                        <div className="d-flex justify-content-center mb-3 ">
                            <img  src={graphicImg} alt="" className="mw-100"/>
                        </div>
                        <div>
                            <span className="d-flex mb-2 align-items-center gap-2">
                                <DotIcon dotColor="white" />
                                <strong>Curso de prevenção ao suicídio: 43.412</strong> 
                            </span>
                            <span className="d-flex mb-2 align-items-center gap-2">
                                <DotIcon dotColor="#7DC143" />
                                <strong>A covid-19 e seus sintomas: 120.000</strong> 
                            </span>
                            <span className="d-flex mb-2 align-items-center gap-2">
                                <DotIcon dotColor="#D16FFF" />
                                <strong>Pai presente: Cuidado e Compromisso: 105.301</strong> 
                            </span>
                            <span className="d-flex mb-2 align-items-center gap-2">
                                <DotIcon dotColor="#2F2E41" />
                                <strong>Outros: 1.669.402</strong> 
                            </span>
                        </div>
                    </DataContainer>
                </Col>
                <Col md={6}>
                    <DataContainer className="mb-5">
                        <SubTitle textColor="#7dc143" className="mb-3">
                            Usuários por curso
                        </SubTitle>
                        <div className="d-flex justify-content-center mb-3 ">
                            <img  src={brazilMap} alt="" className="mw-100"/>
                        </div>
                        <div>
                            <span className="d-flex mb-2 align-items-center gap-2">
                                <DotIcon dotColor="white" />
                                <strong>Curso de prevenção ao suicídio: 43.412</strong> 
                            </span>
                            <span className="d-flex mb-2 align-items-center gap-2">
                                <DotIcon dotColor="#7DC143" />
                                <strong>A covid-19 e seus sintomas: 120.000</strong> 
                            </span>
                            <span className="d-flex mb-2 align-items-center gap-2">
                                <DotIcon dotColor="#D16FFF" />
                                <strong>Pai presente: Cuidado e Compromisso: 105.301</strong> 
                            </span>
                            <span className="d-flex mb-2 align-items-center gap-2">
                                <DotIcon dotColor="#2F2E41" />
                                <strong>Outros: 1.669.402</strong> 
                            </span>
                        </div>
                    </DataContainer>
                </Col>
            </Row>
            </Container>
        
        </>
    );
}