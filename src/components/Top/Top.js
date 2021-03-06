import React, { Component } from 'react';
import classes from './Top.module.css';
import logo from '../../assets/img/logo.png';
import PropTypes from 'prop-types';

class Top extends Component {
    render() {
        /*Dynamically generating the various levels and applying appropriate style based on the current level progress */
        let levels = Array(15)
            .fill()
            .map((el, i) => {
                if (this.props.level > 1 && (i + 1) < this.props.level) {
                    return (<p  className={classes.PassedLevel} key={i}>Level {i + 1} - {this.props.levels[i + 1]}</p>)
                } else if (this.props.level <= 15 && (i + 1) === this.props.level) {
                    return (<p className={classes.CurrentLevel} key={i}>Level {i + 1} - {this.props.levels[i + 1]}</p>)
                } else {
                    return (<p className={classes.notPassedLevel} key={i}>Level {i + 1} - {this.props.levels[i + 1]}</p>)
                }
            })
            .reverse()

        /*Returning the central image and the levels */
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

Top.propTypes = {
    //object: levels and relative prizes
    levels: PropTypes.object.isRequired,
    //string: current level
    level: PropTypes.number.isRequired
};

export default Top;