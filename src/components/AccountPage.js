import React        from 'react';
import {Link}       from 'react-router-dom';
import styled       from 'styled-components';
import parseDate    from '../logic/parseDate';
import {
    PageTitle,
    PageContainer,
    ContentContainer
} from '../styles/share';

const AccountPage = ({user}) => {
    return (
        <PageContainer>
            <PageTitle>My Account</PageTitle>
            <ContentContainer>
                <StyledLink 
                    type="button"
                    className="btn btn-info"
                    to="/account/changePw"
                >
                    Change Password
                </StyledLink>
                <InfoRow>
                    <InfoBold>Username: </InfoBold>
                    <InfoText>{user.username}</InfoText>
                </InfoRow>
                <InfoRow>
                    <InfoBold>Email: </InfoBold>
                    <InfoText>{user.email}</InfoText>
                </InfoRow>
                <InfoRow>
                    <InfoBold>Member Since: </InfoBold>
                    <InfoText>{parseDate(user.signupDate)}</InfoText>
                </InfoRow>
                <InfoRow>
                    <InfoBold>Premium Member: </InfoBold>
                    <InfoText>{user.premium ? `since ${parseDate(user.premiumSignupDate)}` : 'No'}</InfoText>
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
    margin-right: 10px;
`;

const InfoText = styled.span`
    font-size: 18px;
`;

const StyledLink = styled(Link)`
    max-width: 150px;
`;

export default AccountPage;