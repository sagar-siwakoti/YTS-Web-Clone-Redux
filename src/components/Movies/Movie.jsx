import React from "react";
import { star } from "../../assets/images";
import Button from '@material-ui/core/Button';
import "./Movie.css"
function Movie(props) {
  /*const nextPage = () => {
    window.document.title = props.movie.title;
    props.getMoveDetail(props.movie.id);
    props.history.push("/result");
  };*/
  return (
    <>
      <div>
        <div className="movie">
          <div className="movie__container">
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/71nsvxFpSTL._AC_SL1200_.jpg"
              alt="movies"
            />
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
      </div>
    </>
  );
}

export default Movie;
