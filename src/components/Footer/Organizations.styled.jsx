import styled from "styled-components";

export const FooterContainer = styled.div`
    width: 100%;
    max-width: 100%;
    padding: 4rem 0 2rem 0;
    background-color: ${props => props.backgroundColor ? props.backgroundColor : "#2f2e41"};
`;