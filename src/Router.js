import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Video from './components/Playvideo';
import {Switch, Route} from 'react-router-dom';

function Router() {
  return (
    <div>
        <Header/>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/play" component={Video} />
          </Switch>
        <Footer/>
    </div>
  );
}

export default Router;
