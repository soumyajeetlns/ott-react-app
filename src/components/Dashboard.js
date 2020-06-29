import React, { Component }  from 'react';
import Banner from './home/Banner';
import Popular from './dashboard/Popular';
import Blockbuster from './dashboard/Hits';
import Promotion from './dashboard/Promotion';
import Trending from './dashboard/Trendingseries';
import Freeepisodes from './dashboard/Freeepisodes';

export default class Dashboard extends Component{
  render() {
    return (
        <div>
        <Banner/>
        <Popular/>
        <Blockbuster/>
        <Promotion/>
        <Trending/>
        <Freeepisodes/>
        </div>
    );
  }
}