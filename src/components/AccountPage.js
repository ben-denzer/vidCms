import React from 'react';
import styled from 'styled-components';
import {
    PageHeading,
    PageTitle,
    PageContainer,
    ContentContainer
} from '../styles/share';

const AccountPage = ({user}) => {
    return (
        <PageContainer>
            <PageTitle>My Account</PageTitle>
            <ContentContainer>
                <InfoRow>
                    <InfoBold>Username: </InfoBold>
                    <InfoText>{user.username}</InfoText>
                </InfoRow>
            </ContentContainer>
        </PageContainer>
    );
};

const InfoRow = styled.div`
    display: flex;
`;

const InfoBold = styled.span`
    font-size: 18px;
    font-weight: bold;
`;

const InfoText = styled.span`
    font-size: 18px;
`;

export default AccountPage;