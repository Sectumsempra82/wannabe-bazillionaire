import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    render() {
        return (
            <>
                <Backdrop show={this.props.show} />
                <div
                    className={classes.Modal}
                    style={{
                        /*Cool animation to keep the content centered on any device */
                        transform: this.props.show ? 'translateY(0)  translate(-50%, -50%)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}
                    >
                    {this.props.children}
                </div>
            </>
        )
    }
}

Modal.propTypes = {
    //boolean: used to determine if the modal should be visible
    show: PropTypes.bool.isRequired,
    //function: used to close the modal
    modalClosed: PropTypes.func.isRequired
}

export default Modal;