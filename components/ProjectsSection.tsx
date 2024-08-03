import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "CryptoHUB",
    description:
      "Crypto Hub is a web app that's your one-stop destination for everything related to cryptocurrencies.",
    image: "/CryptoHUB.png",
    github: "https://github.com/wajahat-baloch/CryptoHub.git",
    link: "https://crypto-hub-seven.vercel.app/",
  },
  {
    name: "Ethereal Elegance",
    description:
      "Explore the ultimate destination for cosmetic beauty with our sleek, modern landing page. Discover top-quality products and exclusive offers tailored for your unique style.",
    image: "/ethreal.png",
    github: "https://github.com/wajahat-baloch188/Cosmetic-Landing-Page",
    link: "https://cosmetic-landing-page-nz58bmuzx.vercel.app/",
  },
  {
    name: "Delicious",
    description:
      "Delicious is a React.js recipe website where users can browse, search, and discover mouthwatering dishes.",
    image: "/delicious.png",
    github: "https://github.com/wajahat-baloch188/Delicious_Recipe_App",
    link: "https://delicious-recipe-gpvn1dwej-wajahatbaloch2020-gmailcom.vercel.app/",
  },
  {
    name: "Daily Goals App",
    description:
      "This empowering app equips you with the tools to conquer your daily life goals and transform your aspirations into achievements.",
    image: "/dailygoals.png",
    github: "https://github.com/wajahat-baloch/DailyLife-Goals-App.git",
    link: "https://daily-life-goals-app.vercel.app/",
  },
  {
    name: "O Travels",
    description:
      "Embark on unforgettable journeys with our expertly crafted travel experiences. Your adventure begins here.",
    image: "/OTravels.png",
    github: "https://github.com/wajahat-baloch/O_Travels.git",
    link: "https://o-travels.vercel.app/",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
