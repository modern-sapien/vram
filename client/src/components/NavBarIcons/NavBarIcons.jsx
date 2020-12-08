import React from 'react';
import { Link } from "react-router-dom"


const NavBarIcons = (props) => {
    return (
        <>
        {props.icons.map((icon) => (
        <Link to={`${icon.url}`}>
        <div className="col s2 bottom-nav-content" onClick={icon.clickMe} >
        <img src={icon.img} alt={icon.name}/></div> 
        </Link>
        ))}
        </>
    );
};

export default NavBarIcons;