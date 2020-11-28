import React from "react";
import "./Upcoming.css";
import { connect } from "react-redux";
function Upcoming(props) {
  return (
    <div>
      <h1>Upcoming field</h1>
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
