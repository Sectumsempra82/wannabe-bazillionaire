import React, { Component } from 'react';
import classes from './Top.module.css';
import logo from '../../assets/img/logo.png';

class Top extends Component {
    render() {

        let levels = Array(15)
            .fill()
            .map((el, i) => {
                if (this.props.level > 1 && (i + 1) < this.props.level) {
                    return (<p style={{ backgroundColor: '#00ff00' }} key={i}>Level {i + 1} - {this.props.levels[i + 1]}</p>)
                } else if (this.props.level <= 15 && (i + 1) === this.props.level) {
                    return (<p style={{ backgroundColor: 'rgb(138, 186, 248)', border: '5px solid black' }} key={i}>Level {i + 1} - {this.props.levels[i + 1]}</p>)
                } else {
                    return (<p style={{ backgroundColor: 'rgb(138, 186, 248)' }} key={i}>Level {i + 1} - {this.props.levels[i + 1]}</p>)
                }
            })
            .reverse()


        return (
            <div className={classes.Top} >
                <div className={classes.CentralPicture}>
                    <img src={logo} alt='logo' style={{ width: '40vw' }} />
                </div>
                <div className={classes.Level}>
                    {levels}
                </div>
            </div>
        )
    }
}

export default Top;