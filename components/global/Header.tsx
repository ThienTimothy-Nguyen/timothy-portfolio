"use client";
import Link from "next/link";

function Header() {
  return (
    <div className="global_container bg-white">
        <div className="row flex justify-between items-center h-full gap-3 bg-white z-1 relative">
            <h1 className="text-xl font-extrabold tracking-widest">
              TN
            </h1>
            <nav className="flex justify-between items-center gap-8 font-medium">
                <Link href={'/'} className="link__hover-effect">Home</Link>
                <Link href={'/projects'} className="link__hover-effect">Projects</Link>
                <Link href={'/contact'} className="link__hover-effect">Contact</Link>
            </nav>
        </div>
    </div>
  )
}

export default Header