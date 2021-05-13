import React from "react";
import "./BottomNav.css";

export default function BottomNav() {
  return (
    <div className="bottom_nav bg_glass">
      <div className="nav_btn home_btn">
        <ion-icon name="home"></ion-icon>
        <p className="small_p">Home</p>
      </div>
      <div className="nav_btn search_btn">
        <ion-icon name="search"></ion-icon>
        <p className="small_p">Search</p>
      </div>
      <div className="nav_btn librery_btn">
        <ion-icon name="library"></ion-icon>
        <p className="small_p">Library</p>
      </div>
    </div>
  );
}
