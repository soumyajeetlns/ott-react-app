import React, { Component }  from 'react';
import OwlCarousel from "react-owl-carousel";
import { Container, Row, Col } from 'reactstrap';
import {blockbusterAPI, IMAGEPATH, SLASH} from '../../utils/Constants';

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
        items: 6,
      },
      1200: {
        items: 6,
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

export default class Hits extends Component{
    constructor(props) {
        super(props);
        this.state = { blockbuster: [] }
          
    }
    async componentDidMount() {    
        await fetch(blockbusterAPI)
        .then((response)        =>  response.json())
        .then((blockbusters)    =>  this.setState({ blockbuster: blockbusters}))
        console.log(this.state.blockbuster);
    }
    render() {
      return (
            <div className="contain-area-home">
                <Container>
                    <Row>
                        <Col md="6">
                            <h1>Blockbuster Movies</h1>
                        </Col>
                        <Col md="6">
                            <div className="more">
                                <a href="#">More</a>
                            </div>
                        </Col>
                        <br clear="all"/>
                    </Row>                    
                </Container>
                <Container>
                    <Row>
                        <Col className="car-1" md="12">
                            <React.Suspense fallback={<div>Loading</div>}>
                                {this.state.blockbuster.length > 0 &&
                                    <OwlCarousel className="owl-carousel owl-theme" {...owlSettings} loop margin={10} nav>
                                        {this.state.blockbuster.map((val,inc) =>
                                            <a className="item" href="#" key={'owl'+inc}>
                                                <img src={IMAGEPATH+val.video_directory_path+SLASH+val.mobile_poster_image} alt={val.video_title} className="img-fluid" />
                                                <span>{val.video_title}</span>
                                            </a>
                                        )}                                
                                    </OwlCarousel>
                                }
                            </React.Suspense>
                        </Col>
                    </Row>
                </Container>
          </div>
      );
    }
  }