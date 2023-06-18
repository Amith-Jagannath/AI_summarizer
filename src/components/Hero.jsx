import React from "react";
import { logo } from "../assets";
const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        {/* <img src={logo} alt="logo" className="w-28 object-contain" /> */}
        <h1 className="w-28 object-contain text-2xl font-bold logo-text">
          SUMMARIZER
        </h1>
        <button
          type="button"
          className="black_btn"
          onClick={() => window.open("https://github.com/Amith-Jagannath")}
        >
          Github
        </button>
      </nav>
      <h1 className="head_text">
        Summarize Article with <br className="max-md:hidden" />
        <span className="purple_gradient">Rapid API</span>
      </h1>
      <h2 className="desc ">
        Simplify your reading with summize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;
