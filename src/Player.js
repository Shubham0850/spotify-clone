import React from "react";
import BottomNav from "./components/BottomNav";
import MusicFooter from "./components/MusicFooter";
import Music from "./components/Music";
import TopNav from "./components/TopNav";
import "./Player.css";
import ArtistCard from "./components/Cards/Artist";

export default function Player({ spotify }) {
  return (
    <div className="player ">
      <div className="player_bg_image">
        <div className="player_container">
          <TopNav />
          <Music />

          <ArtistCard />
        </div>
      </div>
      <MusicFooter />
    </div>
  );
}
