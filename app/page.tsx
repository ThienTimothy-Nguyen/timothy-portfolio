import AnimationBoard from "@/components/home/AnimationBoard";
import Highlights from "@/components/home/Highlights";
import Overview from "@/components/home/Overview";
import Link from "next/link";
import { RiArrowDownWideLine } from "react-icons/ri";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center text-center">
      <section className="global_container bg-white z-1 relative">
        <div className="row flex flex-col gap-2 md:gap-6 text-start md:text-center max-w-5xl md:items-center">
          <h1 className="text-4xl md:text-5xl text-shadow-lg text-shadow-cyan-300 font-extrabold">
            Hi, I am Timothy Nguyen
          </h1>
          <h2 className="text-gray-600 text-shadow-teal-200 text-shadow-lg tracking-wide md:tracking-widest text-xl md:text-2xl font-bold">
            Junior Frontend Developer. Product-minded builder. Fast learner.
          </h2>
        </div>
      </section>

      <section className="global_container bg-white z-1 relative">
        <div className="row flex flex-col justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row text-start justify-between gap-8 md:gap-4">
            <Overview />
            <AnimationBoard />
            
          </div>
          <RiArrowDownWideLine
           size={56} />
        </div>
      </section>

      <section className="global_container h-144">
        <Highlights />
      </section>
      

      <section className="global_container bg-white z-1 relative h-154 flex flex-col justify-center items-center">
          <Link className="" href={'/'}>
            <button className="home__features--bg font-bold py-2 px-12 rounded-lg text-2xl">
              See What I&apos;ve Built
            </button>
          </Link>
      </section>
    </main>
  );
}
