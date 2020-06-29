import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import ReactPlayer from 'react-player';
import VideoPlayer from 'react-video-js-player';
import Plyr from 'react-plyr';
import QierPlayer from 'qier-player';

    let quireProps = {
        src480p: 'https://dev.solutionsfinder.co.uk/ottdev/uploads/videos/piddly-si-baatein/Piddly-Si-Baatein-trailer-640x360.mp4',
        src720p: 'https://dev.solutionsfinder.co.uk/ottdev/uploads/videos/piddly-si-baatein/Piddly-Si-Baatein-426x240.mp4'
    }    

export default class Player extends Component{
    constructor(props){
        super(props);
        this.state  =   {
            movieTitle      :   'Pidly Si Baatein',        
        }
    }
    componentDidMount() {
        document.addEventListener('contextmenu', this._handleContextMenu);
    }
    _handleContextMenu = (event) => {
        event.preventDefault();
    }
    render(){
        return(
            <div className="contain-area-home">
                <br clear="all"/>
                <br clear="all"/>
                <br clear="all"/>
                <br clear="all"/>
                <br clear="all"/>
                <br clear="all"/>
                <Container className="player-container">
                    <Row>
                        <Col md="6">
                            <h1>{this.state.movieTitle}</h1>
                        </Col>
                        <Col md="6">
                        {this.state.video}
                        </Col>
                        <br clear="all"/>
                    </Row>
                </Container>
                <Container className="contextMenu">
                    <Row>
                        <Col className="car-1" lg="12" md="12" xs="12">                        
                         <QierPlayer 
                            {...quireProps}
                            showVideoQuality={true}
                            themeColor="#af40c9" 
                            width={1080}
                            height={728}
                            multifunction-setting={false}
                            settings={false}
                         />
                        </Col>
                    </Row>
                    <br clear="all"/>
                </Container>
            </div>
        )
    }
}