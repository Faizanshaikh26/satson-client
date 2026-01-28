// import Hero from "./components/layout/Hero";
// import Navbar from "./components/layout/Navbar";

// import './globals.css'




//  export const metadata={
//     title:"SatSon",

//   }

// export default function Home() {

 
//   return (
    
// <>


// <div className="bg-white min-h-screen relative"> 



//   <Hero/>
 
// </div>

// </>

//   );
// }

import Hero from "./components/layout/Hero"
import Industries from "./components/layout/Industries"
import Navbar from "./components/layout/Navbar"
import SolutionWeProvide from "./components/layout/SolutionWeProvide"

import OurClient from "./components/layout/OurClient"
import PortfolioSection from "./components/layout/Portfolio"

import './globals.css'
import BuildTogether from "./components/layout/BuildTogether"







export const metadata = {
  title: "SatSon",
}

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-Base text-white relative overflow-x-hidden">


      <Navbar/>
      <Hero />
    <SolutionWeProvide/>
    <Industries/>

    <OurClient/>

    <PortfolioSection/>

    <BuildTogether/>




    
    </main>
  )
}
