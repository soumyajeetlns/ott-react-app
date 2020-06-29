import React, { Component }  from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

export default class Headerlogin extends Component{
  render() {
    return (
        <header>
            <div className="header-top">
                <Container>
                    <Row>
                        <Col md="9" sm="6" className="logo">
                            <Link to="/">
                                <img src={require('../../assets/images/logo.png')} alt="logo" className="img-responsive" />
                            </Link>
                        </Col>
                        <Col md="3" sm="6">
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
