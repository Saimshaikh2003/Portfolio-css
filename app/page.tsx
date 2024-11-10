"use client";

import About from "./Components/About";
import Contact from "./Components/Contact";
import React from "react";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("aos").then((AOS) => {
        AOS.init({
          easing: "ease-out-back",
          duration: 1200,
          delay: 100,
          mirror: true,
          anchorPlacement: "bottom-bottom",
          offset: 160,
        });
      });
    }
  }, []);
  return (
    <main>
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <About />
    </main>
  );
}
