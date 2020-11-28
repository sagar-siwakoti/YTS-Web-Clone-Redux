import React from "react";
import "./Footer.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import { Link } from "react-router-dom";
function Footer(props) {
  return (
    <div className="footer">
      <div className="footer__heading">
        <h3>YTS Web Clone</h3>
        <h3>Created By: Sagar Siwakoti</h3>
      </div>
      <div className="footer__icons">
        <Link to={""}>
          <GitHubIcon fontSize="large" />
        </Link>
        <Link to={""}>
          <LinkedInIcon fontSize="large" />
        </Link>
        <Link to={""}>
          <InstagramIcon fontSize="large" />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
