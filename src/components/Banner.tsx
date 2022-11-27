import React from "react";

const Banner = () => {
  return (
    <section className="bg-gradient-to-bl from-purple to-pink flex-1 h-full relative">
      <div className="absolute bg-white opacity-20 top-0 left-0 w-full h-full"></div>
      <div className="absolute bg-white opacity-50 top-12 left-1/2 w-4/5 h-4/5 -translate-x-1/2" />
      <div className="absolute flex flex-col justify-center top-12 left-1/2 w-4/5 h-4/5 -translate-x-1/2 text-white text-6xl font-extrabold px-20 pb-40 space-y-4">
        <p>PROACTIVE</p>
        <p>PROTECTION</p>
        <p>AGAINST</p>
        <p className="text-black">SCAMS.</p>

        <div className="text-xl font-semibold mt-8 space-y-4">
          <p>Stay secured.</p>
          <p>
            In 2022, approximately{" "}
            <span className="underline">$28.740.000</span> has
            <br />
            been stolen by business impostors
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
