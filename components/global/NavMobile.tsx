import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

interface NavMobileProps {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}

function NavMobile({ 
  isMenuOpen,
  setIsMenuOpen, 
}: NavMobileProps) {
  
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div
      id="mobile-navigation"
      className={`absolute right-0 top-0 overflow-hidden rounded-md bg-white shadow-lg transition-[width] duration-600 ease-in-out ${
        isMenuOpen ? "w-40" : "w-0"
      }`}
    >
      <nav
        className={`flex w-40 flex-col gap-1 px-3 pb-3 pt-12 font-medium transition-opacity duration-600 ease-in-out ${
          isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <Link
          href="/"
          onClick={closeMenu}
          className="rounded px-3 py-2 hover:bg-gray-100"
        >
          Home
        </Link>

        <Link
          href="/projects"
          onClick={closeMenu}
          className="rounded px-3 py-2 hover:bg-gray-100"
        >
          Projects
        </Link>

        <Link
          href="/contact"
          onClick={closeMenu}
          className="rounded px-3 py-2 hover:bg-gray-100"
        >
          Contact
        </Link>
      </nav>
    </div>
  )
}

export default NavMobile