import React, { useState } from "react";
import "./MovieDetails.css";
import { connect } from "react-redux";
import { heart, imdb, star } from "../../assets/images";
import Loader from "../../components/Extra UI/Loader/Loader";
import Button from "@material-ui/core/Button";
import MovieSecondarys from "../../components/Movies/MovieExtras/MovieSecondarys";

function MovieDetails(props) {
  const clickedOnMovie = (url) => {
    window.location.href = url;
  };
  //scroll to top
  window.scrollTo(0, 0);
  let movie = props.selectedMovie.currentMovie;
  let displayMovieDetails = (
    <div className="Loader">
      <Loader />
    </div>
  );
  if (!props.selectedMovie.loading && movie !== null) {
    // list of genre of selected movie

    let genres = movie?.genres;

    genres = genres.map((item) => {
      return <span key={item}> {item} /</span>;
    });

    displayMovieDetails = (
      <>
        <div className="movieDetails__container">
          <div className="movieDetails__image">
            <MovieSecondarys img={movie.large_cover_image} />
            <Button>Download</Button>
          </div>

          <div className="movieDetails__details">
            <h1>{movie.title}</h1>

            <h3>
              {movie.year} <br />
              {genres}
            </h3>

            <div className="movieDetails__availability">
              <p>Available in:</p>
              <div className="movieDetails__availabilityContainer">720p</div>
            </div>
            {/* likes */}
            <div className="movieDetails__likes">
              <img src={heart} alt="heart" />
              <h3>3</h3>
              <img src={imdb} alt="imdb" />
              <h3 className="movieDetails__star">
                <span>6.6</span>
                <img src={star} alt="star" />
              </h3>
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <div
      className="movieDetails"
      style={{
        backgroundImage: `linear-gradient(to bottom,rgba(43, 40, 40, 0.822), rgba(36, 29, 29, 0.897)),url(${movie?.background_image})`,
      }}
    >
      {displayMovieDetails}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    selectedMovie: state.singleMovie,
  };
};

export default connect(mapStateToProps)(MovieDetails);
