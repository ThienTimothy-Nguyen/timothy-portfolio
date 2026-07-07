"use client";
import Link from "next/link";

function Header() {
  return (
    <div className="global_container h-[10vh]">
        <div className="row flex justify-between items-center h-full gap-3 bg-white z-1">
            <figure>
                <div className="w-24 h-12 bg-gray-300"></div>
            </figure>
            <nav className="flex justify-between items-center gap-8 font-medium">
                <Link href={'/'} className="link__hover-effect">Home</Link>
                <Link href={'/dashboard'} className="link__hover-effect">Projects</Link>
                <Link href={'/dashboard'} className="link__hover-effect">Contact</Link>
            </nav>
        </div>
    </div>
  )
}

export default Header