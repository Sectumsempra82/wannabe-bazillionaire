import React from 'react';
import classes from './App.module.css';
import Top from './components/UI/Top/Top';
import QnA from './components/UI/QnA/QnA';

function App() {
  return (
    <div className={classes.App}>
      <Top ></Top>
      <QnA ></QnA>
    </div>
  );
}

export default App;
