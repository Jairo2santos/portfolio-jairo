"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import { Description } from "@radix-ui/react-dialog";
import { TooltipPortal } from "@radix-ui/react-tooltip";
import WorkSliderBtns from "/components/ui/WorkSliderBtns";
const projects = [
  {
    num: "01",
    category: "fullstack",
    title: "project 1",
    description:
      "CurSeek is a comprehensive platform for discovering and managing online courses from universities worldwide, in Spanish, designed with languages such as JavaScript (Vuejs, Nuxt.js and Express.js).  It represents the pinnacle of my experience: it was born as my thesis project and has evolved to connect learners with quality education in a variety of disciplines.",
    stack: [
      { name: "Html5" },
      { name: "TailwindCss" },
      { name: "ExpressJs" },
      { name: "VueJs" },
    ],
    image: "/assets/work/CurSeek.png",
    github: "https://github.com/Jairo2santos/curseek",
    live: "https://curseek.com",
  },
  {
    num: "02",
    category: "backend",
    title: "project 2",
    description:
      "This is a development of a web scrapper to obtain large scale information to keep a course database up to date, for the Curseek platform.",
    stack: [{ name: "JavaScript" }, { name: "Puppeter" }, { name: "MongoDb" }],
    image: "/assets/work/scrapper.png",
    github: "https://github.com/Jairo2santos/scrapercurseek",
    live: "https://curseek.com",
  },
  {
    num: "03",
    category: "SEO",
    title: "project 3",
    description:
      "This is a Spanish leisure content website that has reached more than 500 thousand visits per month with SEO focused content strategies.",
    stack: [
      { name: "Analytics" },
      { name: "SemRush" },
      { name: "Ahref" },
      { name: "KeywordTool.io" },
    ],
    image: "/assets/work/ProcrastinaFácil.png",
    github: "",
    live: "https://procrastinafacil.com",
  },
];

const Work = () => {
  const [project, setproject] = useState(projects[0]);

const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setproject(projects[currentIndex])
}
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 , transition:{delay:1.2, duration:0.4, ease: "easeIn"}}}
      className="min-h-[80hv] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-7">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-8 h-[50%]">
              {/* outlinenumber */}
              <div className="text-8xl leading-none font-extrabold text- text-[#242423] font-outline-4">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex flex-row justify-between gap-3 ">
                {project.stack.map((item, index) => {
                  return (
                    <li className="text-xl text-accent" key={index}>
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              {/* botones */}
              <div className="flex gap-4 items-center">
                {/* liveprojet button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-16 h-16 rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-16 h-16 rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repo</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px]" onSlideChange={handleSlideChange}>
                {projects.map((item, index)=>{
                    return <SwiperSlide className="w-full" key={index}>
                     <div className="h-[460px] relative group flex bg-pink-50/20">
                     {/* overlay */}
                     <div className="absolute top-0 bottom-0 w-full h-full bg-black/20 z-10"></div>
                     {/* image */}
                     <div className="relative w-full h-full">
                     <Image src={project.image} fill className="objet-cover"/>
                     </div>
                     </div>
                    </SwiperSlide>
                })}
                <WorkSliderBtns contanerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] h-[30px] flex justify-center items-center transition-all"/>

                
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
export default Work;
