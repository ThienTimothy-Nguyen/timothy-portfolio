import Image from "next/image";

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
  return (
    <div className="shadow-xl border border-black rounded-lg overflow-hidden">
      <figure 
        className="bg-gray-400 h-[56vw] max-h-80 min-w-[68vw] md:min-w-[56vw] lg:min-w-[40vw] rounded-t-lg relative">
        <Image 
          src={imageLink}
          alt={`${name} overview`} 
          fill
          sizes="100"
          loading="eager"
          />
      </figure>
      <div className="h-[32vw] max-h-60 p-2 flex flex-col gap-1.5 border-t border-black text-white bg-black">
        <h1 className="font-bold text-xl">{name}</h1>
        <h2 className="text-gray-400 text-sm sm:text-base">{tools.join(" | ")}</h2>
        <p className="text-[16px] leading-6 hidden sm:block">{description}</p>
      </div>
    </div>
  )
}

export default ProjectCard