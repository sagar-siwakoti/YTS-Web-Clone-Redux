import React from "react";
import "./MovieDetails.css";
import MovieSecondarys from "../../components/Movies/MovieExtras/MovieSecondarys";
import Button from "@material-ui/core/Button";
import { heart, imdb, star } from "../../assets/images";
import { connect } from "react-redux";
import Loader from "../../components/Extra UI/Loader/Loader";
import GetAppIcon from '@material-ui/icons/GetApp';
import Footer from "../../components/Footer/Footer";

class MovieDetails extends React.Component {
  render() {
    const clickedToLink = (url) => {
      window.location.href = url;
      this.setState({ showModal: false });
    };
    // scroll to top of the page
    window.scrollTo(0, 0);
    // Current Selected movie
    const quality= {type:"720p,1080p"};
    let movie = this.props.selectedMovie.currentMovie;
    let displayMovieDetails = (
      <div className="Loader">
        <Loader />
      </div>
    );

    if (!this.props.selectedMovie.loading && movie !== null) {
      let genres = movie?.genres;

      genres = genres.map((item) => {
        return <span key={item}> {item} /</span>;
      });

      displayMovieDetails = (
        <>
          <div className="movieDetails__container">
            <div className="movieDetails__image">
              <MovieSecondarys img={movie.large_cover_image} />
              <Button><GetAppIcon/>Download</Button>
            </div>

            <div className="movieDetails__details">
              <h1>{movie.title}</h1>

              <h3>
                {movie.year} <br />
                {genres}
              </h3>

              <div className="movieDetails__availability">
                <p>Available in:</p>
                <div className="movieDetails__availabilityContainer">{quality.type}</div>
              </div>
              <div className="movieDetails__likes">
                <img src={heart} alt="heart" />
                <h3>5</h3>
                <img src={imdb} alt="imdb" />
                <h3 className="movieDetails__star">
                  <span>{movie.rating || 6.6}</span>
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
        <div>

        <Footer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedMovie: state.singleMovie,
  };
};

export default connect(mapStateToProps)(MovieDetails);
