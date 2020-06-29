import React, { Component }  from 'react';
import Banner from './home/Banner';
import Player from './Player/Player';
import Promotion from './dashboard/Promotion';
import Trending from './dashboard/Trendingseries';
import Freeepisodes from './dashboard/Freeepisodes';

export default class Dashboard extends Component{
  render() {
    return (
        <div>
        <Player/>
        <Promotion/>
        <Trending/>
        <Freeepisodes/>
        </div>
    );
  }
}