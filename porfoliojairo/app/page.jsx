import Link from "next/link";
import { FiDownload } from "react-icons/fi";
import  Social from "/components/Social"
import  Photo from "/components/photo"

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:mt-10 xl:flex-row items-center justify-between xl-pt-8 xl:pb-24">
          {/* texto */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl mb-5">Sofware developer</span>

            <h1 className="h1 mt-3">
              Hello I'm <br /> <span className="text-accent">Jairo </span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white mt-5">
              I am graduated in Modern Web Development from Escuela Da Vinci in
              Buenos Aires Argentina. I have complemented my education with
              specialized courses in various technologies and techniques,
              including TypeScript, vue, react, and previously I worked as an
              SEO analyst.
            </p>
            {/* btn and socials */}
            <div className="flex flex-col items-center gap-8">
              <Link
                className="uppercase bg-accent rounded-md p-4 text-black flex items-center gap-2"
                href="/assets/CVen.pdf"
                download
              >
                <span> Download CV</span>
                <FiDownload className="text-xl" />
              </Link>
              <div className="mb-8 xl:mb-0">
                <Social containerStyles=" flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo/>
          </div>
        </div>
      </div>       
       <div className="mx-auto w-full flex justify-center"><p className="text-white/70">This portfolio was build using React/Nextjs</p></div>

    </section>
  );
}
