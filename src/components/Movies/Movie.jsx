import React from "react";
import { star } from "../../assets/images";
import movieImg from "../../assets/extraction.jpg";
import Button from "@material-ui/core/Button";
import "./Movie.css";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getSingleMovie } from "../../store/actions/getSingleMovie";
function Movie(props) {
  const nextPage = () => {
    window.document.title = props.movie.title;
    props.getMovieDetail(props.movie.id);
    props.history.push("/result");
  };
  return (
    <>
      <div className="movie">
        <div className="movie__container">
          <img src={props.movie?.medium_cover_image || movieImg} alt="movies" />
          <div className="overlay">
            <img src={star} alt="star" />
            <h2>8/10</h2>
            <h2>Action</h2>
            <Button>View Details</Button>
          </div>
        </div>
        <h3>Dunkirk</h3>
        <p>2018</p>
      </div>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMovieDetail: (id) => dispatch(getSingleMovie(id)),
  };
};
export default connect(null, mapDispatchToProps)(withRouter(Movie));
