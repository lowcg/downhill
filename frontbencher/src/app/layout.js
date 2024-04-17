import '../styles/global.css'
export const metadata = {
  title: "Academy of Technology, 2024",
  description: "Official Website of Academy of Technology, Adisaptagram",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
