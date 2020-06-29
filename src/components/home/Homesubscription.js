import React, { Component }  from 'react';
import { Link } from 'react-router-dom';

export default class Homesubscription extends Component{
  render() {
    return (
        <div className="stay-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h3>Stay tuned with the <br/>  latest updates !</h3>
                        <div className="join-now">
                            <Link to="/dashboard">Join Now</Link>
                        </div>
                    </div>            
                </div>            
            </div>
        </div> 
    );
  }
}