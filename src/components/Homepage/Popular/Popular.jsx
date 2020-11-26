import React from "react";
import "./Popular.css";
import Loader from "../../Extra UI/Loader/Loader";
import Movie from "../../Movies/Movie";
import {connect} from "react-redux";
function Popular(props) {
  let displayMovies = <Loader />;
  if (!props.allMovies.loading) {
    displayMovies = props.homepageMovies.map((item, id) => {
      return <Movie key={id} movie={item} />;
    });
  }

  return <div>
      (
      <div className="popular">
          {displayMovies}
      </div>
      )
  </div>;
}
const mapStateToProps = (state) => {
    return {
        allMovies: state.allMovies,
        homepageMovies: state.homepage.popular
    }
}

export default connect(mapStateToProps)(Popular);
