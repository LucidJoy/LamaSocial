import React from "react";

import "./sidebarFriend.css";

const SidebarFriend = ({ user }) => {
  return (
    <li className='sidebarFriend'>
      <img className='sidebarFriendImg' src={user.profilePicture} />
      <span className='sidebarFriendName'>{user.username}</span>
    </li>
  );
};

export default SidebarFriend;
