
import Link from "next/link";
import { FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="relative bg-[#0e1320]   text-secondaryText overflow-hidden font-poppins">
      
      {/* Top gradient fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent pointer-events-none" />

      <div className="relative px-4 md:px-12 py-4 md:py-10 flex justify-between flex-wrap gap-16">

        {/* Brand */}
        <div className="md:col-span-2  space-y-6">
        <div className="flex items-center gap-3">
  <img
    src="/assets/logo/Satson Logo.png"
    alt="Satson"
    className="w-40"
  />
</div>


          <p className="text-[16px] leading-relaxed max-w-sm">
            We craft digital solutions that turn visitors into customers.
            Performant, beautiful, and strategic software for growing businesses.
          </p>

          <div className="flex gap-2">
            <Link href="https://in.linkedin.com/company/satson-innovation-pvt-ltd" className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition">
              <FaLinkedinIn />
            </Link>
          
            <a className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white text-sm font-semibold mb-6">Services</h4>
          <ul className="space-y-4 text-sm">
            <li>Web Development</li>
            <li>Mobile Apps</li>
            <li>AI Solutions</li>
            <li>Cloud Services</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-white text-sm font-semibold mb-6">Company</h4>
          <ul className="space-y-4 text-sm">
            
            <li>  
              
               <Link href="/about-us">
                About Us
             </Link>
             </li>
            <li><Link href="/careers">Careers</Link></li>
           
            <li><Link href="/contact-us">Contact</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div >
          <h4 className="text-white text-sm font-semibold mb-6">Legal</h4>
          <ul className="space-y-4 text-sm md:block flex md:gap-0 gap-30 ">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 py-2 text-center text-[10px]  md:text-[14px]  text-secondaryText">
        © 2026 Satsoninnovations. All rights reserved.
      </div>
    </footer>
  )
}














const footerSections = [
  {
    title: "Services",
    links: [
      "Web Development",
      "Pricing",
      "Support",
      "Client Portal",
      "Resources",
    ],
  },
  {
    title: "Company",
    links: [
      "About us",
      "Careers",
      "Blog",
      "Portfolio",
      "Events",
    ],
  },
  {
    title: "Additional",
    links: [
      "FAQ",
      "Partners",
      "Sitemap",
      "Contact",
      "News",
    ],
  },
];

const footerLegalLinks = [
  "Terms of Service",
  "Privacy Policy",
  "Security",
];



// export default function Footer() {
//   return (
//     <footer className="tracking-wide bg-Base px-8 sm:px-12 pt-12 pb-6">
//       <div className="grid min-[1200px]:grid-cols-3 gap-12 xl:gap-16">

//         {/* Left section */}
//         <div className="min-[1200px]:max-w-sm max-w-lg w-full">
//           <img
//             src="assets/logo/Satson Logo.png"
//             alt="Satson Logo"
//             className="w-36"
//           />

//           <p className="mt-6 text-slate-600 leading-relaxed text-sm">
//             We craft digital solutions that turn visitors into customers.
//             Performant, beautiful, and strategic software for growing businesses.
//           </p>

//           {/* Social icons stay as-is (SVG heavy, not worth data abstraction) */}
//           <ul className="mt-6 flex space-x-5">
//             {/* icons */}
//           </ul>
//         </div>

//         {/* Right sections */}
//         <div className="min-[1200px]:col-span-2 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {footerSections.map((section) => (
//             <div key={section.title} className="max-lg:min-w-[140px]">
//               <h4 className="text-white font-semibold text-base">
//                 {section.title}
//               </h4>

//               <ul className="mt-6 space-y-4 font-inter">
//                 {section.links.map((link) => (
//                   <li key={link}>
//                     <a
//                       href="javascript:void(0)"
//                       className="hover:text-white/20 text-secondaryText text-sm font-normal"
//                     >
//                       {link}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>

//       <hr className="mt-10 mb-6 border-gray-300" />

//       {/* Bottom bar */}
//       <div className="flex flex-wrap max-md:flex-col gap-4">
//         <ul className="md:flex md:space-x-6 font-inter max-md:space-y-2">
//           {footerLegalLinks.map((item) => (
//             <li key={item}>
//               <a
//                 href="javascript:void(0)"
//                 className="hover:text-white/20 text-secondaryText text-sm font-normal"
//               >
//                 {item}
//               </a>
//             </li>
//           ))}
//         </ul>

//         <p className="text-slate-600 text-sm md:ml-auto">
//           © 2026 Satsoninnovations. All rights reserved.
//         </p>
//       </div>
//     </footer>
//   );
// }