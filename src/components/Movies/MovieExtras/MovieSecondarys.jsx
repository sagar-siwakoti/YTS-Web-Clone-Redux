import React from 'react';
import "./MovieSecondarys.css";
import {theOldGuard} from "../../../assets/images";
function MovieSecondarys(props) {
    return (
        <div className="movieSecondarys">
            <img src={props.img || theOldGuard} alt="movies"/>
        </div>
    );
}

export default MovieSecondarys;