import "./globals.css";

export const metadata = {
  title: "신한의 新韓",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
