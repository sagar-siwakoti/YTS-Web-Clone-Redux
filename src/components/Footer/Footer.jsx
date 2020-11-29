import React from "react";
import "./Footer.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";

function Footer(props) {
  return (
    <div className="footer">
      <div className="footer__heading">
        <h3>YTS Web Clone</h3>
        <h3>Created By: Sagar Siwakoti</h3>
      </div>
      <div className="footer__icons">
        <a href={"https://github.com/sagar-siwakoti/"} target="_blank" rel="noopener noreferrer">
          <GitHubIcon fontSize="large" />
        </a>
        <a href={"https://www.linkedin.com/in/sagar-siwakoti/"} target="_blank" rel="noopener noreferrer">
          <LinkedInIcon fontSize="large" />
        </a>
        <a href={"https://www.instagram.com/i__am_sagar/"} target="_blank" rel="noopener noreferrer">
          <InstagramIcon fontSize="large" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
