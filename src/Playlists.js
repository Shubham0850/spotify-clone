import React from "react";
import AlbumCard from "./components/Cards/Album";
import { useStateValue } from "./StateProvider";

function createCard(data) {
  return <AlbumCard name={data.name} images={data.images} />;
}

export default function Playlists() {
  const [{ playlists }, dispatch] = useStateValue();

  console.log(playlists);

  return (
    <div className="playlists">
      
      <h3 className="music_h3">My Playlists</h3>
      <div className="overflow_scroll">{playlists?.items?.map(createCard)}</div>
    </div>
  );
}
