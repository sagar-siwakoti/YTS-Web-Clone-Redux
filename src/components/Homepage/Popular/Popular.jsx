import React from 'react';
import "./Popular.css";
import Loader from "../../Extra UI/Loader/Loader";
function Popular(props) {

    let displayMovies= (<Loader />)
    if(!props.allMovies.loading){
        displayMovies=props.homepageMovies.map((item,id)=>{
            return (<Movie/>)
        })
    }

    return (
        <div>

        </div>
    );
}

export default Popular;