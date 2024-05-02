"use client"

import { useEffect ,useRef} from 'react';

export default function Bot() {
  const ref=useRef(null);
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
          "stylesheet": "https://webchat-styler-css.botpress.app/prod/64fa7978-e843-41b5-8cc1-d57ff23092a0/v95125/style.css",
          "frontendVersion": "v1",
          "useSessionStorage": true,
          "theme": "prism",
          "themeColor": "#2563eb"
        });

    }
   
    if (ref.current){
      ref.current.src = "https://cdn.botpress.cloud/webchat/v1/inject.js";
      ref.current.onload = initBotpress;
    }
    
    
  }, [ref]);
 
  return (
    <script ref={ref}></script>
  );
}