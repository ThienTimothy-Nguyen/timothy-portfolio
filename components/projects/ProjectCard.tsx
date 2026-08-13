"use client";
import Image from "next/image";
import { useState } from "react";
import { FaGithub, FaLink } from "react-icons/fa6";

interface ProjectCardProps {
  name: string;
  tools: string[];
  description: string;
  imageLink: string;
  liveLink: string;
  gitHubLink: string;
}

function ProjectCard({
  name,
  tools,
  description,
  imageLink,
  liveLink,
  gitHubLink,
}: ProjectCardProps) {
  const [isLinksShowed, setIsLinksShowed] = useState(false);

  return (
    <div className="shadow-xl border border-black rounded-lg overflow-hidden">
      <figure 
        className="bg-gray-400 h-[56vw] max-h-80 min-w-[72vw] md:min-w-[60vw] lg:min-w-[44vw] rounded-t-lg relative overflow-hidden"
        onMouseEnter={() => setIsLinksShowed(true)}
        onMouseLeave={() => setIsLinksShowed(false)}
      >
        <Image 
          src={imageLink}
          alt={`${name} overview`} 
          fill
          sizes="100"
          loading="eager"
          className={`${isLinksShowed ? "scale-105" : "scale-100"} transition-transform duration-500 ease-in-out`}
          />

        <div className={`flex flex-col justify-center items-center absolute inset-0 transition-color duration-500 ease-in-out ${isLinksShowed && "bg-black/50"} gap-4`}>
          <div className="w-full flex justify-center items-center gap-10">
            <a 
              href={gitHubLink} 
              target="_blank"
              className={`${isLinksShowed ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0"} transition-all duration-500 ease-in-out hover:opacity-70 text-white flex flex-col justify-center items-center gap-1 font-semibold`}
            >
              <FaGithub size={40} />
              <span>GitHub</span>
            </a>
            <a 
              href={liveLink} 
              target="_blank"
              className={`${isLinksShowed ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0"} transition-all duration-500 ease-in-out hover:opacity-70 text-white flex flex-col justify-center items-center gap-1 font-semibold`}
            >
              <FaLink size={40} className="text-white" />
              <span>Live demo</span>
            </a>
          </div>
        </div>
      </figure>

      <div className="h-[24vw] sm:h-[40vw] max-h-60 p-2 flex flex-col gap-1.5 border-t border-black text-white bg-black">
        <h1 className="font-bold text-xl">{name}</h1>
        <h2 className="text-gray-400 text-sm sm:text-base">{tools.join(" | ")}</h2>
        <p className="text-[16px] leading-6 hidden sm:block">{description}</p>
      </div>
    </div>
  )
}

export default ProjectCard