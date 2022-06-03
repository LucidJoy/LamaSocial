import React from "react";
import { format } from "timeago.js";

import "./message.css";

const Message = ({ message, own }) => {
  return (
    <div className={own ? "message own" : "message"}>
      <div className='messageTop'>
        <img
          src='https://images.unsplash.com/photo-1474978528675-4a50a4508dc3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
          alt=''
          className='messageImg'
        />
        <p className='messageText'>{message.text}</p>
      </div>

      <div className='messageBottom'>{format(message.createdAt)}</div>
    </div>
  );
};

export default Message;
