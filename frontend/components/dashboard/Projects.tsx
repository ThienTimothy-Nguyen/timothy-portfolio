import ProjectsList from "./ProjectsList";

function Projects() {
  return (
    <div className="flex flex-col gap-4">
        <h1 className="text-xl font-bold text-shadow-sm text-shadow-cyan-300">
            My projects
        </h1>
        <ProjectsList />
    </div>
  )
}

export default Projects