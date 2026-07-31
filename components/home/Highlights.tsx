"use client";

import { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import Image from "next/image";

function Highlights() {
    const [isModalOpened, setIsModalOpened] = useState(false);
    const [modalLabel, setModalLabel] = useState("");
    const [modalDescription, setModalDescription] = useState("");


    const softSkills = [
        {
            label: "Growth-Minded",
            position: "left-[50%] top-[50%]",
            size: "text-3xl md:text-5xl",
            example:
            "Continuously improves through feedback, project-based learning, and adapting to modern frontend tools.",
        },
        {
            label: "Communicative",
            position: "left-[50%] top-[18%]",
            size: "text-sm md:text-xl",
            example:
            "Shares progress clearly with teammates, documents blockers, and explains technical decisions in a practical way.",
        },
        {
            label: "Collaborative",
            position: "left-[30%] top-[34%]",
            size: "text-xl md:text-3xl",
            example:
            "Works well with teammates to plan features, divide responsibilities, solve problems, and deliver shared project goals.",
        },
        {
            label: "Reliable",
            position: "left-[70%] top-[34%]",
            size: "text-xl md:text-3xl",
            example:
            "Follows through on assigned work, meets deadlines, and maintains consistent effort in team-based projects.",
        },
        {
            label: "Accountable",
            position: "left-[32%] top-[66%]",
            size: "text-xl md:text-3xl",
            example:
            "Takes responsibility for debugging issues, improving implementation quality, and completing features properly.",
        },
        {
            label: "Fast Learner",
            position: "left-[68%] top-[66%]",
            size: "text-xl md:text-3xl",
            example:
            "Quickly picks up new frameworks, APIs, libraries, and project requirements through hands-on development.",
        },
        {
            label: "Coachable",
            position: "left-[15%] top-[22%]",
            size: "text-sm md:text-xl",
            example:
            "Applies mentor, teammate, and code review feedback to improve workflow, code quality, and project outcomes.",
        },
        {
            label: "Detail-Oriented",
            position: "left-[85%] top-[22%]",
            size: "text-sm md:text-xl",
            example:
            "Catches layout, responsiveness, validation, and user experience issues before they affect the final product.",
        },
        {
            label: "Proactive",
            position: "left-[14%] top-[78%]",
            size: "text-sm md:text-xl",
            example:
            "Identifies improvements, researches solutions, and resolves blockers before they slow down team progress.",
        },
        {
            label: "Open to Feedback",
            position: "left-[86%] top-[78%]",
            size: "text-sm md:text-xl",
            example:
            "Uses feedback as a tool to improve implementation, communication, and overall development habits.",
        },
        {
            label: "Ownership Mindset",
            position: "left-[50%] top-[88%]",
            size: "text-sm md:text-xl",
            example:
            "Takes initiative to build, test, refine, and polish features from start to finish.",
        },
    ];

    return (
        <div 
            className="row h-screen panel relative z-2 shadow-2xl"
        >
            <Image 
                src="/galaxy-background.avif"
                alt="Galaxy background" 
                fill
                sizes="100"
             />

            {softSkills.map((skill, i) => (
                <span 
                    key={skill.label} 
                    className={`${skill.position} ${skill.size} float-around-${(i%3) + 1} absolute -translate-x-1/2 -translate-y-1/2 font-bold tracking-wide  cursor-pointer transition-color duration-300 ease-out text-white text-shadow-md text-shadow-black hover:text-shadow-cyan-400`}
                    onClick={() => {
                        setModalLabel(skill.label);
                        setModalDescription(skill.example);
                        setIsModalOpened(true);
                    }}
                >
                    {skill.label}
                </span>
            ))}

            {/* Modal backdrop */}
            <div
                className={`absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-6 transition-opacity duration-300 ${isModalOpened ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
                onClick={() => setIsModalOpened(false)}
            >
                {/* Modal card — stop propagation so clicking inside doesn't close */}
                <div
                    className={`relative bg-white text-black rounded-2xl shadow-2xl w-full max-w-md p-8 flex flex-col gap-5 transition-all duration-300 ${isModalOpened ? "scale-100 opacity-100" : "scale-90 opacity-0"}`}
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Close button */}
                    <button
                        aria-label="Close modal"
                        className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-black/8 transition-colors duration-200"
                        onClick={() => setIsModalOpened(false)}
                    >
                        <RiCloseLine size={22} className="text-black/60" />
                    </button>

                    {/* Label chip */}
                    <span className="self-start text-xs font-semibold tracking-[0.2em] uppercase bg-black text-white px-3 py-1 rounded-full">
                        Soft Skill
                    </span>

                    {/* Skill name */}
                    <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight leading-tight">
                        {modalLabel}
                    </h2>

                    {/* Divider */}
                    <div className="h-px bg-black/10 w-full" />

                    {/* Description */}
                    <p className="text-black/70 text-sm md:text-base leading-relaxed">
                        {modalDescription}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Highlights