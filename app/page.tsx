"use client";

import { useRef } from "react";
import Highlights from "@/components/home/Highlights";
import ProjectsHighlights from "@/components/home/ProjectsHighlights";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import AboutMe from "@/components/home/AboutMe";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Home() {
  const panelContainerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const container = panelContainerRef.current;
      if (!container) return;

      const panels = gsap.utils.toArray<HTMLElement>(".panel", container);
      if (panels.length < 2) return;

      gsap.set(panels[0], {
        yPercent: 0,
      })

      gsap.set(panels.slice(1), {
        yPercent: 100,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 2,
          end: () => "+=" + window.innerHeight * (panels.length - 1),
        }
      })

      panels.slice(1).forEach((panel) => {
        tl.to(panel, {
          yPercent: 0,
          ease: "none",
        })
      })
      
    },
    {
      scope: panelContainerRef,
    }, 
  );

  return (
    <main className="flex flex-col justify-center items-center text-center">
      <section className="global-container">
        <div className="row flex flex-col gap-2 md:gap-6 text-start md:text-center max-w-5xl md:items-center">
          <h1 className="text-4xl md:text-5xl text-shadow-lg text-shadow-cyan-300 font-extrabold">
            Hi, I am Timothy Nguyen
          </h1>
          <h2 className="text-gray-600 text-shadow-teal-200 text-shadow-lg tracking-wide md:tracking-widest text-xl md:text-2xl font-bold">
            Frontend Developer. Product-minded builder. Fast learner.
          </h2>
        </div>
      </section>

      <section className="w-full">
        <div ref={panelContainerRef} className="panel-container w-full h-screen overflow-hidden relative">
          
          <AboutMe />

          <Highlights />

          <ProjectsHighlights />
        </div>
      </section>
    </main>
  );
}