import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ButtonRounded = styled(Link)`
    background-color: ${props => props.bgcolor ? props.bgcolor : '#D16FFF'};
    color: ${props => props.btncolor ? props.btncolor : '#fff'};
    width: ${props => props.btnwidth ? props.btnwidth : '8em'};
    height: ${props => props.btnheight ? props.btnheight : '2em'};
    border: 1px solid #D16FFF;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.1rem;
    text-decoration: none;
    font-weight: 500;
    
    &:hover {
        color: ${props => props.btncolorhover ? props.btncolorhover : '#fff'};
        opacity: .8;
    }
    @media (max-width: 768px) {
        width: ${props => props.btnwidthmob ? props.btnwidthmob : '100%'};
    }
`;
