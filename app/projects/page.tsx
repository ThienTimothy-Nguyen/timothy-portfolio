import ProjectsList from "@/components/projects/ProjectsList";

export default function page() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center overflow-hidden">
      <section className="global-container">
        <div className="row flex flex-col gap-6">
          <h1 className="font-bold text-3xl md:text-4xl">Featured Projects</h1>
          <h2 className="text-sm md:text-lg leading-6 tracking-wide">A collection of responsive, deployed applications showcasing clean UI implementation, reusable components, API integration, authentication, state management, and production-minded development.</h2>
        </div>
      </section>

      <ProjectsList />
    </main>
  )
}