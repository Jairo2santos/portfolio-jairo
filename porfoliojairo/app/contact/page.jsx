import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
const info = [
  {
    icon: <FaPhoneAlt />,
    title: "phone",
    description: "+54 1122559115",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "doblejairo@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Adress",
    description: "CABA, Buenos Aires, Argentina",
  },
];

const Contact = () => {
  return (
    <div className="container mx-auto flex flex-col">
      <h1 className="text-4xl text-accent text-center"> Let's work together</h1>
      <div className=" flex items-center xl:justify-center mb-8 xl:mb-0  mt-12">
        <ul className="flex flex-col gap-10">
          {info.map((item, index) => {
            return (
              <li key={index} className=" items-center gap-6">
                <p className="text-white/60">{item.title}</p>
                <div className="w-12 h-12 xl:w-16 bg-[#27272c] text-accent  rounded-md flex items-center justify-center">
                  <div className="text-[28px]">{item.icon}</div>
                </div>
                <div className="mt-2">
                  
                  <h3 className="text-xl">{item.description}</h3>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default Contact;
