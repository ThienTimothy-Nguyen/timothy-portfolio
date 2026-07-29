import { FiGithub, FiLinkedin, FiMail, FiPhone, FiFileText } from "react-icons/fi";

const contacts = [
  {
    label: "Resume",
    value: "View / Download",
    href: "/timothy-nguyen-resume.pdf",
    icon: FiFileText,
    external: false,
    description: "Frontend Developer · 2+ yrs",
  },
  {
    label: "GitHub",
    value: "github.com/timothy-nguyen",
    href: "https://github.com/timothy-nguyen",
    icon: FiGithub,
    external: true,
    description: "Open-source work & side projects",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/timothy-nguyen",
    href: "https://linkedin.com/in/timothy-nguyen",
    icon: FiLinkedin,
    external: true,
    description: "Professional background & experience",
  },
  {
    label: "Email",
    value: "timothy.nguyen@email.com",
    href: "mailto:timothy.nguyen@email.com",
    icon: FiMail,
    external: false,
    description: "Best way to reach me",
  },
  {
    label: "Phone",
    value: "+1 (555) 012-3456",
    href: "tel:+15550123456",
    icon: FiPhone,
    external: false,
    description: "Available Mon – Fri, 9 am – 6 pm",
  },
];

export default function ContactPage() {
  return (
    <main className="flex flex-col justify-center items-center text-center min-h-screen">
      {/* Hero */}
      <section className="global-container">
        <div className="row flex flex-col gap-2 md:gap-4 text-start md:text-center md:items-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-shadow-lg text-shadow-cyan-300">
            Get in Touch
          </h1>
          <p className="text-gray-600 text-xl md:text-2xl font-bold tracking-wide text-shadow-teal-200 text-shadow-2xs">
            Open to full-time roles, freelance work, and interesting conversations.
          </p>
        </div>
      </section>

      {/* Cards grid */}
      <section className="global-container w-full">
        <ul className="row grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {contacts.map(({ label, value, href, icon: Icon, external, description }) => (
            <li key={label}>
              <a
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="group flex flex-col gap-4 h-full bg-black rounded-xl p-6 text-white shadow-xl
                           transition-transform duration-300 ease-in-out hover:scale-[1.03] hover:shadow-2xl"
              >
                {/* Icon + label */}
                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-11 h-11 rounded-xl border-2 border-white/30
                                   group-hover:border-white/70 transition-colors duration-300">
                    <Icon size={22} />
                  </span>
                  <span className="text-xs font-semibold tracking-widest uppercase opacity-70">
                    {label}
                  </span>
                </div>

                {/* Value */}
                <p className="font-bold text-base md:text-lg break-all leading-snug">
                  {value}
                </p>

                {/* Description */}
                <p className="text-sm opacity-60 mt-auto">
                  {description}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Availability badge */}
      <section className="global-container">
        <div className="row flex justify-center md:justify-start">
          <span className="inline-flex items-center gap-2 border border-teal-400 text-teal-600 text-sm font-semibold px-4 py-2 rounded-full">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            Available for new opportunities
          </span>
        </div>
      </section>
    </main>
  );
}
