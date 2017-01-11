import React from 'react';

const PortfolioPage = (props) => {
    return (
        <div id="portfolio_container" className="container-fluid topContainer">
            <div className="page-header">
                <h1>Ben Denzer</h1>
                <h2 id="showBackground">Full Stack Developer - Henderson, NV</h2>
                <h2><a href="mailto:denzer.ben@gmail.com">denzer.ben@gmail.com</a></h2>
            </div>
            <div className="blackBox">
                <div className="row">
                    <div className="col-xs-12 col-sm-8">
                        <h3 className="topHeading" id="background">Background</h3>
                        <p>My name is Ben and I'm a React / Node develper in the Las Vegas Area. I have 2 years experience with
                            React (with and without Redux) and I have been doing JavaScript/HTML/CSS and Linux Server administration
                            for over 4 years. I also have experience with Webpack, Babel, Browserify, EJS, Jade / Pug, and Django.</p>

                        <p id="showSkills">My best accomplishment so far is Official-Typing-Test.com - it gets about 600,000 page views per month
                            with around 70% of that traffic coming from Google. I programmed the app, designed the site, set
                            up the server, then did the SEO and link building.</p>

                        <p>I'm open to working with any language / technology, but my main focus for the past couple of years has
                            been Full Stack JavaScript with React on the front-end and Express / MySQL on the back end.</p>
                    </div>
                    <div className="col-xs-12 col-sm-4 imgHolder">
                        <img className="img-responsive centered" src="/img/portfolio/profileedited.jpg" alt="photo" />
                    </div>
                </div>
                <div className="row">
                    <h3>Skills</h3>
                    <div id="skills_row">
                        <div className="skills-list-box">
                            <ul>
                                <li>JavaScript</li>
                                <li>es6 / 7</li>
                                <li>Node / Express</li>
                                <li>React</li>
                                <li>Redux</li>
                                <li>jQuery</li>
                                <li>Babel</li>
                                <li>Git / Github</li>
                            </ul>
                        </div>
                        <div className="skills-list-box">
                            <ul>
                                <li>Responsive Design</li>
                                <li>Flexbox</li>
                                <li>Bootstrap</li>
                                <li>SASS</li>
                                <li>LESS</li>
                                <li>Webpack</li>
                                <li>Browserify</li>
                                <li>Gulp</li>
                            </ul>
                        </div>
                        <div className="skills-list-box">
                            <ul>
                                <li>Django</li>
                                <li>LAMP Stack</li>
                                <li>PHP</li>
                                <li>Linux Server</li>
                                <li>Apache Web Server</li>
                                <li>MySQL</li>
                                <li>NGINX Web Server</li>
                                <li>Heroku</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <h3>Recent Work</h3>
                <div id="recent_work">
                    <div className="project-container">
                        <h4>List Manager</h4>
                        <a href="http://nodereact.com" target="_blank">
                            <img
                                className="img-responsive thumb"
                                src="/img/portfolio/listmanagerthumb.png"
                                alt="Thumbnail of my List Manager App"
                            />
                        </a>
                        <p className="project-tools">React, Redux, Node / Express, MySQL, Passport, JSON Web Tokens</p>
                        <p className="project-headline">Manage Multiple ToDo Lists</p>
                    </div>
                    <div className="project-container">
                        <h4>Typing Test</h4>
                        <a href="http://official-typing-test.com/test/1test.html" target="_blank">
                            <img
                                className="img-responsive thumb"
                                src="/img/portfolio/typingthumb.png"
                                alt="Thumbnail of my typing test" />
                            </a>
                        <p className="project-tools">jQuery, HTML, and CSS</p>
                        <p className="project-headline">
                            Popular typing test with millions of user sessions and no errors reported for more than 18 months
                        </p>
                    </div>
                    <div className="project-container">
                        <h4>Video Poker</h4>
                        <a href="http://bdenzer.com/projects/videopoker" target="_blank">
                            <img
                                className="img-responsive thumb"
                                src="/img/portfolio/videopokerthumb.png"
                                alt="Thumbnail of my video poker game"
                            />
                        </a>
                        <p className="project-tools">Vanilla JavaScript, HTML, and CSS</p>
                        <p className="project-headline">Jacks Or Better Video Poker - This app is production-ready, I just haven't tried to monetize it yet</p>
                    </div>
                    <div className="project-container">
                        <h4>Leaderboard</h4>
                        <a href="http://bdenzer.com/projects/fcc/react/leaderboard" target="_blank">
                            <img
                                className="img-responsive thumb"
                                src="/img/portfolio/leaderboardthumb.png"
                                alt="Thumbnail of my leaderboard"
                            />
                        </a>
                        <p className="project-tools">React, SCSS</p>
                        <p className="project-headline">Uses FCC's API To Show Most Active Users - Sortable By Recent Or All-Time Points</p>
                    </div>
                    <div className="project-container">
                        <h4>Flashcards</h4>
                        <a href="http://bdenzer.com/projects/matching" target="_blank">
                            <img
                                className="img-responsive thumb"
                                src="/img/portfolio/flashcardsthumb.png"
                                alt="Thumbnail of my flashcards game"
                            />
                        </a>
                        <p className="project-tools">React, Redux, Node / Express, MySQL, Passport, JWTs</p>
                        <p className="project-headline">Sight Words Practice For Kids Using The Browser's Voice Recognition API</p>
                    </div>
                    <div className="project-container">
                        <h4>Memory Game</h4>
                        <a href="http://bdenzer.com/projects/matching" target="_blank">
                            <img
                                className="img-responsive thumb"
                                src="/img/portfolio/memorythumb.png"
                                alt="Thumbnail of my card matching game"
                            />
                        </a>
                        <p className="project-tools">JQuery, HTML, SCSS</p>
                        <p className="project-headline">An Old Project Of Mine - I'm Going To Re-Write This In React And Bundle It With My Flashcards Game</p>
                    </div>
                </div>

                <div className="row">
                    <h3 id="production">Websites in Production</h3>
                </div>
                <div className="row centered">
                    <div className="col-xs-12 col-md-6">
                        <h4>Official-Typing-Test.com</h4>
                        <a href="http://official-typing-test.com" target="_blank">
                            <img
                                className="img-responsive thumb"
                                src="/img/portfolio/officialthumb.png"
                                alt="Official Typing Test.com Website"
                            />
                        </a>
                        <p>This was my first real project, and it was well worth the effort. The site ranks #1 in google for 'data
                            entry test', '3 minute typing test' and a few other less used terms. It is also in the top 5 for
                            hundreds of different queries.</p>
                    </div>
                    <div className="col-xs-12 col-md-6">
                        <h4>Learn10Key.com</h4>
                        <a href="http://learn10key.com" target="_blank">
                            <img
                                className="img-responsive thumb"
                                src="/img/portfolio/tenkeythumb.png"
                                alt="Learn 10 Key Website"
                            />
                        </a>
                        <p>This is kind of piggybacking on the success of my original typing test site. I made this site in a sub-niche
                            of the typing test space and I updated the UI.</p>
                    </div>
                </div>

                <div className="row">
                    <h3 id="contact">Contact</h3>
                </div>
                <div className="row centered">
                    <div className="col-xs-12 col-md-4">
                        <a href="mailto:denzer.ben@gmail.com" className="btn btn-block btn-success font20 contactButton"><i className="fa fa-inbox"></i> Email<div className="small">denzer.ben@gmail.com</div></a>
                    </div>
                    <div className="col-xs-12 col-md-4">
                        <a href="http://linkedin.com/in/bdenzer" target="_blank" className="btn btn-block btn-success font20 contactButton"><i className="fa fa-linkedin"></i> LinkedIn<div className="small">linkedin.com/in/bdenzer</div></a>
                    </div>
                    <div className="col-xs-12 col-md-4">
                        <a href="http://github.com/ben-denzer" target="_blank" className="btn btn-block btn-success font20 contactButton"><i className="fa fa-github"></i> Github<div className="small">github.com/ben-denzer</div></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioPage;