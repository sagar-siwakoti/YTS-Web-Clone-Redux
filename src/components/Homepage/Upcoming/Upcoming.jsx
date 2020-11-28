import React from "react";
import "./Upcoming.css";
import { connect } from "react-redux";
import Movie from "../../Movies/Movie";
import Loader from "../../Extra UI/Loader/Loader";
function Upcoming(props) {
  let displayMovies = <Loader />;
  if (!props.allMovies.loading) {
    displayMovies = props.homepageMovies.map((item, id) => {
      return <Movie key={id} movie={item} />;
    });
  }
  return (
    <div className="upcoming">
      <div className="upcoming__header">
        <h3>Upcoming YIFY Movies</h3>
        <a href="/" className="upcoming__headLink">
          Request a movie
        </a>
      </div>

      <div className="upcoming__container">{displayMovies}</div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    allMovies: state.allMovies,
    homepageMovies: state.homepage.upcoming,
  };
};

export default connect(mapStateToProps)(Upcoming);
