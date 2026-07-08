"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";

function ExtraToolsList() {
  const settings = {
    infinite: true,
    speed: 1200,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 800,
    autoplay: true,
    draggable: false,
    pauseOnHover: false,
  }

  const toolsList = [
    {
      name: "Firebase",
      logo: "/firebase.svg",
    },
    {
      name: "Stripe",
      logo: "/stripe.svg"
    },
    {
      name: "Clerk",
      logo: "/clerk.jpg"
    },
    {
      name: "Zustand",
      logo: "/zustand.svg",
    },
    {
      name: "Redux",
      logo: "/redux.svg",
    },
    {
      name: "IBM Watson Studio",
      logo: "/ibm_watson_studio.png",
    }
  ]
  return (
    <Slider className="w-full md:w-[80%]" {...settings}>
      {toolsList.map((tool) => (
        <div key={tool.name} className="px-3">
          <div className="flex h-28 flex-col items-center justify-center gap-3 text-center">
            <figure className="relative flex h-12 w-20 items-center justify-center">
              <Image
                src={tool.logo}
                alt={`${tool.name} logo`}
                fill
                sizes="80px"
                className="object-contain"
              />
            </figure>

            <h3 className="text-sm font-medium">{tool.name}</h3>
          </div>
        </div>
      ))}
    </Slider>
  )
}

export default ExtraToolsList