import React from 'react';
import "./Sidebar.css";
import {Link} from "react-router-dom"
import logo from "../../../assets/yts-logo.svg"
import {withMobileDialog} from "@material-ui/core";

function Sidebar(props) {
    const hideSidebar = () => {
        props.handleSidebar()
    }
    return (
        <div className='sidebar' style={{ transform: props.show ? "translateX(0%)" : "translateX(-100%)"}}>
            <div className='sidebar__img'>
                <Link to='/'>
                    <img src={logo} alt="Logo"/>
                </Link>
            </div>

            <div className='sidebar__navContainer'>
                <Link onClick={hideSidebar} className='header__link' to="/">Home</Link>
                <Link onClick={hideSidebar} className='header__link' to="/browse">4k</Link>
                <Link onClick={hideSidebar} className='header__link' to='/browse'>Trending</Link>
                <Link onClick={hideSidebar} className='header__link' to="/browse">Browse movies</Link>

            </div>
        </div>
    );
}

export default Sidebar;