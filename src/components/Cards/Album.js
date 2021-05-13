import React from "react";
import "./style.css";

export default function AlbumCard({ name, images }) {
  let imageUrl =
    "https://i1.wp.com/musicaest.com/wp-content/uploads/2021/04/cac37-gorillaz-e-in-uscita-lalbum-song-machine-season-one-la-band-ha-pubblicato-il-video-strange-timez-feat.-robert-smith.jpg?fit=1200%2C1200&ssl=1";
  if (images) {
    const { url } = images[0];
    imageUrl = url;
  }
  console.log(images);
  return (
    <div className="album_card ">
      <div className="album_img">
        <img src={imageUrl} alt="album image" />
      </div>
      <div className="album_name bg_glass">
        <p>{name}</p>
      </div>
    </div>
  );
}