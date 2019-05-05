import React, { Component } from 'react';
import classes from './App.module.css';
import Top from './components/UI/Top/Top';
import QnA from './components/UI/QnA/QnA';
import bgLarge from './assets/img/bg-large.jpg';
import bgSmall from './assets/img/bg-small.jpg';
import bgXs from './assets/img/bg-xs.jpg';
import allQuestions from "./assets/questions/questionList.json";

class App extends Component {

  constructor(props) {
    super(props);



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
      currentQuestion: ''
    }


  }

  shuffleQuestions = () => {
    let nrOfExistingQuestions = Object.keys(allQuestions).length;
    console.log(nrOfExistingQuestions);
    let selectedQuestions = Array(0);
    for (let i=1; i<=15; i++) {
      let mynum = Math.round(Math.random() * nrOfExistingQuestions);
      console.log(mynum);
      if (selectedQuestions.includes(mynum)) {
        while (selectedQuestions.includes(mynum)) {
          mynum = Math.round(Math.random() * nrOfExistingQuestions);
          console.log(mynum);
        }
      };
      selectedQuestions.push(mynum);
    }
    console.log(selectedQuestions);
    let newQuestions = selectedQuestions.map((el) => allQuestions[el]);

    this.setState({
      questionList: newQuestions,
      currentQuestion: newQuestions[this.state.lvl - 1]
    })
  }


  componentDidMount() {
    this.shuffleQuestions();
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
        <Top level={this.state.lvl}></Top>
        <QnA question={this.state.currentQuestion}></QnA>
      </div>
    );
  }

}

export default App;
