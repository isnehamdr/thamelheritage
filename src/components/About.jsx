import React from "react";

const About = () => {
  return (
    <section
      className="relative overflow-hidden py-16 md:py-28"
      style={{
        backgroundImage: "url('/images/bg-print.svg')",
        backgroundRepeat: "repeat",
        backgroundSize: "520px",
      }}
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left */}
          <div className="w-full">
            <h1 className="text-[#4a4a48] uppercase leading-[1.2] text-3xl sm:text-4xl lg:text-5xl  font-normal">
              Uncover hidden
              <br />
              passageways,
              <br />
              immerse yourself in
              <br />
              the stories.
            </h1>

            <button className="mt-8 rounded-full bg-black text-white px-6 py-3 uppercase text-sm tracking-[0.2px] transition hover:bg-neutral-800">
              About Us
            </button>

            <div className="mt-24 lg:mt-32 space-y-10">
              <div>
                <h2 className="text-3xl uppercase text-gray-700 tracking-2px">
                  Events & Experiences
                </h2>

                <p className="mt-2 max-w-md text-gray-600  text-xl">
                  Whether you're drawn by history, mystery, or breathtaking
                  views, we welcome you to step back in time.
                </p>
              </div>

              <div>
                <h2 className="text-3xl uppercase text-gray-700 tracking-2px">
                  Private Tours & Exclusive Access
                </h2>

                <p className="mt-2 max-w-md text-gray-600  text-xl">
                  Whether you're drawn by history, mystery, or breathtaking
                  views, we welcome you to step back in time.
                </p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="flex justify-center lg:justify-end w-full">
            <div className="w-full max-w-md sm:max-w-lg lg:max-w-xl border border-[#cbb87a] p-2 sm:p-3">
              <video
                src="/images/video.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-[420px] sm:h-[520px] lg:h-[650px] xl:h-[760px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;