import React, { Component }  from 'react';
import RegisterForm from './Login/Registerform';
import Subscription from './home/Homesubscription';

export default class Register extends Component{
  render() {
    return (
        <div>
        <RegisterForm/>
        <Subscription/>
        </div>
    );
  }
}