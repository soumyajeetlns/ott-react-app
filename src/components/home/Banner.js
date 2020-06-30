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
                  <h3>{val.video_title}</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
          )}
        </Carousel>
      </React.Suspense>
    );
  }
}