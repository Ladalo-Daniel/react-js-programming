import React from 'react';
//import './FloatingChatButton.css'; Import the CSS file for stylin
const ChatButton = ({ onClick }) => {
  return (
    <button className="floating-chat-button" onClick={onClick}>
      <span className="chat-icon">Chat</span>
    </button>
  );
};

export default ChatButton;