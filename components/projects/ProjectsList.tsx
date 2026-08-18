"use client";

import ProjectCard from './ProjectCard';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from 'react';

gsap.registerPlugin( useGSAP, ScrollTrigger );

const projectLists = [
    {
      name: "Voiceprint AI",
      tools: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase", "LLM Integration", "Authentication"],
      description:
        "A hackathon writing-analysis platform that allows users to create a writing profile, compare new drafts against their established writing style, and review consistency results through a responsive frontend experience.",
      imageLink: "/voiceprint-ai.png",
      liveLink: "https://voice-print-ai.vercel.app/",
      gitHubLink: "https://github.com/thientimothy-nguyen/voiceprint-ai",
    },
    {
      name: "Skinstric AI",
      tools: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP", "REST APIs", "Browser APIs"],
      description:
        "A demographic-analysis web application that lets users submit images through webcam capture or image upload, sends data to APIs, and displays predicted age, gender, and race results with responsive loading, validation, error, and navigation states.",
      imageLink: "/skinstric-ai.png",
      liveLink: "https://skinstric-ai-frontend.vercel.app/",
      gitHubLink: "https://github.com/thientimothy-nguyen/skinstric-ai-frontend",
    },
    {
      name: "Summarist",
      tools: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase", "Stripe", "Authentication"],
      description:
        "A responsive book-summary platform where users can discover, read, and listen to condensed book content, featuring reusable components, protected content, dynamic book pages, authentication flows, and subscription functionality.",
      imageLink: "/summarist.png",
      liveLink: "https://summarist-web.vercel.app/",
      gitHubLink: "https://github.com/thientimothy-nguyen/summarist-virtual-internship",
    },
    {
      name: "Netflix Clone",
      tools: ["React", "Vite", "Tailwind CSS", "Zustand", "Clerk", "TMDB API"],
      description:
        "A Netflix-inspired streaming application with authentication, dynamic movie data, reusable media components, loading states, and centralized state management to recreate a modern streaming-platform experience.",
      imageLink: "/netflix-clone.png",
      liveLink: "https://netreact-ui.vercel.app/Netflix-Clone-Project/",
      gitHubLink: "https://github.com/thientimothy-nguyen/netflix-clone-project",
    },
    {
      name: "React Shop",
      tools: ["React", "JavaScript", "CSS", "Routing", "Reusable Components", "Responsive Design"],
      description:
        "A responsive shopping-style frontend project built with React, focusing on product layout, reusable components, routing, clean UI structure, and responsive design across different screen sizes.",
      imageLink: "/react-shop.png",
      liveLink: "https://thientimothy-nguyen.github.io/react-shop-project/",
      gitHubLink: "https://github.com/thientimothy-nguyen/react-shop-project",
    },
    {
      name: "NFT Ultraworld",
      tools: ["React", "JavaScript", "CSS", "API Integration", "Routing"],
      description:
        "A responsive NFT marketplace application developed from a forked virtual internship starter project, focused on browsing NFT collections, viewing item details, handling dynamic API data, managing loading states, and structuring routes.",
      imageLink: "/nft-ultraworld.png",
      liveLink: "https://ultraworld-nft.vercel.app/",
      gitHubLink: "https://github.com/thientimothy-nguyen/nft-marketplace-virtual-internship",
    },
  ];


function ProjectsList() {
  const projectsContainerRef = useRef<HTMLOListElement>(null);

  useGSAP(() => {
    const container = projectsContainerRef.current;
    if (!container) return;

    const projects = gsap.utils.toArray<HTMLLIElement>(".project", container);

    projects.forEach(project => {

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: project,
          scroller: container,
          horizontal: true,
          scrub: 1,
          start: "left right",
          end: "center 10%"
        }
      })
    
      tl
        .fromTo(
          project, {
            scale: 0.70,
          },
          {
            scale: 1,
            ease: "none",
            duration: 2.75,
          })
        .to(
          project,{
            scale: 0.70,
            ease: "none",
          })
      })
    
  }, {
    scope: projectsContainerRef
  });

  return (
    <section 
      className="global-container">
      <ol 
        className="row flex items-center h-full overflow-x-scroll scrollbar-none pl-[10vw] pr-[25vw]"
        ref={projectsContainerRef}>
        {projectLists.map(project => (
          <li 
            key={project.name}
            className='project'>
            <ProjectCard
              name={project.name}
              tools={project.tools}
              description={project.description}
              imageLink={project.imageLink}
              liveLink={project.liveLink}
              gitHubLink={project.gitHubLink}
            />
          </li>
        ))}
      </ol>
    </section>
  )
}

export default ProjectsList