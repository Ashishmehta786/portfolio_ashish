import {House,BriefcaseBusiness} from "lucide-react";
export default function Navbar(){
  return(
    <div className='flex items-center md:justify-center space-x-4 mt-4'>
    <div className="bg-neutral-50 flex items-center py-1 px-2 rounded space-x-1"> 
      <House/><span>Home
      </span>
    </div>
      
    </div>
  )
}