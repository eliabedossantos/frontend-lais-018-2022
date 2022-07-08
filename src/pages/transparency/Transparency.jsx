// general imports
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { useQuery } from 'react-query';
import axios from 'axios';
import { Loading } from "../../components/Loading";
import { Chart } from "react-google-charts";
import { useState } from "react";


// assets
import { Label, SubTitle, TitleGreen } from "../../components/layout/Texts/Texts";
import { CapIcon } from "../../components/Svgs/CapIcon";
import { CertificateIcon } from "../../components/Svgs/CertificateIcon";
import { CapMoneyIcon } from "../../components/Svgs/CapMoneyIcon";
import { PeopleMoneyIcon } from "../../components/Svgs/PeopleMoneyIcon";
import brazilMap from "../../assets/img/brazilMap.png";
import { DotIcon } from "../../components/Svgs/DotIcon";
import { PeopleIcon } from "../../components/Svgs/PeopleIcon";
import { SubscriptionsIcon } from "../../components/Svgs/SubscriptionsIcon";
import { BrazilGraphic } from "../../lib/BrazilGraphic";
const DataContainer = styled.div`
    width: 100%;
    max-width: 100%;
    min-height: 160px;
    background-color: #F5F5F7;
    padding: 1rem;
    border-radius: 20px;
`;

export function Transparency(){
    const [chartsData, setChartData] = useState({}); // here we receive the data from the API to use in the charts
    const chartUsersCourses = [["Curso", "Usuários"]]; //The Google Charts library needs the data to be structured as follows: array[[description,data description],... ], we use this array as a structure
    const chartColors = ['#F5F5F7', '#7DC143', '#D16FFF', '#2F2E41'];
    const {data, isLoading} = useQuery('transparency', async () => { // get data
        const response = await axios.get('http://localhost:3004/transparecia')
        setChartData(response.data);
        return response.data;
    });
    if(!isLoading){ // if the data is loaded...
        chartsData.usuarios_por_curso.map(item => { // here we create the array to use in the charts
            chartUsersCourses.push([item.curso, item.usuarios]);
        })
    }
    const optionsChartUsers = {
        legend: "none",
        pieStartAngle: 100,
        colors: chartColors,
        backgroundColor: 'transparent'
    };
    const numberFormat = new Intl.NumberFormat(); // format numbers in string for show in the screen

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
                                <SubTitle textColor="#7dc143">
                                    {isLoading ? <Loading /> : numberFormat.format(data.dados_gerais.usuarios_registrados)}
                                </SubTitle>
                            </div>
                            <div>
                                <span className="d-flex mb-2 align-items-center justify-content-center gap-2">
                                    <SubscriptionsIcon />
                                    <strong>Inscrições realizadas</strong>
                                </span>
                                <SubTitle textColor="#7dc143">
                                    {isLoading ? <Loading /> : numberFormat.format(data.dados_gerais.incricoes_realizadas)}
                                </SubTitle>
                            </div>
                            <div>
                                <span className="d-flex mb-2 align-items-center justify-content-center gap-2"> 
                                    <CapIcon />
                                    <strong>Cursos ativos</strong>
                                </span> 
                                <SubTitle textColor="#7dc143">
                                    {isLoading ? <Loading /> :  numberFormat.format(data.dados_gerais.cursos_ativos)}
                                </SubTitle>
                            </div>
                            <div>
                                <span className="d-flex mb-2 align-items-center justify-content-center gap-2"> 
                                    <CertificateIcon/>
                                    <strong>Direito à Certificação</strong>
                                </span> 
                                <SubTitle textColor="#7dc143">
                                    {isLoading ? <Loading /> :  numberFormat.format(data.dados_gerais.direito_certificacao)}
                                </SubTitle>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center flex-wrap gap-3">
                            <div>
                                <span className="d-flex mb-2 align-items-center justify-content-center gap-2">
                                    <CapMoneyIcon />
                                    <strong>Investimento médio por curso</strong>
                                </span>
                                <SubTitle textColor="#7dc143">
                                    {isLoading ? <Loading /> : data.dados_gerais.investimento_medio_curso}
                                </SubTitle>
                            </div>
                            <div>
                                <span className="d-flex mb-2 align-items-center justify-content-center gap-2">
                                    <PeopleMoneyIcon />
                                    <strong>Investimento médio por aluno</strong>
                                </span>
                                <SubTitle textColor="#7dc143">
                                    {isLoading ? <Loading /> : data.dados_gerais.investimento_medio_aluno}
                                </SubTitle>
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
                        <Chart
                            chartType="PieChart"
                            data={chartUsersCourses}
                            options={optionsChartUsers}
                            width={"100%"}
                            height={"500px"}
                        />
                        <div>
                            {
                                data?.usuarios_por_curso.map((item, index) => {
                                    return(
                                        <span className="d-flex mb-2 align-items-center gap-2" key={index}>
                                            <DotIcon dotColor={chartColors[index]} />
                                            <strong>{item.curso}: {numberFormat.format(item.usuarios)}</strong> 
                                        </span>
                                    );
                                })
                            }
                        </div>
                    </DataContainer>
                </Col>
                <Col md={6}>
                    <DataContainer className="mb-5">
                        <SubTitle textColor="#7dc143" className="mb-3">
                            Usuários por Estado
                        </SubTitle>
                        <div className="d-flex justify-content-center mb-3 ">
                            <BrazilGraphic />
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