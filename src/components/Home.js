import React, { Component }  from 'react';
import Banner from './home/Banner';
import Homesection2 from './home/Homesection2';
import Subscription from './home/Homesubscription';

export default class Home extends Component{
  render() {
    return (
        <div>
        <Banner/>
        <Homesection2/>
        <Subscription/>
        </div>
    );
  }
}
