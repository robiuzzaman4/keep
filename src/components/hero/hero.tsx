import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 max-w-screen-md mx-auto py-20">
      <div className="bg-gradient-to-r from-violet-500 via-rose-500 to-orange-500 w-24 h-8 rounded-full grid place-items-center">
        <div className="w-[92px] h-7 bg-slate-50 rounded-full grid place-items-center">
          <p className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 via-rose-500 to-orange-500 text-xl font-semibold text-center">
            Keep
          </p>
        </div>
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-center tracking-tight">
        A Set Of Complex Reuseable Components For Your Next{" "}
        <span className="text-sky-500">React,</span>{" "}
        <span className="text-sky-500">Tailwind</span> Project.
      </h1>
    </div>
  );
};

export default Hero;
