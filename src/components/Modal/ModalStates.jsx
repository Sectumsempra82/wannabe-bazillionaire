import React from 'react';

export const StartModal = (props) => (
    <>
        <h1> Press Start</h1>
        <button onClick={props.startGame}> START </button>
    </>
);
export const LoseModal = (props) => (
    <>
        <h1> Too bad, you lost</h1>
        <button onClick={props.startGame}> RESTART </button>
    </>
);
export const WinModal = (props) => (
    <>
        <h1> Yee! You are now rich! Play again?</h1>
        <button onClick={props.startGame}> RESTART </button>
    </>
);