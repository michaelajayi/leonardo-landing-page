import React from 'react';
import { FloatingWhatsApp } from "react-floating-whatsapp";

const FloatingWhatsappButton = () => {
  return (
    <FloatingWhatsApp
      phoneNumber='+2348183255555'
      accountName='LeonardoBySujimoto'
      statusMessage='Typically replies within 1 hour'
      chatMessage='Hello! How can we help you?'
      // darkMode={true}
      avatar='https://landing.leonardobysujimoto.com/static/media/logo.7cd0fdb6070286a8fb8743e17674d588.svg'
      allowEsc
      allowClickAway
      notification
      notificationSound
    />
  );
}

export default FloatingWhatsappButton