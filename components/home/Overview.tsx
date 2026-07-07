import Image from "next/image";

function Overview() {
  const techStacksLogos: string[] = [
    "/html.svg",
    "/css.svg",
    "/javascript.svg",
    "/typescript.svg",
    "/react.svg",
    "/nextjs.svg",
    "/tailwindcss.svg",
    "/python.svg",
  ]

  return (
    <div className="md:w-[50%] flex flex-col gap-4 md:gap-3">
      <h3 className="font-bold text-xl md:text-2xl">About me</h3>
      <p className="font-semibold tracking-wide leading-8">
        I build responsive, component-driven web applications with Next.js, React, TypeScript, JavaScript, HTML, and CSS. I focus on turning ideas into clean interfaces, reliable features, smooth user experiences, and maintainable code that teams can confidently build on.
      </p>
      <ul className="grid grid-cols-4 gap-y-2 align-items-between">
        {techStacksLogos.map((logo, i) =>
          <li className="flex flex-col justify-center items-center max-w-14 transition-all duration-500 ease-in-out group" key={i}>
            <Image 
              src={logo}
              alt={`${logo.split('/')[1].split('.')[0]} logo`}
              width={24}
              height={24}
              className="h-auto w-full group-hover:opacity-70 group-hover:scale-85 transition-all duration-500 ease-in-out" />
            <h4 className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">{logo.split('/')[1].split('.')[0]}</h4>
          </li>
        )}
      </ul>
    </div>
  )
}

export default Overview