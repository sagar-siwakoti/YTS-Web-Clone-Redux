import React from "react";
import "./Movie.css";
import { star } from "../../assets/images";
import movieImg from "../../assets/theOldGuard.jpg";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getSingleMovie } from "../../store/actions/getSingleMovie";
function Movie(props) {
  const detailPage = () => {
    window.document.title = props.movie.title;
    props.getMovieDetail(props.movie.id);
    props.history.push("/result");
  };
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <>
      <div className="movie" onClick={detailPage}>
        <div className="movie__container">
          <img src={props.movie?.medium_cover_image || movieImg} alt="movies" />
          <div className="overlay">
            <img src={star} alt="star" />
            <h2>{props.movie?.rating || 5}/10</h2>
            <h2>{props.movie?.genres[0]|| "Action"}</h2>
            <Button clicked={detailPage}>View Details</Button>
          </div>
        </div>
        <h3>{truncate(props.movie?.title,27)}</h3>
        <p>{props.movie?.year}</p>
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
