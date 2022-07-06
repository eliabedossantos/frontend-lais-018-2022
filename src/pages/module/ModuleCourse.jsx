import  styled from "styled-components";
import LogoSedis from "../../assets/img/LogoSedis.png";
import Filter from "../../assets/img/GreenFilter.png";
import { Container, Row, Col } from "react-bootstrap";
import { Label, SubTitle, TitleGreen } from "../../components/layout/Texts/Texts";
import { TotalHour } from "../../components/Workload";
import { CalendarIcon } from "../../components/Svgs/Calendar";
import { TotalPeople } from "../../components/EnrolledPeople";
import { Rating } from "../../components/Rating";
import { useParams } from "react-router-dom";
import { useQuery} from "react-query";
import axios from 'axios';
import { Loading } from "../../components/Loading";

const TitleContainer = styled.div`
    width: 100%;
    padding: 2rem 0 4rem 0; 
    background-image: url(${props => props.backgroundImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    z-index: 1;
`;


export function ModuleContent(){
    const params = useParams();
    const slugModule = params['*'];
    const currentModule = slugModule.split('-mod=')[1];
    const {data, isLoading} = useQuery('moduleCurrent', async () => {
        const response = await axios.get(`http://localhost:3004/cursos?id=${currentModule}`)
        return response.data;
    })
    return(
        <>
            {isLoading && <Loading /> }
            {
            data?.map(item => {
            return(
                <section key="item.id">
                <TitleContainer backgroundImage={item.capa}>
                    <Container>
                        <Row>
                            <Col sm={12}>
                                <Label textColor="#fff" textAlign="start" className="mb-5">
                                    Início / Cursos / Módulos / {item.titulo}
                                </Label>
                                <TitleGreen textColor="#fff" textAlign="start" className="mb-3">
                                    {item.titulo}
                                </TitleGreen>
                                <SubTitle textColor="#fff" textAlign="start">
                                    {item.parceiros}
                                </SubTitle>
                            </Col>
                        </Row>
                    </Container>
                </TitleContainer>
                <Container className="py-4">
                    <Row>
                        <Col sm={12}>
                            <TitleGreen className="mb-4">
                                Informações Gerais do Curso
                            </TitleGreen>
                        </Col>
                    </Row>
                    <Row className="mb-4">
                        <Col className="d-flex justify-content-between flex-wrap">
                            <strong className="d-flex gap-1 align-items-center">
                                <TotalHour workload={(item.duracao).replace(/h/g, "")}/>
                                <Label>horas</Label>
                            </strong>
                            <strong className="d-flex gap-1 align-items-center">
                                <CalendarIcon />
                                <Label>Desde {item.criado_em}</Label>
                            </strong>
                            <strong className="d-flex gap-1 align-items-center">
                                <TotalPeople enrolledPeople={item.matriculados}/>
                                <Label>alunos matriculados</Label>
                            </strong>
                            <strong className="d-flex gap-1 align-items-center">
                            <Rating rating={item.avaliacao}/>
                                <Label>({item.numero_avaliacoes} avaliações)</Label>
                            </strong>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <SubTitle textColor="#7dc143" className="mb-3">
                                Sobre o curso
                            </SubTitle>
                            <p>{item.sobre}</p>
                            {item.objetivo_geral  &&
                                <SubTitle textColor="#7dc143" className="mb-3">
                                    Objetivos
                                </SubTitle>}
                            {item.objetivo_geral && <strong>Objetivo Geral</strong>}
                            <p>{item.objetivo_geral}</p>
                            {item.objetivo_especifico && <strong>Objetivos Específicos</strong>}
                            <p>{item.objetivo_especifico}</p>
                            {item.conteudo && <strong>Conteúdo do curso</strong>}
                            <ul>
                                {item.conteudo.map((item, index) => {
                                    return(
                                        <li key={index}>{item}</li>
                                    )
                                })}
                            </ul>
                            {item.recursos_educacionais &&
                            <SubTitle textColor="#7dc143" className="mb-3">
                                Recursos educacionais
                            </SubTitle>}
                            
                            <p className="text-center">{item.recursos_educacionais}</p>
                            <SubTitle textColor="#7dc143" className="mb-3">
                                Créditos
                            </SubTitle>
                            <Row className="justify-content-center">
                                {item.creditos.map((item, index) => {
                                    return(
                                        <Col sm={5} md={2} key={index} >
                                            <img src={item.capa} alt={item.titulo} className="mw-100"/>
                                        </Col>
                                    );
                                })}  
                            </Row>  
                        </Col>
                    </Row>
                </Container>
            </section>
            )})}
        </>
    );
}