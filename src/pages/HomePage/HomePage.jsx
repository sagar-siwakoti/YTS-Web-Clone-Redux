import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";
function HomePage(props) {
  return (
    <div className="homepage">
      <div className="homepage__popular">
        <h1 className="homepage__heading">
          Download YTS YIFY movies: HD smallest size
        </h1>
        <p>
          Welcome to the official YTS.MX (.LT) website. Here you can browse and
          download YIFY movies in excellent 720p, 1080p, 2160p 4K and 3D
          quality, all at the smallest file size. YTS Movies Torrents.
        </p>
        <Link to="/">
          IMPORTANT - YTS.MX is the only new official domain for YIFY Movies
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
