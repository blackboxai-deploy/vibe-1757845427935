import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins"
});

export const metadata: Metadata = {
  title: "Photo2Calendar - Create Beautiful Personalized Photo Calendars",
  description: "Transform your favorite photos into stunning personalized calendars. High-quality printing, fast delivery, and easy customization. Create your photo calendar today!",
  keywords: ["photo calendar", "personalized calendar", "custom calendar", "photo printing", "calendar printing"],
  openGraph: {
    title: "Photo2Calendar - Create Beautiful Personalized Photo Calendars",
    description: "Transform your favorite photos into stunning personalized calendars. High-quality printing, fast delivery, and easy customization.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}