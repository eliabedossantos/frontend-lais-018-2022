import { Col } from "react-bootstrap";
import styled from "styled-components";
import { TotalPeople } from "../EnrolledPeople";
import { ButtonRounded } from "../layout/Buttons/ButtonRounded.styled";
import { Label, SubTitle } from "../layout/Texts/Texts";
import { Rating } from "../Rating";
import { TotalHour } from "../Workload";

const ImgCard = styled.img`
    width: 100%;
    height: 200px;
    border-radius: 20px;
`;

export function ItemTemplate(props){
    return(
        <Col md={6} lg={4}>
            <ImgCard src={props.sourceImg} />
            <SubTitle textAlign="start" className="my-2">
                {props.titleModule}
            </SubTitle>
            <Label textAlign="start" textColor="#7DC143" className="mb-2">
                {props.labelInstitution}
            </Label>
            <div className="d-flex justify-content-between mb-2">
                <TotalPeople enrolledPeople={props.totalPeople}/>
                <TotalHour workload={props.totalHour}/>
                <Rating rating={props.rating}/>
            </div>
            <Label textAlign="start">
                {props.labelDescription}
            </Label>
            <div className="d-flex justify-content-end">
                <ButtonRounded to={props.openModule} btncolor="#D16FFF" bgcolor="transparent" btnborder="none" btncolorhover="#d16FFF">Ver curso</ButtonRounded>
            </div>
        </Col>
    );
}