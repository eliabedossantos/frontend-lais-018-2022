import styled from "styled-components";

export const TitleGreen = styled.h1`
    color: #7DC143;
    font-size: ${props => props.fontSize ? props.fontSize : "2.5rem"};
    text-align: ${props => props.textAlign ? props.textAlign : "center"};
`;

export const SubTitle = styled.h2`
    font-size: ${props => props.fontSize ? props.fontSize : "1.5rem"};
    text-align: ${props => props.textAlign ? props.textAlign : "center"};
    color: #2F2E41;
`;

export const Label = styled.label`
    font-size: ${props => props.fontSize ? props.fontSize : ".8rem"};
    color: #2F2E41;
`;