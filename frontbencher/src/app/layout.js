import Navbar from '@/components/navbar/Navbar';
import '../styles/global.css'
import Footer from '@/components/footer/Footer';

export const metadata = {
  title: "Academy of Technology, 2024",
  description: "Official Website of Academy of Technology, Adisaptagram",
};

const initBotpress = () => {
 window.botpressWebChat.init({
      "composerPlaceholder": "Chat with bot",
      "botConversationDescription": "This chatbot was built surprisingly fast with Botpress",
      "botId": "f15a5de8-8cc0-4e7b-a45f-fa65784e620a",
      "hostUrl": "https://cdn.botpress.cloud/webchat/v1",
      "messagingUrl": "https://messaging.botpress.cloud",
      "clientId": "f15a5de8-8cc0-4e7b-a45f-fa65784e620a",
      "webhookId": "b6876d6f-fc47-43c1-be3a-1c7428b9dfac",
      "lazySocket": true,
      "themeName": "prism",
      "frontendVersion": "v1",
      "showPoweredBy": true,
      "theme": "prism",
      "themeColor": "#2563eb"
  });
};
export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        
        </head>
      <body>
      
        <Navbar />
        {children}
        <Footer />
        
      </body>
    </html>
  );
}
