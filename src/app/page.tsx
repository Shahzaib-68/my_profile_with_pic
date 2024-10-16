import Image from "next/image";
import AI_pic from "../image/th (5).jpeg"
import { BsFacebook } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-black flex flex-col justify-start">
      <div className="text-white font-bold text-2xl text-left w-full">
        <div className="flex justify-between items-center px-6 py-4 bg-gray-800">
          <h1 className="text-4xl">MY PROFILE</h1>
          <ul className="flex space-x-4">
            <li><a href="#home" className="hover:underline">HOME</a></li>
            <li><a href="#about" className="hover:underline">ABOUT</a></li>
            <li><a href="#contactus" className="hover:underline">CONTACT US</a></li>
          </ul>
        </div>
      </div>
      <div  id="about"  className="w-full flex flex-col sm:flex-row items-start justify-start p-6 mt-10 bg-black">
        <div className="flex-1 w-full">
          {[
            { title: "NAME", value: "Shahzaib" },
            { title: "FATHER NAME", value: "Shahnawaz" },
            { title: "ADDRESS", value: "Landhi no:2 Area 37/A Shakhalid Colony" },
            { title: "EDUCATION", value: "Intermediate" },
            { title: "SKILL", value: "Frontend Developer" },
            { title: "EXPERIENCE", value: "Fresher" },
            { title: "CONTACT NO", value: "03180255369" },
            { title: "EMAIL", value: "sa4422368@gmail.com" },
            { title: "CENTER", value: "Governor House" },
            { title: "ID Card No", value: "00162568" },
          ].map((item, index) => (
            <div key={index} className="mb-6">
              <h1 className="font-bold text-xl text-white">{item.title}:</h1>
              <p className="font-bold text-lg text-white">{item.value}</p>
            </div>
          ))}
        </div>
        <div  id="home" className="flex-shrink-0 w-full sm:w-auto sm:ml-10 mt-10 sm:mt-0">
          <Image
            src={AI_pic}
            alt="Profile Picture"
            width={250}
            height={250}
            className="rounded-full"
          />
        </div>
      </div>
      <footer id="contactus" className="font-bold text-3xl text-white bg-gray-700 w-full py-8 text-center mt-auto">
        <h1 className="mb-4">FOLLOW US</h1>
        <div className="text-4xl flex justify-center space-x-6">
          <span className="hover:text-gray-400 cursor-pointer"><BsFacebook /></span>
          <span className="hover:text-gray-400 cursor-pointer"><RiInstagramFill /></span>
          <span className="hover:text-gray-400 cursor-pointer"><FaLinkedin /></span>
        </div>
      </footer>
    </div>
  );
}
