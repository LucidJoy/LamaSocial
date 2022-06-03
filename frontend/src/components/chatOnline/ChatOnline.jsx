import React from "react";

import "./chatOnline.css";

const ChatOnline = () => {
  return (
    <div className='chatOnine'>
      <div className='chatOnlineFriend'>
        <div className='chatOnlineImgContainer'>
          <img
            className='chatOnlineImg'
            src='https://images.unsplash.com/photo-1474978528675-4a50a4508dc3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
            alt=''
          />
          <div className='chatOnlineBadge'></div>
        </div>
        <span className='chatOnlineName'>John Doe</span>
      </div>
    </div>
  );
};

export default ChatOnline;
