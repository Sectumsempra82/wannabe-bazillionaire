import React, { Component } from 'react';
import classNames from 'classnames/bind';
import classes from './QnA.module.css';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

/*Useful to dynamically set classes */
let cx = classNames.bind(classes);

class QnA extends Component {
    /*State management was necessary for this component */
    constructor(props) {
        super(props);
        this.state = {
            answer: null
        }
    }
    /*handleAnswer: triggers a reaction to the answer given by the user in both this component and the parent component*/
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
    /*Setting the dynamic classes*/
    render() {

        let classA = cx({
            Answer: true,
            Correct: ((this.state.answer === 'A') && (this.state.answer === this.props.question.answer)),
            Wrong: ((this.state.answer === 'A') && (this.state.answer !== this.props.question.answer)),
            Disabled: this.props.disabled.includes('A'),
            Suggested: this.props.suggested === 'A'
        })
        let classB = cx({
            Answer: true,
            Correct: ((this.state.answer === 'B') && (this.state.answer === this.props.question.answer)),
            Wrong: ((this.state.answer === 'B') && (this.state.answer !== this.props.question.answer)),
            Disabled: this.props.disabled.includes('B'),
            Suggested: this.props.suggested === 'B'
        })
        let classC = cx({
            Answer: true,
            Correct: ((this.state.answer === 'C') && (this.state.answer === this.props.question.answer)),
            Wrong: ((this.state.answer === 'C') && (this.state.answer !== this.props.question.answer)),
            Disabled: this.props.disabled.includes('C'),
            Suggested: this.props.suggested === 'C'
        })
        let classD = cx({
            Answer: true,
            Correct: ((this.state.answer === 'D') && (this.state.answer === this.props.question.answer)),
            Wrong: ((this.state.answer === 'D') && (this.state.answer !== this.props.question.answer)),
            Disabled: this.props.disabled.includes('D'),
            Suggested: this.props.suggested === 'D'
        })

        /*Rendering the current question and answers */
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
                        <Col xs={12} md={6} className={classA} id='ansA' onClick={!this.props.disabled.includes('A') ? () => this.handleAnswer('A') : {}}><p>A &nbsp;&nbsp;{this.props.question['A']}</p></Col>
                        <Col xs={12} md={6} className={classB} id='ansB' onClick={!this.props.disabled.includes('B') ? () => this.handleAnswer('B') : {}}><p>B &nbsp;&nbsp;{this.props.question['B']}</p></Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={6} className={classC} id='ansC' onClick={!this.props.disabled.includes('C') ? () => this.handleAnswer('C') : {}}><p>C &nbsp;&nbsp;{this.props.question['C']}</p></Col>
                        <Col xs={12} md={6} className={classD} id='ansD' onClick={!this.props.disabled.includes('D') ? () => this.handleAnswer('D') : {}}><p>D &nbsp;&nbsp;{this.props.question['D']} </p></Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

QnA.propTypes = {
    //object: current question, possible answers and correct answer
    question: PropTypes.object.isRequired,
    //function" triggered when the user choses an answer
    answer: PropTypes.func.isRequired,
    //array: including the letter of the disabled answers (when 50/50 lifeline is used)
    disabled: PropTypes.array.isRequired,
    //string: suggested answer (when phoneHome or askPublic lifelines are used)
    suggested: PropTypes.string.isRequired
};

export default QnA;