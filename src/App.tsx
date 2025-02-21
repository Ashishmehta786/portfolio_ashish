import "./App.css";
import { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import gh from "./public/github.svg";
import x from "./public/x.svg";
import linkedin from "./public/linkedin.svg";
import {
  AudioLines,
  FolderOpenDot,
  LucideProps,
  ArrowUpRight,
} from "lucide-react";

const ProjectBlock = ({ isloading }: { isloading: boolean }) => {
  const [showPreview, setpreview] = useState(false);
  const [previewIndex, setpreviewIndex] = useState<Number | null>(null);
  const getHtmlcss = (index: number) => {
    if (index == 3) {
      setpreview(false);
    }
    setpreviewIndex(index);
    setpreview(!showPreview);
  };
  const leaveMouse = () => {
    setpreview(false);
  };
  return (
    <ul className="pl-5 space-y-2 flex flex-col justify-center">
      {projects.map((project, index) => {
        return (
          <div className="relative " key={index}>
            {showPreview && index === previewIndex && (
              <div className="absolute scale-[0.3] md:scale-[0.4] md:-translate-y-[75%] lg:scale-[0.55] top-1/2 left-1/2 -translate-x-1/2 -translate-y-[68%] lg:-translate-y-1/2 lg:-translate-x-[20%] ">
                <iframe
                  src={project.projectLink}
                  width="1280px"
                  height="800px"
                  className="border-none   rounded"
                ></iframe>
              </div>
            )}
            <li
              onMouseEnter={() => getHtmlcss(index)}
              onMouseLeave={leaveMouse}
              className={`relative group flex gap-2 items-center dark:text-neutral-300 text-neutral-700 w-[220px]  transition-all duration-300 ease-in-out cursor-pointer ${
                isloading
                  ? " blur pointer-events-none backdrop-blur-sm"
                  : "blur-none backdrop-blur-none opacity-100"
              }`}
            >
              <span className="absolute -left-5 scale-[1.4] text-neutral-950 dark:text-neutral-300">
                •
              </span>
              <a
                href={project.projectLink}
                className="flex gap-2"
                target="_blank"
              >
                {" "}
                <span>{project.projectName}</span>
                <ArrowUpRight className="text-neutral-600 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:cursor-pointer transition-all duration-300 ease-in-out" />
              </a>

              {!project.hosted && (
                <div>
                  <img src={gh} className="w-5 h-5 ml-5 dark:invert" />
                </div>
              )}
              {project.hosted && (
                <>
                  <div className="w-2 ml-5 h-2 bg-green-500 rounded-full"></div>
                  {project.users > 0 && (
                    <span className="text-neutral-500 dark:text-neutral-400">
                      {project.users} users
                    </span>
                  )}
                </>
              )}
            </li>
          </div>
        );
      })}
    </ul>
  );
};

const Itemblock = ({
  isloading,
  heading,
  Headingicon,
  array,
}: {
  text: string;
  isloading: boolean;
  heading: string;
  Headingicon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  array: string[];
}) => (
  <div className=" flex mb-6 flex-col text-neutral-800 dark:text-neutral-100 ">
    <h2 className="text-2xl font-bold mb-4 flex gap-2   items-center">
      <span className="gap-2">
        <Headingicon />
      </span>
      {heading}
    </h2>
    <ul className="list-disc  pl-5 space-y-2  flex flex-col    justify-center">
      {array.map((item, index) => (
        <ListItem key={index} text={item} isLoading={isloading} />
      ))}
    </ul>
  </div>
);

const ListItem = ({
  text,
  isLoading,
}: {
  text: string;
  isLoading: boolean;
}) => {
  return (
    <li
      className={`transition-all duration-300 ease-in-out ${
        isLoading
          ? " blur pointer-events-none backdrop-blur-sm"
          : "blur-none backdrop-blur-none opacity-100"
      }`}
    >
      <span className=" dark:text-neutral-300 text-neutral-700">{text}</span>
    </li>
  );
};

const aboutMe = [
  "My name is Ashish mehta studying currently in 3rd year of engineering",
  "CS undergrad proficient in TypeScript, React,Next.js, Node.js and cloud platforms",
  "Built real-time applications using MongoDB, Firebase and modern frameworks",
  "Strong foundation in Python, C++ with machine learning experience",
  "Open-source enthusiast with 160+ commits and full-stack projects",
];
const projects = [
  {
    projectName: "Rag Project",
    projectLink: "https://rag-project-iota.vercel.app/",
    hosted: true,
    users: 5,
  },
  {
    projectName: "GraphFlowml",
    projectLink: "https://graphflow-ml.vercel.app/",
    hosted: true,
    users: 2,
  },
  {
    projectName: "nocodeapi",
    projectLink: "https://nocodeapi.vercel.app/",
    hosted: true,
    users: 2,
  },
  {
    projectName: "sentimentanalysis",
    projectLink: "https://github.com/Ashishmehta786/Sentimentanalysis.git",
    hosted: false,
    users: 0,
  },
];

export default function App() {
  const [isloading, setisloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setisloading(false);
    }, 700);
  }, []);

  return (
    <div className=" dark:bg-neutral-900 flex flex-col h-[100%] overflow-hidden  w-full">
      <Navbar />
      <main className="flex container max-w-xl py-5 flex-col px-5  dark:bg-neutral-900 container dark:text-neutral-100 min-h-screen text-neutral-800 mx-auto flex-col px-5">
        <div className="p-4">
          <Itemblock
            text="text"
            isloading={isloading}
            heading="About Myself"
            Headingicon={AudioLines}
            array={aboutMe}
          />
          <div>
            <h2 className="text-2xl font-bold my-4 flex gap-2   items-center">
              <FolderOpenDot /> Projects
            </h2>
            <ProjectBlock isloading={isloading} />
          </div>
        </div>

        <div className="mt-10 max-w-md mx-auto flex justify-center gap-4">
          <a
            href="https://github.com/Ashishmehta786"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={gh}
              className="w-8 h-8
              dark:invert  transition-colors duration-200"
              alt="GitHub"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/ashish-mehta-83a2bb279/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={linkedin}
              className="w-8 h-8 hover:bg-gray-100
              dark:hover:bg-gray-100 rounded-md transition-colors duration-200"
              alt="LinkedIn"
            />
          </a>
          <a
            href="https://x.com/AshishM95556974"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={x}
              className="w-8 h-8 hover:bg-gray-100  dark:invert dark:hover:bg-gray-100 rounded-md transition-colors duration-200"
              alt="Twitter"
            />
          </a>
        </div>
      </main>
    </div>
  );
}
