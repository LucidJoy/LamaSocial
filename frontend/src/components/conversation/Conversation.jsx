import React from "react";

import "./conversation.css";

const Conversation = () => {
  return (
    <div className='coversation'>
      <img
        src='https://images.unsplash.com/photo-1474978528675-4a50a4508dc3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
        alt=''
        className='coversationImg'
      />
      <span className='coversationName'>John Doe</span>
    </div>
  );
};

export default Conversation;
