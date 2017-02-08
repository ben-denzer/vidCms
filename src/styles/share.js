import styled from 'styled-components';
//import pageBg from '../img/tree_bg.png';

export const ContentContainer = styled.div`
    width: 90%;
    max-width: 1400px;
    margin: 0 auto;

    @media (max-width: 1000px) {
        width: 98%;
    }
`;

export const InteriorPage = styled.div`
    width: 100%;
    min-height: 80vh;
`;

export const PageHeadline = styled.h2`
    font-size: 32px;
    Helvetica, Arial, sans-serif;
    text-align: center;
    margin-top: 0;
`;

export const PageTitle = styled.h1`
    font-size: 42px;
    font-family: Helvetica, Arial, sans-serif;
    font-weight: bold;
    text-align: center;
    margin-bottom: 0;
`;
