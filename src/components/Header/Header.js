import React, {useState} from 'react';
import "./Header.css";
import logo from "../../assets/yts-logo.svg"
import {Link} from 'react-router-dom';
import search from "../../assets/search.svg"
import {withRouter} from "react-router-dom"
function Header(props) {
    const[movie,setMovie]=useState('')
    const changeHandler=(e)=>{
        setMovie(e.target.value)
    }
    const submitHandler=()=> {

    }
        return (
        <div className="header">
            <Link to="/">
                <img src={logo} alt="Logo"/>
            </Link>
            <div className="header__typo">
                <span>HD movies at the smallest file size.</span>
            </div>
            <div className="header__nav">

                <div className="header__navSearch">
                    <input value={movie} onChange={changeHandler} type="text" placeholder="Quick Search"/>
                    <img src={search} onClick={submitHandler} alt="search" className="header__navSearchImg"/>
                </div>

                <div className="header__navContainer">
                    <Link to="/" className="header__link">Home</Link>
                    <Link to="/" className="header__link">4k</Link>
                    <Link to="/" className="header__link">Trending</Link>
                    <Link to="/" className="header__link">Browse Movies</Link>
                    <Link to="/" className="header__link">Suggestions</Link>
                    <Link to="/" className="header__link">Bookmarks</Link>
                </div>
            </div>

        </div>
    );
}

export default Header;