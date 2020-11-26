import React, {useEffect, useState} from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";
import { star,wifi } from "../../assets/images";
import Popular from "../../components/Homepage/Popular/Popular";
import {connect} from "react-redux";
import {getAllMovies} from '../../store/actions/getAllMovies';

function HomePage(props) {
  const [showModal,setShowModal]=useState(false);
  useEffect(()=>{
    window.document.title="YTS Clone";
    if (props.allMovies.movies.length===0){
      props.getMovies()
    }
  },[])
  return (
    <div className="homepage">
      <div className="homepage__popular">
        <h1 className="homepage__heading">
          Download YTS YIFY movies: HD smallest size
        </h1>
        <p>
          Welcome to the official YTS.MX (.LT) website. Here you can browse and
          download YIFY movies in
          <br /> excellent 720p, 1080p, 2160p 4K and 3D quality, all at the
          smallest file size. YTS Movies Torrents.
        </p>
        <Link to="/">
          IMPORTANT - YTS.MX is the only new official domain for YIFY Movies
        </Link>
        <div className="homepage__popularHeader">
          <div className="just-for-space" />
          <h3>
            <img src={star} alt="star" />
            <span>Popular Downloads</span>
          </h3>

          <Link to="/" className="homepage__popularLink">
            <img src={wifi} alt="wifi" />
            <p>more...</p>
          </Link>
        </div>
        <div>
          <Popular />
        </div>
      </div>
    </div>
  );
}
const mapStateToProps=(state)=>{
  return{
    allMovies:state.allMovies,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getMovies: () => dispatch(getAllMovies()),
    resetError: () => dispatch({type: 'GET_MOVIES_ERROR',value: null})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(HomePage);
