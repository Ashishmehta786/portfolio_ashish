import Bookconsultation from "./Bookconsultation";
import Skilltab from "./SkillTab";
import react from "../public/reactjslogo.png";
import ts from "../public/typescript.png";
import js from "../public/javascriptlogo.svg";
import nextjs from "../public/nextjslogo.svg";
import postgres from "../public/postgresql.png";
import mongodb from "../public/mongodblogo.png";
import firebase from "../public/firebase.png";
import nodejs from "../public/nodejs.svg";
import python from "../public/python.svg";
import postman from "../public/postman.png";
import openai from "../public/chatgpt.svg";
import tf from "../public/tensorflow.svg";
import tailwind from "../public/tailwindcss.svg";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

type skillarray = {
  icon: string;
  skilltitle: string;
};
const skillsarray: skillarray[] = [
  {
    icon: react,
    skilltitle: "React",
  },
  {
    icon: ts,
    skilltitle: "Typescript",
  },
  {
    icon: js,
    skilltitle: "Javascript",
  },
  {
    icon: nextjs,
    skilltitle: "Nextjs",
  },
  {
    icon: postgres,
    skilltitle: "Postgres",
  },
  {
    icon: mongodb,
    skilltitle: "Mongodb",
  },
  {
    icon: firebase,
    skilltitle: "Firebase",
  },
  {
    icon: nodejs,
    skilltitle: "Nodejs",
  },
  {
    icon: python,
    skilltitle: "Python",
  },
  {
    icon: postman,
    skilltitle: "Postman",
  },
  {
    icon: openai,
    skilltitle: "Openai sdk",
  },
  {
    icon: tf,
    skilltitle: "Tensorflow",
  },
  {
    icon: tailwind,
    skilltitle: "Tailwindcss",
  },
];

export default function Skillscomponent() {
  const [showskills, setshowskills] = useState(false);

  return (
    <div className="w-full lg:h-screen overflow-hidden flex flex-col items-center  my-5 lg:mt-16">
      <span className="text-2xl font-bold flex gap-2 items-center dark:text-neutral-200 text-neutral-800 transition-all duration-300">
        My Skills
        <button onClick={() => setshowskills(!showskills)}>
          {showskills ? <ChevronUp /> : <ChevronDown />}
        </button>
      </span>
      <div className="relative overflow-hidden">
        <div
          className={`grid grid-cols-2 gap-1 mt-2 transition-all duration-500 ease-in-out transform ${
            showskills
              ? "translate-y-0 max-h-[500px] opacity-100"
              : "-translate-y-full max-h-0  opacity-0"
          }`}
        >
          {skillsarray.map((item, index) => (
            <Skilltab
              key={index}
              isLoading={false}
              src={item.icon}
              skillname={item.skilltitle}
            />
          ))}
        </div>
      </div>

      <Bookconsultation />
    </div>
  );
}
