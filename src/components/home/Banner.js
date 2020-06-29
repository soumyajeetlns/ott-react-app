import React, { Component }  from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {bannerAPI, IMAGEPATH, SLASH} from '../../utils/Constants';

export default class Banner extends Component{
  constructor(props) {
    super(props);
    this.state = { bannerurl: [] }
      
  }
  async componentDidMount() {    
    await fetch(bannerAPI)
    .then((response) => response.json())
    .then((bannerurls) => this.setState({ bannerurl: bannerurls}))
    // console.log(this.state.bannerurl);
  }
  render() {
    return (
      <React.Suspense fallback={<div>Loading</div>}> 
        <Carousel>          
          {this.state.bannerurl.map((val,inc) =>
            <Carousel.Item key={'Carousel'+inc}>
                <img className="d-block w-100" src={IMAGEPATH+val.video_directory_path+SLASH+val.video_poster_image} alt="First slide" />
                <Carousel.Caption>
                {/* <p>{IMAGEPATH+val.video_directory_path+SLASH+val.video_poster_image}</p> */}
                <h3>{val.video_title}</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
          )}
            {/* <Carousel.Item>
              <img className="d-block w-101" src={require('../../assets/images/banner-home.jpg')} alt="Third slide" />
              <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
              </Carousel.Item> */}
        </Carousel>
      </React.Suspense>
    );
  }
}