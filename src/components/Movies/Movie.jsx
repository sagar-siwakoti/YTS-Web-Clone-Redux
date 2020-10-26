import React from "react";
import {star} from "../../assets/images";

function Movie(props) {
  /*const nextPage = () => {
    window.document.title = props.movie.title;
    props.getMoveDetail(props.movie.id);
    props.history.push("/result");
  };*/
  return (
    <>
      <div>
          <div className="movie" >
              <div className="movie__container">
                  <img src="https://images-na.ssl-images-amazon.com/images/I/71nsvxFpSTL._AC_SL1200_.jpg" alt="movies"/>
                  <div className="overlay">
                      <img src={star} alt="star"/>
                  </div>
              </div>
          </div>
      </div>
    </>
  );
}

export default Movie;
