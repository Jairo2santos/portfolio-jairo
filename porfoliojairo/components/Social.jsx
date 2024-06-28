import Link from "next/link";
import {FaGithub, FaLinkedin, FaTwitter} from "react-icons/fa"

const socials = [
    {icon: <FaGithub/> , path: 'https://github.com/Jairo2santos/' },
    {icon: <FaLinkedin/> , path: 'https://www.linkedin.com/in/jairo-r-dos-santos/' },
    {icon: <FaTwitter/> , path: 'https://x.com/Jairoramires13' },
    
]

const Social = ({containerStyles, iconStyles}) =>{

 return(
    
   <div className={containerStyles}>{socials.map((item, index) =>{
    return (
        <Link key={index} href={item.path} target="_blank" className={iconStyles}>
         {item.icon}
        </Link>
    )
   })
   }
   
   </div>
 )
}
 export default Social