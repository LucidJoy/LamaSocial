import React from "react";
import { Users } from "../../dummyData";
import Online from "../online/Online";

import "./rightbar.css";

const Rightbar = () => {
  return (
    <div className='rightbar'>
      <div className='rightbarWrapper'>
        <div className='birthdayContainer'>
          <img src='assets/gift.png' alt='' className='birthdayImg' />
          <span className='birthdayText'>
            <b>Pola Foster</b> and <b>3 others</b> have their birthday today
          </span>
        </div>

        <img className='rightbarAd' src='assets/ad.png' alt='' />
        <h4 className='rightbarTitle'>Online Friends</h4>
        <ul className='rightbarFriendList'>
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Rightbar;
