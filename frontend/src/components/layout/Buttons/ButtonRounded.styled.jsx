import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ButtonRounded = styled(Link)`
    background-color: ${props => props.bgColor ? props.bgColor : '#D16FFF'};
    color: ${props => props.BtnColor ? props.BtnColor : '#fff'};
    width: ${props => props.BtnWidth ? props.BtnWidth : '8em'};
    height: ${props => props.BtnHeight ? props.BtnHeight : '2em'};
    border: 1px solid #D16FFF;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.1rem;
    text-decoration: none;
    font-weight: 500;
    
    &:hover {
        color: ${props => props.BtnColor ? props.BtnColor : '#fff'};
        opacity: .8;
    }
    @media (max-width: 768px) {
        width: ${props => props.BtnWidthMob ? props.BtnWidthMob : '100%'};
    }
`;
