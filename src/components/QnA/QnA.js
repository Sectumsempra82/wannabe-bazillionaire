import React, { Component } from 'react';
import classNames from 'classnames/bind';
import classes from './QnA.module.css';
import { Container, Row, Col } from 'react-bootstrap';

let cx = classNames.bind(classes);

class QnA extends Component {

    constructor(props) {
        super(props);
        this.state = {
            answer: null
        }
    }

    handleAnswer = (ans) => {

        if (this.state.answer === null) {
            this.setState({
                answer: ans
            });
            setTimeout(() => {
                this.setState({
                    answer: null
                });
                this.props.answer(ans);
            }, 3000);
            
        }
    }

    render() {

        let classA = cx({
            Answer: true,
            Correct: ((this.state.answer === 'A') && (this.state.answer === this.props.question.answer)),
            Wrong: ((this.state.answer === 'A') && (this.state.answer !== this.props.question.answer))
        })
        let classB = cx({
            Answer: true,
            Correct: ((this.state.answer === 'B') && (this.state.answer === this.props.question.answer)),
            Wrong: ((this.state.answer === 'B') && (this.state.answer !== this.props.question.answer))
        })
        let classC = cx({
            Answer: true,
            Correct: ((this.state.answer === 'C') && (this.state.answer === this.props.question.answer)),
            Wrong: ((this.state.answer === 'C') && (this.state.answer !== this.props.question.answer))
        })
        let classD = cx({
            Answer: true,
            Correct: ((this.state.answer === 'D') && (this.state.answer === this.props.question.answer)),
            Wrong: ((this.state.answer === 'D') && (this.state.answer !== this.props.question.answer))
        })


        return (
            <div className={classes.QnA}>
                <Container>
    
                    <Row>
                        <Col>
                            <div className={classes.Question}>
                                <p>{this.props.question.question}</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={6} className={classA} onClick={() => this.handleAnswer('A')}><p>A &nbsp;&nbsp;{this.props.question['A']}</p></Col>
                        <Col xs={12} md={6} className={classB} onClick={() => this.handleAnswer('B')}><p>B &nbsp;&nbsp;{this.props.question['B']}</p></Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={6} className={classC} onClick={() => this.handleAnswer('C')}><p>C &nbsp;&nbsp;{this.props.question['C']}</p></Col>
                        <Col xs={12} md={6} className={classD} onClick={() => this.handleAnswer('D')}><p>D &nbsp;&nbsp;{this.props.question['D']} </p></Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default QnA;