import React from "react";

function Movie(props) {
  const nextPage = () => {
    window.document.title = props.movie.title;
    props.getMoveDetail(props.movie.id);
    props.history.push("/result");
  };
  return (
      <>
      <div>

  </div>
          </>);
}

export default Movie;
