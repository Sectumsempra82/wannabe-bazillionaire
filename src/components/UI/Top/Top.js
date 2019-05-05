import React, {Component} from 'react';
import classes from './Top.module.css';

class Top extends Component {
    render(){
        return(
            <div className={classes.Top}>
                <div className={classes.CentralPicture}>
                    <h1>Who wants to be a bazillionaire?</h1>
                </div>
                <div className={classes.Level}>
                    <p>Level 15 - 1 Million</p>
                    <p>Level 14 - 300.000€</p>
                    <p>Level 13 - 150.000€</p>
                    <p>Level 12 - 70.000€</p>
                    <p>Level 11 - 30.000€</p>
                    <p>Level 10 - 20.000€</p>
                    <p>Level 9 - 15.000€</p>
                    <p>Level 8 - 10.000€</p>
                    <p>Level 7 - 7.000€</p>
                    <p>Level 6 - 5.000€</p>
                    <p>Level 5 - 3.000€</p>
                    <p>Level 4 - 2.000€</p>
                    <p>Level 3 - 1.500€</p>
                    <p>Level 2 - 1.000€</p>
                    <p>Level 1 - 500€</p>
                </div>
            </div>
        )
    }
}

export default Top;