import React from "react";

import "./message.css";

const Message = ({ own }) => {
  return (
    <div className={own ? "message own" : "message"}>
      <div className='messageTop'>
        <img
          src='https://images.unsplash.com/photo-1474978528675-4a50a4508dc3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
          alt=''
          className='messageImg'
        />
        <p className='messageText'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      <div className='messageBottom'>1 hour ago</div>
    </div>
  );
};

export default Message;
