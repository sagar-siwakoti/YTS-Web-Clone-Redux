import React from 'react';
import "./Latest.css";
import Loader from "../../Extra UI/Loader/Loader";
import Movie from "../../Movies/Movie";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
function Latest(props) {
    let displayMovies=<Loader />
    if(!props.allMovies.loading){
        displayMovies=props.homepageMovies.map((item,id)=>{
            return(
                <Movie key={id} movie ={item} />
            )
        })
    }
    return (
        <div className="latest">
            <div className="latest__headContent">
                <h3 className="latest__heading">Latest YIFY Movies Torrents</h3>
                <Link to={"/"} className="latest__link">Browse All</Link>
            </div>
            <div className="latest__container">
                {displayMovies}
            </div>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        allMovies: state.allMovies,
        homepageMovies: state.homepage.latest
    }
}


export default connect(mapStateToProps)(Latest);