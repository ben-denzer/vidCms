import styled from 'styled-components';

export const ContentContainer = styled.div`
    width: 75%;
    padding: 15px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
`;

export const InteriorPage = styled.div`
    width: 100%;
    min-height: 80vh;
`;

export const PageContainer = styled.div`
    width: 95%;
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    flex-flow: row wrap;
    font-family: Helvitica, Arial, sans-serif;

    @media (max-width: 1000px) {
        width: 98%;
    }
`;

export const PageHeading = styled.div`
    margin-bottom: 15px;
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
