import { House } from "lucide-react";
import ModeToggle, { useTheme } from "../ModeToggle";
export default function Navbar() {
  return (
    <div className="   flex mt-4  text-neutral-100 max-w-md mx-auto  container max-w-xl justify-between px-2 items-center">
      <div className=" dark:text-neutral-100  hover:dark:bg-neutral-800/70 hover:bg-neutral-200/70 hover:shadow transition  flex items-center py-1.5 px-2 rounded space-x-1 text-neutral-800 hover:text-neutral-700  cursor-pointer dark:hover:text-neutral-100">
        <House />
        <span className="font-semibold ">Home</span>
      </div>
      <div>
        <ModeToggle />
      </div>
    </div>
  );
}
