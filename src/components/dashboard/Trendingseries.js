import React, { Component }  from 'react';
import OwlCarousel from "react-owl-carousel";
import { Container, Row, Col  } from 'reactstrap';

let owlSettings = {
    responsive: {
        0:{
            items:2,
        },
        600:{
            items:3,
            nav:false
        },
        1000: {
            items: 3,
        },
        1200: {
            items: 3,
        },
    },
    loop: true,
    lazyLoad: true,
    autoplay: false,
    autoplaySpeed: 4000,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    nav: true,
    dots: true,
    navText:["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
}

export default class Trendingseries extends Component{
    render() {
      return (
            <div className="stay-area">
                <Container>
                    <Row>
                        <Col md="6" xs="6">
                            <h4>Trending Series</h4>
                        </Col>
                        <Col md="6" xs="6">
                            <div className="more">
                                <a href="#">More</a>
                            </div>
                        </Col>
                    </Row>
                    <br clear="all"/>
                </Container>
                <Container>
                    <Row>
                        <Col className="car-1" md="12">
                            <OwlCarousel className="owl-carousel owl-theme" {...owlSettings} loop margin={10} nav>
                                <a className="item">
                                    <img src={require('../../assets/images/mov11.jpg')} alt="mov11" className="img-fluid" />
                                    <span>Byomkesh Gowtro</span>
                                </a>
                                <a className="item">
                                    <img src={require('../../assets/images/mov12.jpg')} alt="mov12" className="img-fluid" />
                                    <span>Bornoporichoy</span>
                                </a>
                                <a className="item">
                                    <img src={require('../../assets/images/mov13.jpg')} alt="mov13" className="img-fluid" />
                                    <span>Sesh Sangbad</span>
                                </a>
                                <a className="item">
                                    <img src={require('../../assets/images/mov12.jpg')} alt="mov12" className="img-fluid" />
                                    <span>Parineeta</span>
                                </a>                                
                            </OwlCarousel>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}