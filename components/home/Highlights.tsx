"use client";

function Highlights() {
    const softSkills = [
        {
            label: "Growth-Minded",
            position: "left-[50%] top-[50%]",
            size: "text-3xl md:text-5xl",
        },
        {
            label: "Communicative",
            position: "left-[50%] top-[18%]",
            size: "text-sm md:text-xl",
        },
        {
            label: "Collaborative",
            position: "left-[30%] top-[34%]",
            size: "text-xl md:text-3xl",
        },
        {
            label: "Reliable",
            position: "left-[70%] top-[34%]",
            size: "text-xl md:text-3xl",
        },
        {
            label: "Accountable",
            position: "left-[32%] top-[66%]",
            size: "text-xl md:text-3xl",
        },
        {
            label: "Fast Learner",
            position: "left-[68%] top-[66%]",
            size: "text-xl md:text-3xl",
        },
        {
            label: "Coachable",
            position: "left-[15%] top-[22%]",
            size: "text-sm md:text-xl",
        },
        {
            label: "Detail-Oriented",
            position: "left-[85%] top-[22%]",
            size: "text-sm md:text-xl",
        },
        {
            label: "Proactive",
            position: "left-[14%] top-[78%]",
            size: "text-sm md:text-xl",
        },
        {
            label: "Open to Feedback",
            position: "left-[86%] top-[78%]",
            size: "text-sm md:text-xl",
        },
        {
            label: "Ownership Mindset",
            position: "left-[50%] top-[88%]",
            size: "text-sm md:text-xl",
        },
    ];

    return (
        <div className="row h-screen gradient--gray panel relative z-2 shadow-2xl">
            {softSkills.map((skill, i) => (
                <span key={skill.label} className={`${skill.position} ${skill.size} float-around-${(i%3) + 1} absolute -translate-x-1/2 -translate-y-1/2 font-bold tracking-wide text-black/75`}>
                    {skill.label}
                </span>
            ))}
        </div>
    )
}

export default Highlights