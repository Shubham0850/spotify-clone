import React from "react";
import Playlists from "../Playlists";
import AlbumCard from "./Cards/Album";
import ArtistCard from "./Cards/Artist";
import "./Music.css";

export default function Music() {
  return (
    <div className="music_container">
      
      <Playlists/>
      <h3 className="music_h3">Top Artists</h3>
      <div className="overflow_scroll">
        <ArtistCard />
        <ArtistCard />
        <ArtistCard />
        <ArtistCard />
        <ArtistCard />
        <ArtistCard />
      </div>

      <h3 className="music_h3">Album</h3>
      <div className="overflow_scroll">
        <AlbumCard />
      </div>
    </div>
  );
}
