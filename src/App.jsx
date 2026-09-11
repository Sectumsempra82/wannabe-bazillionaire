import React, { Component } from 'react';
import classes from './App.module.css';
import Top from './components/Top/Top';
import QnA from './components/QnA/QnA';
import Modal from './components/Modal/Modal';
import Lifelines from './components/Lifelines/Lifelines';
import bgLarge from './assets/img/bg-large.jpg';
import bgSmall from './assets/img/bg-small.jpg';
import bgXs from './assets/img/bg-xs.jpg';
import allQuestions from "./assets/questions/questionList.json";
import {StartModal, LoseModal, WinModal} from './components/Modal/ModalStates';


class App extends Component {
/*  Setting initial state */
  constructor(props) {
    super(props);
    this.state = {
      lvl: 1,
      /* can this be done better? */
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
        phoneCall: true,
        fiftyfifty: true,
        askPublic: true
      },
      
      /*Setting empty initial question and answers so the users cannot just refresh and cycle all the questions, 
      this doesn't solve the issue but at least adds some difficulty and makes the initial view cleaner */

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
      disabledAnswers: [],
      suggestedAnswer: '',
      modal: true,
      /* Setting the initial modal */
      modalContent: <StartModal startGame={this.startGame}/>
    }
  }

  /*shuffleQuestions: utility to random chose the 15 DIFFERENT (that is why the function is so long) questions to be used for this match among the 1000 possibilities  */

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

  /*startGame: function to start or restart the game, removes the modal and sets the 15 questions for the match */

  startGame = () => {
    let newQuestions = this.shuffleQuestions();
    this.setState({
      questionList: newQuestions,
      currentQuestion: newQuestions[0],
      lifelines: {
        phoneCall: true,
        fiftyfifty: true,
        askPublic: true
      },
      lvl: 1,
      suggestedAnswer: '',
      disabledAnswers: [],
    });
    this.closeModal();
  }

  /*handleAnswer: function directly passed to the various answer divs, used to set the next state based on the answer given*/

  handleAnswer = (ans) => {
    /* If the user has answered correctly */
    if(ans === this.state.currentQuestion.answer){
      /* If that wasn't the last question go to the next level*/
      if (this.state.lvl < 15){
        this.setState({
          lvl: this.state.lvl + 1 ,
          currentQuestion: this.state.questionList[this.state.lvl],
          disabledAnswers: [],
          suggestedAnswer: ''
        });
      }
      /*Otherwise the user has won */
      else {
        this.setState({
          modalContent: <WinModal startGame={this.startGame}/>,
          modal: true,
          suggestedAnswer: '',
          disabledAnswers: []
        })
      }
    }/* If the user hasn't answered correctly restart the game */
    else {
      this.setState({
        modalContent: <LoseModal startGame={this.startGame}/>,
        modal: true,
        suggestedAnswer: '',
        disabledAnswers: []
      })
    }
  }

  closeModal = () => {
    this.setState({
        modal: false,
        modalContent: (<p></p>)
    })
  }
  /*Give a suggestion or disable two wrong answers based on which lifeline has been used*/
  useHelp = (help) => {
    switch (help){
      case 'Fiftyfifty':
        let da = [
          'A',
          'B',
          'C',
          'D'
        ]
        .filter(el => {
          return this.state.currentQuestion.answer !== el;
        })
        .slice(0,2);
        this.setState({
          lifelines: {
            ...this.state.lifelines,
            fiftyfifty: false
          },
          disabledAnswers: da
        })
        break;
      
      case 'PhoneCall':
        this.setState({
          lifelines: {
            ...this.state.lifelines,
            phoneCall: false,
          },
          suggestedAnswer: this.state.currentQuestion.answer
        });
        break;
      
      case 'AskPublic':
        this.setState({
          lifelines: {
            ...this.state.lifelines,
            askPublic: false
          },
          suggestedAnswer: this.state.currentQuestion.answer
        });
        break;
      
      default:
        break;
      }
  }

  render() {
    /* Sets the background size dynamically in order to reduce loading time, higher resolution image might be needed for the extraSmall preset */
    let bgimg = bgXs;
    if (window.innerWidth >= 1000) {
      bgimg = bgLarge;
    } else {
      if (window.innerWidth >= 750) {
        bgimg = bgSmall;
      }
    }
    /* Returns 4 components: Modal, Top, Lifelines and QnA*/
    return (
      <div style={{ backgroundImage: `url(${bgimg})` }}
        className={classes.App} >
          <Modal show={this.state.modal}
            modalClosed={this.closeModal}>
              {this.state.modalContent}
          </Modal>
          <Top level={this.state.lvl}
             levels={this.state.levels}>
          </Top>
          <Lifelines lifelines={this.state.lifelines}
            useHelp={this.useHelp}>
          </Lifelines>
          <QnA question={this.state.currentQuestion}
             answer={this.handleAnswer}
             disabled={this.state.disabledAnswers}
             suggested={this.state.suggestedAnswer}>
          </QnA>
      </div>
    );
  }

}

export default App;
