import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppChat.css'; 

const WhatsAppChat = () => {
  return (
    <div className="whatsapp-wrapper">
      <a
        href="https://api.whatsapp.com/send?phone=919842922443"
        className="whatsapp-text"
        target="_blank"
        rel="noopener noreferrer"
      >
        Chat with us
      </a>
    <a
      href="https://api.whatsapp.com/send?phone=919842922443"
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp size={28} />
    </a>
    
    </div>
    
  );
};

export default WhatsAppChat;