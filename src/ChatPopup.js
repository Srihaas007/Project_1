// src/ChatPopup.js
import React, { useState } from 'react';
import './ChatPopup.css';
import { FaPaperclip, FaPaperPlane } from 'react-icons/fa';

const ChatPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { text: 'Hello! How can I help you?', sender: 'bot' },
    { text: 'I need some assistance with my order.', sender: 'user' }
  ]);

  const togglePopup = () => setIsOpen(!isOpen);

  const handleMessageChange = (e) => setMessage(e.target.value);

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { text: message, sender: 'user' }]);
      setMessage('');
    }
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setMessages([...messages, { text: `File: ${file.name}`, sender: 'user' }]);
    }
  };

  return (
    <div className="chat-container">
      {!isOpen && (
        <button className="chat-button" onClick={togglePopup}>
          Chat
        </button>
      )}
      {isOpen && (
        <div className="chat-popup">
          <div className="chat-header">
            <h2>Chat with Us</h2>
            <button className="close-button" onClick={togglePopup}>×</button>
          </div>
          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`chat-message ${msg.sender === 'user' ? 'user-message' : 'bot-message'}`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chat-input-container">
            <input
              type="file"
              id="file-input"
              className="file-input"
              onChange={handleFileInputChange}
            />
            <label htmlFor="file-input" className="file-input-label">
              <FaPaperclip size={20} />
            </label>
            <input
              type="text"
              value={message}
              onChange={handleMessageChange}
              placeholder="Type your message..."
              className="chat-input"
            />
            <button onClick={handleSendMessage} className="send-button">
              <FaPaperPlane size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatPopup;