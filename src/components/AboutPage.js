import React    from 'react';
import Sidebar  from './shared/Sidebar';
import {Helmet} from 'react-helmet';
import {
    PageTitle,
    PageContainer,
    ContentContainer
} from '../styles/share';

const AboutPage = (props) => {
    return (
        <PageContainer className="pageContainer">
            <Helmet>
                <title>{`About Me | Ben Denzer`}</title>
                <meta name="description" content="If you'd like to contact me, follow the links below" />
            </Helmet>
            <ContentContainer className="contentContainer">
                <PageTitle className="pageTitle">About</PageTitle>
                <p>My name is Ben Denzer and I'm a full stack web developer in the Las Vegas Area. Lately, most of my time has been spent making Single Page Applications with React and Redux on the front end and Node.js, Express, and MySql on the backend. I've also been working with Elm Lang, Electron, Angular, and Vanilla JS, and I do dev-ops as needed for my servers.</p>
                <p>To see my recent work you can go to <a href="https://bdenzer.com">https://bdenzer.com</a> or <a href="https://github.com/ben-denzer">https://github.com/ben-denzer</a>. And you can contact me at <a href="mailto:denzer.ben@gmail.com">denzer.ben@gmail.com</a>.</p>
            </ContentContainer>
            <Sidebar noImage noAd />
        </PageContainer>
    );
};

export default AboutPage;
