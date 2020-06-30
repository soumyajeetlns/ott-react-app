import React, { Component }  from 'react';

export default class Homesection2 extends Component{
  render() {
    return (
        <div className="contain-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>About Celebrity production</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mollis enim justo, vel placerat ante tristique non. Etiam non urna quis risus ullamcorper dignissim et sit amet lacus. Pellentesque elit velit, congue id ultricies quis, bibendum ut odio. Quisque dictum ornare maximus. Proin varius dolor in tellus suscipit,</p>
                        <div className="border-top"></div>
                        <h2>Watch Your Movie <br/> any time any where </h2>
                        <div className="middle-img">
						    <img src={require('../../assets/images/images1.png')} alt="middle-img" />
					    </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}