import React, { Component }  from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class Footertop extends Component{
  render() {
    return (
        <div className="footer-area">
            <footer>
                <Container>
                    <Row>
                        <Col md="3" sm="5" className="footer-logo">
                            <img src={require('../assets/images/logo.png')} alt="logo" />
                        </Col>
                        <Col md="4" sm="7">
                            <div className="footer-link">
                                <ul>
                                    <li><a href="#">Terms of Use</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Feedback</a></li>
                                    <li><a href="#">FAQ</a></li>
                                </ul>
                            </div>
                        </Col>
                        <Col md="2" sm="6" className="social-area">
                            <p className="connect">Connect With Us</p>
                            <div className="social-icon">
                                <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                            </div>
                        </Col>
                        <Col md="3" sm="6" className="partner-logo">
                            <a href="#"><img src={require('../assets/images/ios.png')} alt="ios" /></a>
                            <a href="#"><img src={require('../assets/images/and.png')} alt="google-play" /></a>
                        </Col>
                    </Row>
                </Container>
                <div className="footer-bttom">
                    <Container>
                        <Row>
                            <Col md="12">
                                <p>&copy; 2020 Celebrity Production. All Rights Reserved</p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </footer>
        </div>
    );
  }
}
