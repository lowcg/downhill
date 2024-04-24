"use client"

import { React,useEffect } from 'react';

export default function Bot() {
  useEffect(() => {
    const initBotpress = () => {
        window.botpressWebChat.init({
          "composerPlaceholder": "Chat with AI-Assistant",
          "botConversationDescription": "Ask me anything about AOT",
          "botId": "f15a5de8-8cc0-4e7b-a45f-fa65784e620a",
          "hostUrl": "https://cdn.botpress.cloud/webchat/v1",
          "messagingUrl": "https://messaging.botpress.cloud",
          "clientId": "f15a5de8-8cc0-4e7b-a45f-fa65784e620a",
          "webhookId": "b6876d6f-fc47-43c1-be3a-1c7428b9dfac",
          "lazySocket": true,
          "themeName": "prism",
          "botName": "AI-Assistant",
          "stylesheet": "https://webchat-styler-css.botpress.app/prod/64fa7978-e843-41b5-8cc1-d57ff23092a0/v86173/style.css",
          "frontendVersion": "v1",
          "useSessionStorage": true,
          "theme": "prism",
          "themeColor": "#2563eb"
    });
    }
    const script = document.createElement('script');
    script.src = "https://cdn.botpress.cloud/webchat/v1/inject.js";
    script.onload = initBotpress;
    document.body.appendChild(script);
  }, []);

  return null;
}