import React from "react";
import "./MusicFooter.css";

export default function MusicFooter() {
  return (
    <div className="music_footer bg_glass">
      <div className="song_cover_img">
        <img
          src="https://i1.wp.com/musicaest.com/wp-content/uploads/2021/04/cac37-gorillaz-e-in-uscita-lalbum-song-machine-season-one-la-band-ha-pubblicato-il-video-strange-timez-feat.-robert-smith.jpg?fit=1200%2C1200&ssl=1"
          alt="song cover image"
        />
      </div>
      <div className="song_name">
          <h4>Amused city song</h4>
        <p className="small_p">Amused City</p>
      </div>
      <div className="song_controller">
        <div className="play_btn">
          <ion-icon name="caret-forward-circle"></ion-icon>
        </div>
        <div className="play_btn">
          <ion-icon name="caret-forward"></ion-icon>
        </div>
      </div>
    </div>
  );
}
