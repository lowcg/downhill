
import Navbar from '@/components/navbar/Navbar';
import '../styles/global.css'
import Footer from '@/components/footer/Footer';
export const metadata = {
  title: "Academy of Technology, 2024",
  description: "Official Website of Academy of Technology, Adisaptagram",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
