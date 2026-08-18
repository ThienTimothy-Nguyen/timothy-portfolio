import Link from 'next/link';
import ExtraToolsList from './ExtraToolsList';

function ProjectsHighlights() {
  return (
    <div className="row flex flex-col justify-center items-center gap-14 py-10 h-screen panel absolute inset-0 z-2 bg-white">
      <div className='flex flex-col justify-between items-center gap-10'>
        <h1 className='text-3xl md:text-4xl font-semibold'>
          Every project is an opportunity 
        </h1>
        <h2 className='flex flex-col w-full max-w-88 md:max-w-md justify-between gap-2 md:gap-4 text-lg md:text-2xl'>
          <span className='text-start float-around-1'>To think deeper</span>
          <span className='text-end float-around-2'>Build more intentionally</span>
          <span className='text-start float-around-3'>Create better experiences</span>
        </h2>
      </div>

      <ExtraToolsList />
      
      <Link className="" href={'/projects'}>
        <button className="button-primary font-bold py-2 px-8 rounded-lg text-lg">
          See What I&apos;ve Built
        </button>
      </Link>
    </div>
  )
}

export default ProjectsHighlights