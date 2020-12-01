import React, { useState } from "react";
import "./MovieDetails.css";
import { connect } from "react-redux";
import { heart, imdb, star } from "../../assets/images";
import Loader from "../../components/Extra UI/Loader/Loader";
import Button from "@material-ui/core/Button";
import MovieSecondarys from "../../components/Movies/MovieExtras/MovieSecondarys";
import {getSingleMovie as singleMovies} from "../../store/actions/getSingleMovie";

function MovieDetails(props) {
  let movie = props.selectedMovie.currentMovie;
  let displayMovieDetails = (
    <div className="Loader">
      <Loader />
    </div>
  );

  if (!props.selectedMovie.loading && movie !== null) {
    let genres = movie?.genres;

    genres = genres.map((item) => {
      return <span key={item}> {item} /</span>;
    });

    displayMovieDetails = (
      <>
        <div className="movieResult__container">
          <div className="movieResult__image">
            <MovieSecondarys img={movie.large_cover_image} />
            <Button>Download</Button>
          </div>

          <div className="movieResult__details">
            <h1>{movie.title}</h1>

            <h3>
              {movie.year} <br />
              {genres}
            </h3>

            <div className="movieResult__availability">
              <p>Available in:</p>
              <div className="movieResult__availabilityContainer">720p</div>
            </div>

            <div className="movieResult__likes">
              <img src={heart} alt="heart" />
              <h3>3</h3>
              <img src={imdb} alt="imdb" />
              <h3 className="movieResult__star">
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
      className="movieResult"
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
