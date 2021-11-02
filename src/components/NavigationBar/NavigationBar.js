import React from "react";
import './NavigationBar.css';

const NavigationBar = (props) =>{
    return(
        <div className='navigation-bar'>
            {props.children}
        </div>
    );
}

export default NavigationBar;