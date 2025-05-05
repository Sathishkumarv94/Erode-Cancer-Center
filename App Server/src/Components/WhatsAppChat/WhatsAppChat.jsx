import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppChat.css'; // You'll write the CSS separately

const WhatsAppChat = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=919842922443"
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp size={30} />
    </a>
  );
};

export default WhatsAppChat;