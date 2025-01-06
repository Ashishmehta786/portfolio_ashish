import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";

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
      <span className="text-gray-700">{text}</span>
    </li>
  );
};

const listItems = [
  "Final-year B.Tech student at IKGPTU, specializing in Computer Science (GPA: 8.36/10).",
  "Passionate about full-stack development and machine learning.",
  "Proficient in C, C++, Python, JavaScript, and modern web technologies.",
  "Hands-on experience in building real-time chat apps and data visualization systems.",
  "Contributor to open-source projects with 167 GitHub commits in one year.",
  "Enthusiast in finance, stock trading, and algorithmic trading strategies.",
];

const skillsArray = [
  "Next.js",
  "TypeScript",
  "JavaScript",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "Supabase",
  "Firebase",
  "ShadCN/UI",
  "C++",
  "C",
  "Python",
  "TensorFlow",
];

export default function App() {
  const [isloading, setisloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setisloading(false);
    }, 700);
  }, []);
  return (
    <main className="flex max-w-md max-auto flex-col px-5  min-h-screen">
      <Navbar />
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2">About Myself</h2>
        <ul className="list-disc pl-5 space-y-2 ">
          {listItems.map((item, index) => (
            <ListItem key={index} text={item} isLoading={isloading} />
          ))}
        </ul>
        <h2 className="text-2xl font-bold mb-2 mt-2">My skills</h2>
        <ul className="list-disc pl-5 space-y-2">
          {skillsArray.map((item, index) => (
            <ListItem key={index} text={item} isLoading={isloading} />
          ))}
        </ul>
      </div>
    </main>
  );
}
