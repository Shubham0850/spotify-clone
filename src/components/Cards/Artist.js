import React from "react";
import "./style.css";

export default function ArtistCard() {
  return (
    <div className="artist_card">
      <div className="artist_img">
        <img
          src="https://i.pinimg.com/originals/6a/d1/8d/6ad18d3ea63dc8e35c69f67b4a483983.jpg"
          alt="artist image"
        />
      </div>
      <div className="artist_name bg_glass overflow_dotted">
        <p className="small_p">Honey singha</p>
      </div>
    </div>
  );
}
