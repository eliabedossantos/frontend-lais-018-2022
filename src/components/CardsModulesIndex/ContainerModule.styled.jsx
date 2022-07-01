import styled from "styled-components";

export const TitleContainer = styled.div`
    width: 30%;

    @media (max-width: 768px) {
        width: 100%;
    }
`;
export const CardModuleIndex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    width: 100%;
    max-width: 100%;
    min-height: 160px;
    background-color: #F5F5F7;
    padding: 1rem;
    border-radius: 20px;
    flex-wrap: wrap;


    img {
        width: 120px;
        height: 120px;
        object-fit: cover;
        border-radius: 20px
    }

    @media (max-width: 768px) {
        justify-content: center;

        img{
            width: 100%;
            height: auto;
        }
    }
`;

