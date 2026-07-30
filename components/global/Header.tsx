"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaXmark } from "react-icons/fa6";
import NavMobile from "./NavMobile";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="global-container bg-white">
      <div className="row relative z-10 flex h-full items-center justify-between gap-3 bg-white">
        <h1 className="text-xl font-extrabold tracking-widest">
          <Link href="/" onClick={closeMenu}>
            TN
          </Link>
        </h1>

        {/* Desktop navigation */}
        <nav className="hidden items-center justify-between gap-8 font-medium sm:flex">
          <Link href="/" className="link__hover-effect">
            Home
          </Link>

          <Link href="/projects" className="link__hover-effect">
            Projects
          </Link>

          <Link href="/contact" className="link__hover-effect">
            Contact
          </Link>
        </nav>

        {/* Mobile navigation */}
        <div className="relative sm:hidden">
          <button
            type="button"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((current) => !current)}
            className="relative z-20 flex size-10 items-center justify-center rounded-md text-2xl"
          >
            {isMenuOpen ? <FaXmark /> : <FaBars />}
          </button>
          <NavMobile 
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen} />
        </div>
        
      </div>
    </header>
  );
}