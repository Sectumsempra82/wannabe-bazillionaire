import React from 'react';
import PropTypes from 'prop-types';
import classes from './Backdrop.module.css';

/*the dark background that is visible when a modal is shown*/
const backdrop = (props) => (
    props.show ? <div className={classes.Backdrop}></div> : null
);

backdrop.propTypes = {
    // boolean: used to determine if the backdrop should be visible
    show: PropTypes.bool.isRequired
}

export default backdrop;