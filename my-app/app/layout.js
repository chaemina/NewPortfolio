import "./globals.css";

export const metadata = {
  title: "당근 근처의 당근",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
