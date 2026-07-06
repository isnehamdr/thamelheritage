import React from "react";

/** Uses the same fonts declared in Navbar.jsx: Cormorant Garamond (display) + Poppins (sans) */

const timelineItems = [
  {
    year: "1247",
    title: "THE CASTLE IS BORN",
    text: "Construction of Blackthorn Castle begins under the command of Lord Edric Blackthorn, establishing a stronghold that will shape the region's history for centuries.",
  },
  {
    year: "1892",
    title: "THE GRAND RESTORATION",
    text: "After decades of abandonment, Blackthorn Castle is restored, reviving its former grandeur and opening its gates to the world once again.",
  },
];

const About2 = () => {
  return (
    <section className="w-full bg-white px-6 py-16 sm:py-20 md:py-24 " 
     style={{
        backgroundImage: "url('/images/bg-print.svg')",
        backgroundRepeat: "repeat",
        backgroundSize: "520px",
      }}
    
    >
      
    </section>
  );
};

export default About2;