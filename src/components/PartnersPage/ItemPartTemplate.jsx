import { Col } from "react-bootstrap";
import styled from "styled-components";
import { Label } from "../layout/Texts/Texts";

const Divider = styled.div`
    width: 100%;
    height: 2px;
    background-color: #7DC143;
    margin: .6rem 0;
`;

export function PartnerTemplate(props){
    return(
        <Col md={4}>
            <img style={{maxHeight:'350px', width: '100%', maxWidth: '100%'}} src={props.sourceImg} />
            <Divider />
            <Label className="mb-3"><strong>{props.orgName}</strong></Label>
        </Col>
    );
}