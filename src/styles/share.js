import styled from 'styled-components';

export const ContentContainer = styled.div`
    width: 75%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
`;

export const InteriorPage = styled.div`
    width: 100%;
    min-height: 80vh;
`;

export const PageContainer = styled.div`
    width: 90%;
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    flex-flow: row wrap;
    font-family: Helvitica, Arial, sans-serif;

    @media (max-width: 1000px) {
        width: 98%;
    }
`;

export const PageHeadline = styled.h2`
    font-size: 24px;
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    margin-top: 0;
`;

export const PageTitle = styled.h1`
    width: 100%;
    font-size: 30px;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    margin-bottom: 0;
    text-align: center;
`;

export const SectionHeader = styled.h2`
    font-family: 'Montserrat', sans-serif;
    font-size: 22px;
    margin-left: 40px;
`;
