"use client"
import { Geist, Geist_Mono ,Marcellus,Inter ,Playfair_Display ,Poppins} from "next/font/google";
import "./globals.css";
import Footer from "./components/shared/Footer";
import Navbar from "./components/layout/Navbar";
import { Toaster } from "react-hot-toast"
import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger, ScrollSmoother } from "gsap/all"
import ScrollToTop from "./components/layout/ScrollToTop ";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const marcellus = Marcellus({
  weight: "400",               // REQUIRED
  subsets: ["latin"],
  variable: "--font-marcellus",
  display: "swap",
});;


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfairDisplay",
  display: "swap",
});
const poppins = Poppins({
  weight:"400",
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    const smoother = ScrollSmoother.create({
      smooth: 4,
      effects: true,
    })

    return () => smoother.kill()
  }, [])
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}  ${marcellus.variable}  ${inter.variable} ${playfairDisplay.variable} ${poppins.variable}   antialiased`}
        > 

        <ScrollToTop />
        <Navbar />

        {/* Scroll area */}
        <div id="smooth-wrapper">
          <div id="smooth-content">
            {children}

            {/* Footer MUST be inside */}
            <Footer />
          </div>
        </div>

        <Toaster position="top-right" />

      </body>
    </html>
  );
}
