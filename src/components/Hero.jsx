// import React, { useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// /** Uses the same fonts declared in Navbar.jsx: Cormorant Garamond (display) + Poppins (sans) */

// const galleryImages = [
//   { src: "/images/h1.avif", alt: "Hotel lobby" },
//   { src: "/images/h2.avif", alt: "Dining hall" },
//   { src: "/images/h3.avif", alt: "Courtyard terrace" },
//   { src: "/images/h4.avif", alt: "Guest room" },
// ];

// const Hero = () => {
//   const [active, setActive] = useState(0);

//   const prev = () =>
//     setActive((i) => (i === 0 ? galleryImages.length - 1 : i - 1));
//   const next = () =>
//     setActive((i) => (i === galleryImages.length - 1 ? 0 : i + 1));

//   return (
//     <section
//       className="relative h-screen min-h-[820px] w-full overflow-hidden bg-cover bg-center bg-no-repeat "
//       style={{ backgroundImage: "url('/images/hero.avif')" }}
//     >
//       {/* Dark overlay + subtle vignette for legibility */}
//       <div className="absolute inset-0 bg-black/50" />
//       <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />

//       {/* Left ornamental border column: top + bottom pieces, guaranteed visible with a gap */}
//       <div className="absolute inset-y-0 left-4 z-10 flex w-14 sm:w-20 md:w-24 lg:w-28 xl:w-32 flex-col justify-between py-4 pointer-events-none select-none">
//         <img
//           src="/images/leftside.png"
//           alt="leftside ornamental border"
//           aria-hidden="true"
//           className="h-[48%] w-full object-contain object-left-top opacity-90"
//         />
//         <img
//           src="/images/down-left.png"
//           alt="down-left ornamental border"
//           aria-hidden="true"
//           className="h-[48%] w-full object-contain object-left-bottom opacity-90"
//         />
//       </div>

//       {/* Right ornamental border column: top + bottom pieces, guaranteed visible with a gap */}
//       <div className="absolute inset-y-0 right-4 z-10 flex w-14 sm:w-20 md:w-24 lg:w-28 xl:w-32 flex-col justify-between py-4 pointer-events-none select-none">
//         <img
//           src="/images/rightside.png"
//           alt="rightside ornamental border"
//           aria-hidden="true"
//           className="h-[48%] w-full object-contain object-right-top opacity-90"
//         />
//         <img
//           src="/images/down-right.png"
//           alt="down-right ornamental border"
//           aria-hidden="true"
//           className="h-[48%] w-full object-contain object-right-bottom opacity-90"
//         />
//       </div>

//       {/* Hero content */}
//       <div className="relative z-20 flex flex-col items-center justify-center px-6 pb-28 h-full">
//         <div className="max-w-5xl mx-auto text-center text-[#f3e6bd] ">
//           <h1 className="font-normal text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-2px leading-[1.28] text-[#f3e6bd]">
//             A Fortress of Legends, History & Mystery
//           </h1>

//           <p className="mt-4 mx-auto max-w-2xl text-sm sm:text-base md:text-2xl leading-7 sm:leading-[1.08] text-[#f3e6bd]">
//             Discover how knights, nobles, and servants lived within the castle's towering walls during its golden age. We welcome you to step back in time
//           </p>
//         </div>
//       </div>

//       {/* Floating gallery strip, anchored near the bottom like the reference */}
//       <div className="absolute inset-x-0 bottom-8 sm:bottom-18 z-50 flex items-center justify-center gap-3 sm:gap-4 px-4">
//         <button
//           onClick={prev}
//           aria-label="Previous image"
//           className="hidden sm:flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/40 text-white hover:bg-white/10 transition"
//         >
//           <ChevronLeft size={18} />
//         </button>

//         <div className="flex gap-3 sm:gap-8">
//           {galleryImages.map((img, i) => (
//             <button
//               key={img.src}
//               onClick={() => setActive(i)}
//               className={`relative h-16 w-24 sm:h-20 sm:w-32 md:h-24 md:w-36 overflow-hidden transition-all duration-300 ${
//                 active === i ? "scale-105" : "opacity-70 hover:opacity-100"
//               }`}
//             >
//               <img
//                 src={img.src}
//                 alt={img.alt}
//                 className="h-full w-full object-cover"
//               />
//             </button>
//           ))}
//         </div>

//         <button
//           onClick={next}
//           aria-label="Next image"
//           className="hidden sm:flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/40 text-white hover:bg-white/10 transition"
//         >
//           <ChevronRight size={18} />
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Hero;


import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/** Uses the same fonts declared in Navbar.jsx: Cormorant Garamond (display) + Poppins (sans) */

const galleryImages = [
  { src: "/images/h1.avif", alt: "Hotel lobby" },
  { src: "/images/h2.avif", alt: "Dining hall" },
  { src: "/images/h3.avif", alt: "Courtyard terrace" },
  { src: "/images/h4.avif", alt: "Guest room" },
];

const Hero = () => {
  const [active, setActive] = useState(0);

  const prev = () =>
    setActive((i) => (i === 0 ? galleryImages.length - 1 : i - 1));
  const next = () =>
    setActive((i) => (i === galleryImages.length - 1 ? 0 : i + 1));

  return (
    <section
      className="relative h-screen min-h-[800px] sm:min-h-[820px] w-full overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/hero.avif')" }}
    >
      {/* Dark overlay + subtle vignette for legibility */}
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />

      {/* Left ornamental border column — hidden on small screens, visible from md+ */}
      <div className="hidden md:flex absolute inset-y-0 left-4 z-10 w-20 lg:w-28 xl:w-32 flex-col justify-between py-4 pointer-events-none select-none">
        <img
          src="/images/leftside.png"
          alt="leftside ornamental border"
          aria-hidden="true"
          className="h-[48%] w-full object-contain object-left-top opacity-90"
        />
        <img
          src="/images/down-left.png"
          alt="down-left ornamental border"
          aria-hidden="true"
          className="h-[48%] w-full object-contain object-left-bottom opacity-90"
        />
      </div>

      {/* Right ornamental border column — hidden on small screens, visible from md+ */}
      <div className="hidden md:flex absolute inset-y-0 right-4 z-10 w-20 lg:w-28 xl:w-32 flex-col justify-between py-4 pointer-events-none select-none">
        <img
          src="/images/rightside.png"
          alt="rightside ornamental border"
          aria-hidden="true"
          className="h-[48%] w-full object-contain object-right-top opacity-90"
        />
        <img
          src="/images/down-right.png"
          alt="down-right ornamental border"
          aria-hidden="true"
          className="h-[48%] w-full object-contain object-right-bottom opacity-90"
        />
      </div>

      {/* Hero content */}
      <div className="relative z-20 flex flex-col items-center justify-center px-4 sm:px-6 md:px-10  -mt-24 sm:-mt-0 sm:pb-28 h-full">
        <div className="max-w-5xl mx-auto text-center text-[#f3e6bd]">
          <h1 className="font-normal text-5xl md:text-6xl lg:text-7xl tracking-2px leading-[1.2] sm:leading-[1.28] text-[#f3e6bd] px-2">
            A Fortress of Legends, History &amp; Mystery
          </h1>

          <p className="mt-4 mx-auto max-w-2xl text-lg md:text-xl lg:text-2xl leading-6 sm:leading-7 md:leading-[1.08] text-[#f3e6bd] px-2">
            Discover how knights, nobles, and servants lived within the castle's
            towering walls during its golden age. We welcome you to step back in
            time
          </p>
        </div>
      </div>

      {/* ============ MOBILE: Single-image slider (visible below sm) ============ */}
      <div className="flex sm:hidden absolute inset-x-0 bottom-6 z-50 flex-col items-center gap-3 px-4">
        {/* Single large active image */}
        <div className="relative w-full max-w-sm overflow-hidden ">
          <img
            src={galleryImages[active].src}
            alt={galleryImages[active].alt}
            className="sm:h-40 h-55  w-full object-cover"
          />
          {/* Caption overlay */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-3 py-2">
            <p className="text-xs text-[#f3e6bd] font-medium">
              {galleryImages[active].alt}
            </p>
          </div>
        </div>

        {/* Prev / Next arrows + dots */}
        <div className="flex items-center gap-4">
          <button
            onClick={prev}
            aria-label="Previous image"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 text-white hover:bg-white/10 transition"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex gap-1.5">
            {galleryImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  active === i
                    ? "w-6 bg-[#f3e6bd]"
                    : "w-2 bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Next image"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 text-white hover:bg-white/10 transition"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* ============ DESKTOP: Thumbnail strip (visible from sm+) ============ */}
      <div className="hidden sm:flex absolute inset-x-0 bottom-8 sm:bottom-10 md:bottom-12 z-50 items-center justify-center gap-3 sm:gap-4 px-4">
        <button
          onClick={prev}
          aria-label="Previous image"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/40 text-white hover:bg-white/10 transition"
        >
          <ChevronLeft size={18} />
        </button>

        <div className="flex gap-3 sm:gap-4 md:gap-8">
          {galleryImages.map((img, i) => (
            <button
              key={img.src}
              onClick={() => setActive(i)}
              className={`relative h-20 w-28 md:h-24 md:w-36 shrink-0 overflow-hidden rounded-md transition-all duration-300 ${
                active === i
                  ? "scale-105 ring-2 ring-[#f3e6bd]/70"
                  : "opacity-70 hover:opacity-100"
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>

        <button
          onClick={next}
          aria-label="Next image"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/40 text-white hover:bg-white/10 transition"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
};

export default Hero;