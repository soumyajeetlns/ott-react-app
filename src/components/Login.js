import React, { Component }  from 'react';
import LoginForm from './Login/LoginForm';
import Subscription from './home/Homesubscription';

export default class Login extends Component{
  render() {
    return (
        <div>
        <LoginForm/>
        <Subscription/>
        </div>
    );
  }
}