import React, { Component }  from 'react';
import Headerlogin from './header/Headerlogin';
import Headerloggedin from './header/Headerloggedin';

export default class Header extends Component{
  render() {
    return (
        <div className="header-bg">
            <Headerlogin />
        </div>
    );
  }
}