import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Video from './components/Playvideo';
// import Tutorial from './components/Tutorial';
// import Blog from './components/Blog';
// import Blogdetails from './components/Blogdetails';
// import Contact from './components/Contact';
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
            {/* <Route path="/tutorial" component={Tutorial} />
            <Route path="/blog" component={Blog} />
            <Route path="/blogdetails" component={Blogdetails} />
            <Route path="/contact" component={Contact} /> */}
          </Switch>
        <Footer/>
    </div>
  );
}

export default Router;
