import React from "react";
import "./Login.css";
import { accessUrl } from "./spotify";

function Login() {
  return (
    <div className="player_bg_image">
      <div className="login player_container">
        <img
          src="https://logodownload.org/wp-content/uploads/2016/09/spotify-logo-branca-white.png"
          alt="spotify-logo"
        />
        ,
        <a href={accessUrl}>
          <button className="btn">LOGIN WITH SPOTIFY</button>
        </a>
      </div>
    </div>
  );
}

export default Login;
