import React from 'react';
import burgurLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.module.css';

const logo = () => (
    <div className={classes.Logo}>
        <img src={burgurLogo} alt="MyBurgur"/>
    </div>
);

export default logo;