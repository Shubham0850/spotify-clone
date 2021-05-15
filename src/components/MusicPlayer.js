import React, { useState } from "react";
import "./MusicPlayer.css";

export default function MusicPlayer() {
  const [play, setPlay] = useState(true);

  const handlePlay = () => {
    setPlay(true);
  };

  const handlePause = () => {
    setPlay(false);
  };

  return (
    <div className="music_player_container ">
      <div className="bg_glass music_player">
        <div className="music_cover_image">
          <img
            src="https://i.pinimg.com/736x/3d/1c/e1/3d1ce11d598d349097c7f04d6b231e78.jpg"
            alt="song cover image"
          />
          <div className="music_name bg_glass">
            <h2>Yallgar</h2>
            <p className="small_p">Carry Minati</p>
          </div>
        </div>

        <div className="m_controller">
          <div className="music_progress">
            <input type="range" id="" max="100" value="50" />
          </div>
          <div className="music_controller">
            {/* Shuffle song */}
            <button className="small_btn p_btn glass_btn">
              <ion-icon name="shuffle"></ion-icon>
            </button>

            {/* Previeus Button */}
            <button className="p_btn small_btn">
              <ion-icon name="play-skip-back-circle"></ion-icon>
            </button>
            {/* Play and pouse btn */}

            {play ? (
              <button className="p_btn play_btn" onClick={handlePause}>
                <ion-icon
                  name="pause-circle"
                  style={{ fontSize: "60px", color: "#1db954" }}
                ></ion-icon>
              </button>
            ) : (
              <button className="p_btn play_btn" onClick={handlePlay}>
                <ion-icon
                  name="play-circle"
                  style={{ fontSize: "60px", color: "#1db954" }}
                ></ion-icon>
              </button>
            )}
            {/* Next Button */}
            <button className="p_btn small_btn">
              <ion-icon name="play-skip-forward-circle"></ion-icon>
            </button>
            {/* Repeat Button */}
            <button className="small_btn p_btn glass_btn">
              <ion-icon name="repeat"></ion-icon>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
