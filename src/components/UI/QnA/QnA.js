import React, { Component } from 'react';
import classes from './QnA.module.css';
import { Container, Row, Col } from 'react-bootstrap';

class QnA extends Component {
    render() {
        return (
            <Container className={classes.QnA}>

                <Row>
                    <Col>
                        <div className={classes.Question}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque accumsan molestie tortor, vitae porttitor erat sollicitudin ac. Cras mi augue, vestibulum in ultricies sed, lacinia at ipsum?</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6} className={classes.Answer}><p>A &nbsp;&nbsp;Vivamus mattis mi vel eros consectetur</p></Col>
                    <Col xs={12} md={6} className={classes.Answer}><p>B &nbsp;&nbsp;facilisis pulvinar turpis condimentum</p></Col>
                </Row>
                <Row>
                    <Col xs={12} md={6} className={classes.Answer}><p>C &nbsp;&nbsp;eu sodales nisl, ac porttitor nisl </p></Col>
                    <Col xs={12} md={6} className={classes.Answer}><p>D &nbsp;&nbsp;Nulla id egestas justo, ac maximus nunc. </p></Col>
                </Row>
            </Container>
        );
    }
}

export default QnA;