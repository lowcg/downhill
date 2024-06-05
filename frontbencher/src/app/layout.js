import "../styles/global.css";
import Footer from "@/components/footer/Footer";
import Bot from "@/components/chatbot/dialoguechatbot";

export const metadata = {
  title: "Academy of Technology, 2024",
  description: "Official Website of Academy of Technology, Adisaptagram",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <head></head>
      <body>
        {children}
        <Footer />
        <div className="fixed bottom-6 right-2 md:right-8 z-50">
          <Bot/>
        </div>
      </body>
    </html>
  );
}
