import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import classes from './Lifelines.module.css';
import phoneCall from '../../assets/img/phoneCall.png';
import fiftyfifty from '../../assets/img/5050.png';
import askPublic from '../../assets/img/askPublic.png';
import phoneCallNo from '../../assets/img/phoneCallNo.png';
import fiftyfiftyNo from '../../assets/img/5050No.png';
import askPublicNo from '../../assets/img/askPublicNo.png';

class Lifelines extends Component {
    render() {
        return (
            <div className={classes.Lifelines}>
                <Container>

                    <Row className={classes.Row} >
                        <Col xs={4} md={4} 
                        className={classes.PhoneCall} 
                        onClick={this.props.lifelines.phoneCall ? () => this.props.useHelp('PhoneCall') : {}}>
                            <img src={this.props.lifelines.phoneCall ? phoneCall : phoneCallNo} alt='Phone Call' />
                        </Col>
                        <Col xs={4} md={4} 
                        className={classes.Fiftyfifty} 
                        onClick={this.props.lifelines.fiftyfifty ? () => this.props.useHelp('Fiftyfifty') : {}}>
                            <img src={this.props.lifelines.fiftyfifty ? fiftyfifty : fiftyfiftyNo} alt='5050' />
                        </Col>
                        <Col xs={4} md={4} 
                        className={classes.AskPublic} 
                        onClick={this.props.lifelines.askPublic ? () => this.props.useHelp('AskPublic') : {}}>
                            <img src={this.props.lifelines.askPublic ? askPublic : askPublicNo} alt='Ask the public' />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Lifelines;