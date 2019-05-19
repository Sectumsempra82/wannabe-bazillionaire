import React from 'react';

import classes from './Backdrop.module.css';
/*the dark background that is visible when a modal is shown*/
const backdrop = (props) => (
    props.show ? <div className={classes.Backdrop}></div> : null
);

export default backdrop;