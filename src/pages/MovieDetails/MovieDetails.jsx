import React, { useState } from "react";
import "./MovieDetails.css";
import {connect} from "react-redux";
import Loader from "../../components/Extra UI/Loader/Loader";
function MovieDetails(props) {
  const [showModal, setShowModal] = useState(false);
  const clickedOnMovie = (url) => {
    window.location.href = url;
    setShowModal(false);
  };
  //scroll to top
  window.scrollTo(0, 0);
  let movie =props.selectedMovie.currentMovie;
    let displayMovieDetails = (<div className='Loader'><Loader /></div>)
    let genres = movie?.genres;

    genres = genres.map(item => {
        return (<span key={item}> {item} /</span>)
    })

    return <div></div>;
}

const mapStateToProps = state => {
    return {
        selectedMovie: state.singleMovie
    }
}

export default connect(mapStateToProps)(MovieDetails);
