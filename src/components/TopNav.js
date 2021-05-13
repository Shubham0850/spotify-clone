import React, { useEffect, useState } from "react";
import { useStateValue } from "../StateProvider";
import "./TopNav.css";

export default function TopNav() {
  const [userName, setUserName] = useState("User");
  const [imageUrl, setImageUrl] = useState(
    "https://cdn.dribbble.com/users/1786866/screenshots/13992097/media/c461eeae4d4b523c9d3bab7c66264916.png?compress=1&resize=400x300"
  );
  const [{ user }, dispatch] = useStateValue();
  console.log(user);

  useEffect(() => {
    if (user) {
      if (user.images.length != 0) {
        const { url } = user.images[0];
        setImageUrl(url);
      }
      setUserName(user.display_name);
    }
  }, [user]);

  return (
    <div className="top_nav">
      <div className="user_profile_card">
        <div className="profile_img">
          <img src={imageUrl} alt="profile image" />
        </div>
        <div className="profile_details">
          <h3>Hi,{userName} </h3>
          <p>Good Afternoon</p>
        </div>
      </div>
      <div className="search_btn">
        <ion-icon name="search"></ion-icon>
      </div>
    </div>
  );
}
