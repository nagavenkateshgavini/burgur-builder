import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = () => {
    return (
    <header className={classes.Toolbar}>
        <div><strong>MENU</strong></div>
        <Logo />
        <nav>
            <NavigationItems />
        </nav>
    </header>
    )
};

export default toolbar;