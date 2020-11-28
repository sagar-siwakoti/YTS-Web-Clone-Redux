import React, { useState } from "react";
import "./MovieDetails.css";
function MovieDetails(props) {
  const [showModal, setShowModal] = useState(false);
  const clickedOnMovie = (url) => {
    window.location.href = url;
    setShowModal(false);
  };
  //scroll to top
  window.scrollTo(0, 0);
  let movie =props.selectedMovie.currentMovie;

  return <div></div>;
}

export default MovieDetails;
