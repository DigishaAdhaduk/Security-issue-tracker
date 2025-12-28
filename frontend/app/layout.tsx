import "./globals.css";
import Navbar from "../components/Nav";

export const metadata = {
  title: "ApniSec",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
