import  styled from "styled-components";
import sifilisImg from "../../assets/img/sifilis.png";
import LogoSedis from "../../assets/img/LogoSedis.png";
import Filter from "../../assets/img/GreenFilter.png";
import { Container, Row, Col } from "react-bootstrap";
import { Label, SubTitle, TitleGreen } from "../../components/layout/Texts/Texts";
import { TotalHour } from "../../components/Workload";
import { CalendarIcon } from "../../components/Svgs/Calendar";
import { TotalPeople } from "../../components/EnrolledPeople";
import { Rating } from "../../components/Rating";

const TitleContainer = styled.div`
    width: 100%;
    padding: 1rem 0 3rem 0; 
    background-image: url(${props => props.backgroundImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    z-index: 1;
`;


export function ModuleCourse(){
    return(
        <section>      
            <TitleContainer backgroundImage={sifilisImg}>
                <Container>
                    <Row>
                        <Col>
                            <Label textColor="#fff" textAlign="start" className="mb-5">
                                Início / Cursos / Módulos / Sífilis: Vigilância Epidemiológica
                            </Label>
                            <TitleGreen textColor="#fff" textAlign="start" className="mb-3">
                                Sífilis: Vigilância Epidemiológica
                            </TitleGreen>
                            <SubTitle textColor="#fff" textAlign="start">
                                UFRN / LAIS / SEDIS / HUOL / EBSERH / UC / MS
                            </SubTitle>
                        </Col>
                    </Row>
                </Container>
            </TitleContainer>
            <Container className="py-4">
                <Row>
                    <Col>
                        <TitleGreen className="mb-4">
                            Informações Gerais do Curso
                        </TitleGreen>
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Col className="d-flex justify-content-between flex-wrap">
                        <strong className="d-flex gap-1 align-items-center">
                            <TotalHour workload={"6"}/>
                            <Label>horas</Label>
                        </strong>
                        <strong className="d-flex gap-1 align-items-center">
                            <CalendarIcon />
                            <Label>Desde 20/03/2021</Label>
                        </strong>
                        <strong className="d-flex gap-1 align-items-center">
                            <TotalPeople enrolledPeople={"89.654"}/>
                            <Label>alunos matriculados</Label>
                        </strong>
                        <strong className="d-flex gap-1 align-items-center">
                           <Rating rating={"4,9"}/>
                            <Label>(52.000 avaliações)</Label>
                        </strong>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <SubTitle textColor="#7dc143" className="mb-3">
                            Sobre o curso
                        </SubTitle>
                        <p>O módulo “SÍFILIS: ASPECTOS CLÍNICOS E DIAGNÓSTICO DIFERENCIAL” tem como objetivo promover uma revisão e atualização dos profissionais de saúde acerca dos conceitos essenciais para o reconhecimento da sífilis e o estabelecimento da conduta adequada. Neste módulo, revisamos os conceitos básicos relacionados aos aspectos clínicos e ao diagnóstico diferencial da sífilis, assim como as suas diversas formas de apresentação clínica. O módulo contempla ainda as apresentações clínicas incomuns, com seus potenciais de gravidade e o diagnóstico diferencial com outras patologias com quadros clínicos semelhantes. A reemergência justifica a preocupação com todas as formas de apresentação da doença, portanto, a proposta é fornecer subsídios que embasam a conduta do profissional de saúde na promoção de uma atenção integral aos pacientes com sífilis.</p>
                        <SubTitle textColor="#7dc143" className="mb-3">
                            Objetivos
                        </SubTitle>
                        <strong>Objetivo Geral</strong>
                        <p>Promover a atualização dos profissionais de saúde acerca dos conceitos essenciais para o reconhecimento e tratamento precoce da sífilis, aspectos fundamentais ao controle da doença.</p>
                        <strong>Objetivos Específicos</strong>
                        <ul>
                            <li>
                                Conceituar a sífilis e descrever a sua classificação.
                            </li>
                            <li>
                                Distinguir as principais formas de apresentação da sífilis e seus diagnósticos diferenciais.
                            </li>
                            <li>
                                Reforçar aspectos anatomopatológicos das formas clínicas para melhor compreensão da doença.
                            </li>
                            <li>
                                Apresentar formas clínicas incomuns da sífilis que podem ser confundidas com outras patologias.
                            </li>
                        </ul>
                        <SubTitle textColor="#7dc143" className="mb-3">
                            Recursos educacionais
                        </SubTitle>
                        <p className="text-center">Serão utilizados textos no formato de PDF, vídeos, ilustrações, infográficos, dentre outros recursos.</p>
                        <SubTitle textColor="#7dc143" className="mb-3">
                            Créditos
                        </SubTitle>
                        <div className="d-flex justify-content-between flex-wrap gap-3">
                            <img src={LogoSedis} alt=""/>
                        </div>  
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <SubTitle textColor="#7dc143" className="mb-3">Comentários</SubTitle>
                        
                    </Col>
                </Row>
            </Container>
            
        </section>
    );
}