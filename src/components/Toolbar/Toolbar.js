import React, { Component } from 'react';
import '../SideDrawer/DrawerToggleButton'
import './Toolbar.css'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
const toolbar = props => (

    <header className="toolbar">
        <nav className="toolbar__navigation">
            <div className="toolbar__toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
            <div className="toolbar__logo"><a href="/">King's Salong</a></div>
            <div className="spacer"></div>
            <div className="toolbar_navigation-items">
                <ul>
                    <li><a href="/">Hem</a></li>
                    <li><a href="/">Priser</a></li>
                    <li><a href="/">Hitta Oss</a></li>
                    <li><a href="/">Öppettider</a></li>
                </ul>
            </div>
        </nav>
    </header>
)


export default toolbar;