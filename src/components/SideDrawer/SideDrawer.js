import React, { Component } from 'react';
import './SideDrawer.css'
const sideDrawer = props => {
    let drawerClasses = 'side-drawer'
    if(props.show){
        drawerClasses = 'side-drawer open'
    }
return(
    <nav className={drawerClasses}>
        <ul>
        <li><a href="/">Hem</a></li>
                    <li><a href="/">Priser</a></li>
                    <li><a href="/">Hitta Oss</a></li>
                    <li><a href="/">Öppettider</a></li>
        </ul>
    </nav>
)}
export default sideDrawer;