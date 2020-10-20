import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";
import {star} from "../../assets/images";
import {wifi} from '../../assets/images';

function HomePage(props) {
  return (
    <div className="homepage">
      <div className="homepage__popular">
        <h1 className="homepage__heading">
          Download YTS YIFY movies: HD smallest size
        </h1>
        <p>
          Welcome to the official YTS.MX (.LT) website. Here you can browse and
          download YIFY movies in<br/> excellent 720p, 1080p, 2160p 4K and 3D
          quality, all at the smallest file size. YTS Movies Torrents.
        </p>
        <Link to="/">
          IMPORTANT - YTS.MX is the only new official domain for YIFY Movies
        </Link>
        <div className="homepage__popularHeader">
          <h3>
            <img src={star} alt="star" />
            <span>Popular Downloads</span>
          </h3>
          <Link to='/' className="homepage__popularLink" >
            <img src={wifi} alt="wifi"/>
            <p>more...</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
