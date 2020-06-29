import React, { Component }  from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Nav } from 'reactstrap';

export default class Headerlogin extends Component{
  render() {
    return (
        <header>
            <div className="header-top">
                <Container>
                    <Row>
                        <Col md="3" sm="4" className="logo">
                            <Link to="/">
                                <img src={require('../../assets/images/logo.png')} alt="logo" className="img-responsive" />
                            </Link>
                        </Col>
                        <Col md="5" sm="8" className="nav-css">
                            <Nav className="navbar navbar-default">
                                <div className="navbar-header">
                                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                        <span className="sr-only">Toggle navigation</span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>
                                </div>
                                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                    <ul className="nav navbar-nav">
                                        <li className="active">
                                            <a href="#">Home</a>
                                        </li>
                                        <li>
                                            <a href="#">Shows</a>
                                        </li>
                                        <li>
                                            <a href="#">Movie</a>
                                        </li>
                                        <li>
                                            <a href="#">Plan</a>
                                        </li>
                                        <li>
                                            <a href="#">Free</a>
                                        </li>
                                    </ul>
                                </div>
                            </Nav>                                
                        </Col>
                        <Col md="4" sm="6">
                            <div className="sign-in">
                                <Link to="/login">Sign in</Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </header>
    );
  }
}
