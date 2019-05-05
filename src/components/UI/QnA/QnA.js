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
                            <p>{this.props.question.question}</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6} className={classes.Answer}><p>A &nbsp;&nbsp;{this.props.question['A']}</p></Col>
                    <Col xs={12} md={6} className={classes.Answer}><p>B &nbsp;&nbsp;{this.props.question['B']}</p></Col>
                </Row>
                <Row>
                    <Col xs={12} md={6} className={classes.Answer}><p>C &nbsp;&nbsp;{this.props.question['C']}</p></Col>
                    <Col xs={12} md={6} className={classes.Answer}><p>D &nbsp;&nbsp;{this.props.question['D']} </p></Col>
                </Row>
            </Container>
        );
    }
}

export default QnA;