import React, { useEffect, useState } from "react";
import axios from "axios";

import "./chatOnline.css";

const ChatOnline = ({ onlineUsers, currentId, setCurrentChat }) => {
  const [friends, setFriends] = useState([]);
  const [onlineFriends, setOnlineFriends] = useState([]);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const getFriends = async () => {
      const res = await axios.get(`/users/friends/${currentId}`);
      setFriends(res.data);
    };
    getFriends();
  }, [currentId]);

  useEffect(() => {
    setOnlineFriends(friends.filter((f) => onlineUsers.includes(f._id)));
  }, [friends, onlineUsers]);

  const handleClick = async (user) => {
    try {
      const res = await axios.get(
        `/conversations/find/${currentId}/${user._id}`
      );
      setCurrentChat(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='chatOnine'>
      {onlineFriends.map((ofriend) => (
        <div className='chatOnlineFriend' onClick={() => handleClick(ofriend)}>
          <div className='chatOnlineImgContainer'>
            <img
              className='chatOnlineImg'
              src={
                ofriend?.profilePicture
                  ? PF + ofriend.profilePicture
                  : PF + "/person/noAvatar.png"
              }
              alt=''
            />
            <div className='chatOnlineBadge'></div>
          </div>
          <span className='chatOnlineName'>{ofriend?.username}</span>
        </div>
      ))}
    </div>
  );
};

export default ChatOnline;
