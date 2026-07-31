import Link from "next/link";

function Footer() {
  const footerLinks = ["Home", "Projects", "Contact"];

  return (
    <footer className="bg-black global-container text-white">
      <div className="row flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm text-white/70">
          © {new Date().getFullYear()} Timothy. All rights reserved.
        </p>

        <nav aria-label="Footer navigation">
          <ul className="flex items-center gap-6">
            {footerLinks.map((link) => (
              <li key={link}>
                <Link
                  href={`/${link !== "Home" ? link.toLowerCase() : ""}`}
                  className="text-sm font-medium text-white/70 transition-colors duration-300 hover:text-white"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;