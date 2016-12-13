import React from 'react';
import slide1 from '../../img/slide1.jpg';
import slide2 from '../../img/slide2.jpg';
import slide3 from '../../img/slide3.jpg';

const Carousel = () => {
    return (
        <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner" role="listbox">
                <div className="item active">
                    <img src={slide2} role="presentation" />
                    <div className="carousel-caption">
                        <h2 className="caption-heading">e&middot;qua&middot;nim&middot;i&middot;ty</h2>
                        <h4 className="caption-body">mental calmness, composure, and evenness of temper, especially in a difficult situation</h4>
                    </div>
                </div>
                <div className="item">
                    <img src={slide3} role="presentation" />
                    <div className="carousel-caption">
                        <h2 className="caption-heading">e&middot;qua&middot;nim&middot;i&middot;ty</h2>
                        <h4 className="caption-body">mental calmness, composure, and evenness of temper, especially in a difficult situation</h4>
                    </div>
                </div>
                <div className="item">
                    <img src={slide1} role="presentation" />
                    <div className="carousel-caption">
                        <h2 className="caption-heading">e&middot;qua&middot;nim&middot;i&middot;ty</h2>
                        <h4 className="caption-body">mental calmness, composure, and evenness of temper, especially in a difficult situation</h4>
                    </div>
                </div>
            </div>

            <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
};

export default Carousel;