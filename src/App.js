import React, { Component } from 'react';
import classes from './App.module.css';
import Top from './components/Top/Top';
import QnA from './components/QnA/QnA';
import Modal from './components/Modal/Modal';
import bgLarge from './assets/img/bg-large.jpg';
import bgSmall from './assets/img/bg-small.jpg';
import bgXs from './assets/img/bg-xs.jpg';
import allQuestions from "./assets/questions/questionList.json";
import {StartModal, LoseModal, WinModal} from './components/Modal/ModalStates';


class App extends Component {

  constructor(props) {
    super(props);
  
    // let startModal = (
    //   <>
    //     <h1> Press Start</h1>
    //     <button onClick={this.startGame}> START </button>
    //   </>
    // );
    // let loseModal = (
    //   <>
    //     <h1> Too bad, you lost</h1>
    //     <button onClick={this.startGame}> RESTART </button>
    //   </>
    // );
    // let winModal = (
    //   <>
    //     <h1> Yee! You are now rich! Play again?</h1>
    //     <button onClick={this.startGame}> RESTART </button>
    //   </>
    // );
    this.state = {
      lvl: 1,
      levels: {
        1: '500€',
        2: '1.000€',
        3: '1.500€',
        4: '2.000€',
        5: '3.000€',
        6: '5.000€',
        7: '7.000€',
        8: '10.000€',
        9: '15.000€',
        10: '20.000€',
        11: '30.000€',
        12: '70.000€',
        13: '150.000€',
        14: '300.000€',
        15: '1 Million',
      },
      lifelines: {
        phonecall: true,
        5050: true,
        askPublic: true
      },
      questionList: {},
      currentQuestion: {
        A: '',
        B: '',
        C: '',
        D: '',
        answer: '',
        question: ''
      },
      currentAnswer: null,
      modal: true,
      // start: startModal,
      // lose: loseModal,
      // win: winModal,
      modalContent: <StartModal startGame={this.startGame}/>
    }
  }

  shuffleQuestions = () => {
    let nrOfExistingQuestions = Object.keys(allQuestions).length;
    let selectedQuestions = Array(0);
    for (let i = 1; i <= 15; i++) {
      let rndint = Math.round(Math.random() * nrOfExistingQuestions);
      if (selectedQuestions.includes(rndint)) {
        while (selectedQuestions.includes(rndint)) {
          rndint = Math.round(Math.random() * nrOfExistingQuestions);
          console.log(rndint);
        }
      };
      selectedQuestions.push(rndint);
    }
    let newQuestions = selectedQuestions.map((el) => allQuestions[el]);
    return newQuestions;
  }

  startGame = () => {
    let newQuestions = this.shuffleQuestions();
    this.setState({
      questionList: newQuestions,
      currentQuestion: newQuestions[0],
      lifelines: {
        phonecall: true,
        5050: true,
        askPublic: true
      },
      lvl: 1
    });
    this.closeModal();
  }

  handleAnswer = (ans) => {
    if(ans === this.state.currentQuestion.answer){
      if (this.state.lvl < 15){
        this.setState({
          lvl: this.state.lvl + 1 ,
          currentQuestion: this.state.questionList[this.state.lvl]
        });
      }
      else {
        this.setState({
          modalContent: <WinModal startGame={this.startGame}/>,
          modal: true
        })
      }
    }else {
      this.setState({
        modalContent: <LoseModal startGame={this.startGame}/>,
        modal: true
      })
    }
  }

  closeModal = () => {
    this.setState({
        modal: false,
        modalContent: (<p></p>)
    })
}

  render() {

    let bgimg = bgXs;
    if (window.innerWidth >= 1000) {
      bgimg = bgLarge;
    } else {
      if (window.innerWidth >= 750) {
        bgimg = bgSmall;
      }
    }

    return (
      <div style={{ backgroundImage: `url(${bgimg})` }} className={classes.App} >
        <Modal show={this.state.modal} modalClosed={this.closeModal}>
          {this.state.modalContent}
        </Modal>
        <Top level={this.state.lvl} levels={this.state.levels}></Top>
        <QnA question={this.state.currentQuestion} answer={this.handleAnswer} correct={this.state.currentAnswer}></QnA>
      </div>
    );
  }

}

export default App;
