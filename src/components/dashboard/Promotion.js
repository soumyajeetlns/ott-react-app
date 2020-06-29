import React, { Component }  from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

export default class Promotion extends Component{
    render() {
      return (
        <div className="add-area">
            <Container>
                <Row>
                    <Col md="4" sm="4" className="pic-main">
                        <img src={require('../../assets/images/big-pic.jpg')} alt="pic"/>
                    </Col>
                    <Col>
                        <h3>Watch now</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy…</p>
                        <div className="watch-btn">
                            <Link to="/play">Watch Now</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        );
    }
  }