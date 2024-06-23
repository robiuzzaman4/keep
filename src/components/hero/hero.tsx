import React from "react";
import { Badge } from "../ui/badge";

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 max-w-screen-md mx-auto py-20">
      <Badge
        variant="outline"
        className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 via-rose-500 to-orange-500 rounded-full"
      >
        Open Source
      </Badge>
      <h1 className="text-3xl md:text-4xl font-bold text-center tracking-tight">
        A Set of Complex Reuseable React Components.
      </h1>
    </div>
  );
};

export default Hero;
