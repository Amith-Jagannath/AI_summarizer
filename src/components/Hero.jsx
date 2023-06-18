import React from "react";
import { logo } from "../assets";
const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="logo" className="w-28 object-contain" />
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
        <span className="orange_gradient">OpenAL GPT-4</span>
      </h1>
      <h2 className="desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eaque
        molestiae ullam sint consequatur at dolore numquam et obcaecati,
      </h2>
    </header>
  );
};

export default Hero;
