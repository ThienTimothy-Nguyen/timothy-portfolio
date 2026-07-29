import { FiGithub, FiLinkedin, FiMail, FiPhone, FiFileText, FiArrowUpRight } from "react-icons/fi";

const contacts = [
  {
    label: "Resume",
    value: "View / Download",
    href: "/my-resume.pdf",
    icon: FiFileText,
    external: false,
    description: "Frontend Developer · 1+ yr",
  },
  {
    label: "GitHub",
    value: "github.com/thientimothy-nguyen",
    href: "https://github.com/thientimothy-nguyen",
    icon: FiGithub,
    external: true,
    description: "Open-source work & side projects",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/timothy-nguyen",
    href: "https://www.linkedin.com/in/timothy-nguyen-4b923527a/",
    icon: FiLinkedin,
    external: true,
    description: "Professional background & experience",
  },
  {
    label: "Email",
    value: "timothynguyen2729@gmail.com",
    href: "mailto:timothynguyen2729@gmail.com",
    icon: FiMail,
    external: false,
    description: "Best way to reach me",
  },
  {
    label: "Phone",
    value: "+1 (734) 385-6878",
    href: "tel:+17343856878",
    icon: FiPhone,
    external: false,
    description: "Available Mon – Fri, 9 am – 5 pm",
  },
];

export default function ContactPage() {
  return (
    <main className="h-screen flex flex-col md:flex-row overflow-hidden">
      
      <section className="bg-black text-white flex flex-col justify-between p-8 md:p-14 md:w-2/5 shrink-0">
        <div className="flex flex-col gap-6">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-white">
            Contact
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
            Let&apos;s work<br />together.
          </h1>
          <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-xs">
            Open to full-time roles, freelance work, and interesting conversations.
          </p>
        </div>

        {/* Availability badge */}
        <div className="flex items-center gap-2 mt-10 md:mt-0">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shrink-0" />
          <span className="text-[14px] whitespace-nowrap font-medium tracking-wide text-cyan-400">
            Open to new opportunities
          </span>
        </div>
      </section>

      {/* ── Right panel ── */}
      <section className="flex-1 bg-white flex flex-col justify-center overflow-y-auto">
        <ul className="divide-y divide-black/10">
          {contacts.map(({ label, value, href, icon: Icon, external, description }) => (
            <li key={label}>
              <a
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="group flex items-center justify-between gap-4 px-8 md:px-14 py-5 md:py-6
                           transition-colors duration-200 hover:bg-black hover:text-white"
              >
                {/* Icon + text */}
                <div className="flex items-center gap-5 min-w-0">
                  <span className="shrink-0 w-10 h-10 rounded-lg border border-black/20 flex items-center justify-center
                                   group-hover:border-white/30 transition-colors duration-200">
                    <Icon size={18} />
                  </span>

                  <div className="flex flex-col min-w-0 text-start">
                    <span className="text-xs font-semibold tracking-widest uppercase text-black/40 group-hover:text-white/40 transition-colors duration-200">
                      {label}
                    </span>
                    <span className="font-bold text-sm md:text-base truncate">
                      {value}
                    </span>
                    <span className="text-xs text-black/40 group-hover:text-white/40 transition-colors duration-200 hidden md:block">
                      {description}
                    </span>
                  </div>
                </div>

                {/* Arrow */}
                <FiArrowUpRight
                  size={20}
                  className="shrink-0 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0
                             transition-all duration-200"
                />
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
