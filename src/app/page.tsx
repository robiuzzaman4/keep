import Hero from "@/components/hero/hero";
import React from "react";

const Home: React.FC = () => {
  return (
    <section className="py-20 w-full max-w-screen-xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
      {/* Hero Component */}
      <Hero />
    </section>
  );
};

export default Home;
