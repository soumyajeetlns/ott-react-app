import React, { Component }  from 'react';
import OwlCarousel from "react-owl-carousel";
import { Container, Row, Col } from 'reactstrap';
import {popularAPI, IMAGEPATH, SLASH} from '../../utils/Constants';

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
    autoplay: true,
    autoplaySpeed: 4000,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    nav: true,
    dots: true,
    navText:["<i className='fa fa-chevron-left'></i>", "<i className='fa fa-chevron-right'></i>"],
}

export default class Popular extends Component{
    constructor(props) {
        super(props);
        this.state = { popularurl: [] }
          
    }
    async componentDidMount() {    
        await fetch(popularAPI)
        .then((response)    =>  response.json())
        .then((popularurls) =>  this.setState({ popularurl: popularurls}))
        // console.log(this.state.popularurl);
    }
    render() {        
        return (
            <div className="contain-area-home">
                <Container>                
                    <Row>
                        <div className="line-home"></div>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col md="6">
                            <h1>Most Popular Movies</h1>
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
                            {this.state.popularurl.length > 0 &&
                                <OwlCarousel className="owl-carousel owl-theme" {...owlSettings} loop margin={10} nav>
                                    {this.state.popularurl.map((val,inc) =>
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