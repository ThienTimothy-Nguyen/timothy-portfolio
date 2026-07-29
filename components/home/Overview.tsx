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
    <div className="md:w-[50%] flex flex-col gap-6 md:gap-5">
      <h3 className="font-bold text-xl md:text-2xl">About me</h3>
      <p className="font-semibold tracking-wide text-sm md:text-base leading-6 md:leading-8">
        I build responsive, component-driven web applications with Next.js, React, TypeScript, JavaScript, HTML, and CSS. I focus on turning ideas into clean interfaces, reliable features, smooth user experiences, and maintainable code that teams can confidently build on.
      </p>
      <ul className="grid grid-cols-4 gap-y-2 align-items-between">
        {techStacksLogos.map((logo) =>
          <li className="flex flex-col justify-center items-center max-w-14 transition-all duration-500 ease-in-out group" key={logo}>
            <figure className="flex h-10 w-14 items-center justify-center relative">
              <Image 
                src={logo}
                alt={`${logo.split('/')[1].split('.')[0]} logo`}
                fill
                sizes="80px"
                className="object-contain group-hover:opacity-70 group-hover:scale-85 transition-all duration-500 ease-in-out"
              />
            </figure>

            <h4 className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">{logo.split('/')[1].split('.')[0]}</h4>
          </li>
        )}
      </ul>
    </div>
  )
}

export default Overview