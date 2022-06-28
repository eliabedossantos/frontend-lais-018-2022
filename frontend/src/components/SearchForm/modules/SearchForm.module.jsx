import styled from 'styled-components';

export const SearchBox = styled.div`
    display: flex;
    background: rgba(209, 111, 255, 0.1);
    border-radius: 20px;
    padding: .1em;
    width: 100%;
    height: 100%;
    overflow: hidden;
    flex-wrap: nowrap;
`;
export const SearchInput = styled.input`
    background-color: transparent;
    border: none;
    height: 100%;

    &:focus{
        outline: none;
        border: none;
    }
`;

export const SearchBtn = styled.button`
    border: none;
    background-color: transparent;
    height: fit-content;
    width: fit-content;
`;