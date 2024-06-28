"use client"
import {FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaVuejs } from "react-icons/fa"
import {SiTailwindcss, SiNextdotjs} from "react-icons/si"
import  {Tabs, TabsContent, TabsList, TabsTrigger} from '/components/ui/tabs'
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from '/components/ui/tooltip'
import { ScrollArea } from '/components/ui/scroll-area'
import { easeIn, motion } from 'framer-motion'

//About
const about = {
    title: "About me",
    description: "Graduated from Da Vinci School, I specialize in cutting-edge technologies such as JavaScript and Vue.js, React, ExpressJs also complemented with extensive knowledge in SEO and digital marketing.",
    info:[
        { fieldName: "Name",
            FieldValue: "Jairo Ramirez"
           },
        { fieldName: "Phone Number",
            FieldValue: "+54 1122559115"
           },
        { fieldName: "Experience",
            FieldValue: "2 Years"
           },
        { fieldName: "Nationality",
            FieldValue: "Venezuelan"
           },
           { fieldName: "Email",
            FieldValue: "doblejairo@gmail.com"
           },
           { fieldName: "lenguages",
            FieldValue: "English & Spanish"
           },
    ],
}
const experience = {
 
    title: "Experience",
    description: "Although I have been in the programming field for almost 2 years, my journey has been characterized by exponential growth and a profound enthusiasm for modern and dynamic web development technologies. I'm deeply passionate about continuously learning and adopting innovative approaches to solve complex challenges. This rapid progression in my skills demonstrates my commitment and adaptability in the tech environment."
  ,items:[
     {
        company: "Curseek",
        position:"Full Stack Developer",
        duration: "2022 - present",
     },
     {
        company: "ProcrastinaFacil",
        position:"SEO manager",
        duration: "2019 - 2023",
     },
     {
        company: "RecargaPay",
        position:"SEO analyst",
        duration: "2017 - 2019",
     },
  ]

}
const education = {
    icon: "/assets/resume/cap.svg",
    title: "Education",
    description: " formal and non-formal studies in recent years"
  ,items:[
     {
        institution: "Escuela Davinci",
        degree:"Design and Web developing",
        duration: "2020 - 2024",
     },
     {
        institution: "Curso React 2024 - midudev Youtube",
        degree:"React developer",
        duration: "2 month",
     },
   ,
  ]

}
const  skills = {
    
    title: "My skills",
    description: "these are some of the technologies that I am currently mastering and every day I am improving and learning more about them."
  ,skillList:[
     {
        icon: <FaHtml5/>,
        name:"HTML5",
       
     },
     {
        icon: <FaCss3/>,
        name:"Css3",
       
     },
     {
        icon: <FaJs/>,
        name:"JavaScript",
       
     },
     {
        icon: <FaNodeJs/>,
        name:"Node.js",
       
     },
     {
        icon: <FaReact/>,
        name:"React.js",
       
     },
     {
        icon: <FaVuejs/>,
        name:"Vue.js",
       
     },
     {
        icon: <SiNextdotjs/>,
        name:"Next.js",
       
     },
   , {
    icon: <SiTailwindcss/>,
    name:"TailwindCss",
   
 },
,
   ,
  ]

}
const Resume =()=>{
    return (
       
           <motion.div initial={{opacity: 0}} animate={{
            opacity: 1, 
            transition: {delay:0.8, duration:0.2, ease: "easeIn"},
            }} 
            className=" flex items-center justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
                    <TabsList  className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0" >
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About Me</TabsTrigger>
                    </TabsList>
                
                {/* content */}
                <div className="w-full min-h-[70vh]">
                    {/* experience */}
                    <TabsContent value="experience" className="w-full">
                          <div className="flex flex-col gap-7 text-center xl:text-left"> 
                            <h3 className="text-4xl font-bold">{experience.title}</h3>
                            <p className="max-w-[600px]">{experience.description}</p>
                            <ScrollArea className="h-[400px]">
                                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                    {experience.items.map((item, index) =>{
                                        return <li key={index} className="bg-[#232329] h-48 py-6 px-10 rounded-xl flex-col justify-center items-center lg:items-start gap-1">
                                            <span className="text-accent">{item.duration}</span>
                                           <h3 className="text-xl max-w-64 min-h-16 text lg:text-left">{item.position}</h3>
                                           <div className=" flex items-center gap-3">
                                            <span className="w-2 h-2 rounded-full bg-accent"></span>
                                            <p className="text-white/60">{item.company}</p>
                                           </div>
                                        </li>
                                    })}
                                </ul>
                            </ScrollArea>
                          </div>
                    </TabsContent>
                       {/* experience */}
                       <TabsContent value="education" className="w-full">
                       <div className="flex flex-col gap-7 text-center xl:text-left"> 
                            <h3 className="text-4xl font-bold">{education.title}</h3>
                            <p className="max-w-[600px]">{education.description}</p>
                            <ScrollArea className="h-[400px]">
                                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                    {education.items.map((item, index) =>{
                                        return <li key={index} className="bg-[#232329] h-48 py-6 px-10 rounded-xl flex-col justify-center items-center lg:items-start gap-1">
                                            <span className="text-accent">{item.duration}</span>
                                           <h3 className="text-xl max-w-64 min-h-16 text lg:text-left">{item.degree}</h3>
                                           <div className=" flex items-center gap-3">
                                            <span className="w-2 h-2 rounded-full bg-accent"></span>
                                            <p className="text-white/60">{item.institution}</p>
                                           </div>
                                        </li>
                                    })}
                                </ul>
                            </ScrollArea>
                          </div>
                    </TabsContent>
                       {/* experience */}
                       <TabsContent value="skills" className="w-full h-full">
                          <div className=" flex flex-col gap-8"> 
                            <div className=" flex flex-col gap-8 text-center xl:text-left">
                            <h3 className="text-4xl font-bold">{skills.title} </h3>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                            </div>
                            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-8 gap-3">
                                {skills.skillList.map((skill, index)=>{
                                        return <li key={index}>
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger className="w-full h-40 rounded-xl flex justify-center items-center bg-[#232329]" >
                                                        <div className=" text-6xl group-hover:text-accent transition-all duration-300">
                                                            {skill.icon}
                                                        </div>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p className="capitalize">
                                                            {skill.name}
                                                        </p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </li>    
                                })}
                            </ul>

                          </div>
                    </TabsContent>
                       {/* experience */}
                       <TabsContent value="about" className="w-full text-center xl:text-left">
                        <div className="flex flex-col gap-8">
                          <h3 className="text-4xl font-bold">{about.title}</h3>
                          <h4 className="max-w-[600px] text-white/60 xl:mx-0">{about.description}</h4>
                          <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0" >
                            {about.info.map((item, index)=>{
                                return(
                                <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                        <span  className="text-white/60"> {item.fieldName}</span>
                                        <span className="text-xl"> {item.FieldValue}</span>
                                </li>
                                )
                            })}
                          </ul>
                          </div>
                    </TabsContent>
                </div>
            </Tabs>
            </div>
            
           </motion.div>
      
   
    )   
   }
   export default Resume;