import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa6";

const Navbar: React.FC = () => {
  return (
    <nav className="w-full fixed top-0 bg-background z-50 border-b border-b-neutral-200">
      <div className="w-full fixed top-0 h-1 bg-gradient-to-r from-violet-500 via-rose-500 to-orange-500"></div>
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-4 flex items-center justify-between gap-4">
        <Link href="/" className="text-3xl font-bold">
          Keep
        </Link>
        <a
          href="https://github.com/robiuzzaman4/keep"
          target="_blank"
          className="group flex items-center gap-1"
        >
          <FaGithub />
          <p className="group-hover:underline">Github</p>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
