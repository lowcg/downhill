"use client";
import React from "react";
import { FaCommentDots, FaTimes } from 'react-icons/fa';
import Bot from "../../../public/assets/bot3.png";
import Image from "next/image";
import { useState } from "react";
const dialoguechatbot = () => {
  const [showChat, setShowChat] = useState(false);

  const toggleChat = () => {
    setShowChat(!showChat);
  };
  return (
    <>
    <div className="fixed bottom-6 right-2 md:right-8">
      {showChat && (
        <>
          <div className="relative bg-white w-60 md:w-96 h-96 rounded-lg shadow-lg overflow-hidden">
            <iframe
              allow="microphone;"
              width="100%"
              height="100%"
              src="https://console.dialogflow.com/api-client/demo/embedded/98459629-507f-4ca3-89f5-e73aedab374a"
              className="absolute inset-0"
            />
            <button
              onClick={toggleChat}
              className="absolute top-0 right-0 m-2 bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center"
            >
              <FaTimes />
            </button>
          </div>
        </>
      )}
      {!showChat && (
        <button
          onClick={toggleChat}
          className="chat-button bg-deep-blue rounded-full text-white flex items-center justify-center w-14 h-14"
        >
          <Image src={Bot}
            alt="chatbot"
            width={30}
            height={30}
           className="items-center justify-center" />
        </button>
      )}
    </div>
  </>
  )};
export default dialoguechatbot;
