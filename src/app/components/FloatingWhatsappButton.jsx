"use client";
import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const logo = 'logo.svg';

const FloatingWhatsappButton = () => {
  return (
    <FloatingWhatsApp
      phoneNumber='+2348183255555'
      accountName='LeonardoBySujimoto'
      statusMessage='Typically replies within 10 minutes'
      chatMessage='Hello! How can we help you?'
      // darkMode={true}
      avatar={logo}
      allowEsc
      // allowClickAway
      notification
      notificationSound
    />
  );
};

export default FloatingWhatsappButton;
