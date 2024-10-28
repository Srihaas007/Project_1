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
      // Call handleQuery instead of just adding the message
      handleQuery(message);
      setMessage('');
    }
  };
  const handleQuery = async (query) => {
    try {
      const response = await fetch('http://localhost:5000/api/query', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });
  
      const data = await response.json();
      
      if (response.ok) {
        setMessages([
          ...messages,
          { text: query, sender: 'user' },
          { text: data.response, sender: 'assistant' }
        ]);
      } else {
        setMessages([
          ...messages,
          { text: query, sender: 'user' },
          { text: `Error: ${data.error}`, sender: 'system' }
        ]);
      }
    } catch (error) {
      console.error("Query error:", error);
      setMessages([
        ...messages,
        { text: query, sender: 'user' },
        { text: `Error: ${error.message}`, sender: 'system' }
      ]);
    }
  };
  const handleFileInputChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log("Selected file:", file);
      
      const formData = new FormData();
      formData.append('file', file);
  
      try {
        console.log("Sending file to server...");
        const response = await fetch('http://localhost:5000/api/upload', {
          method: 'POST',
          body: formData,
          // Add these headers to ensure CORS works properly
          headers: {
            'Accept': 'application/json',
            // Don't set Content-Type header when using FormData
          },
        });
  
        console.log("Server response status:", response.status);
        const data = await response.json();
        console.log("Server response data:", data);
        
        if (response.ok) {
          setMessages([...messages, { 
            text: `File uploaded successfully: ${file.name}`, 
            sender: 'user' 
          }]);
        } else {
          setMessages([...messages, { 
            text: `Error uploading file: ${data.error || 'Unknown error'}`, 
            sender: 'system' 
          }]);
        }
      } catch (error) {
        console.error("Upload error:", error);
        setMessages([...messages, { 
          text: `Error uploading file: ${error.message}`, 
          sender: 'system' 
        }]);
      }
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