import "./globals.css";
import Header from "@/components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <div className="bg-slate-900 h-screen">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
