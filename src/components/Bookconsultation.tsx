import { useNavigate } from "react-router-dom";
export default function Bookconsultation() {
  const navigate = useNavigate();
  const hireme = async () => {
    navigate("/consult");
  };
  return (
    <div className="w-full flex justify-center">
      <button
        className="text-lg font-semibold justify-center  px-16 rounded-full mt-3 bg-green-600 text-white  dark:text-neutral-100 py-2 rounded items-center text-center mb-3 hover:bg-green-600/80  hover:dark:text-neutral-200"
        onClick={hireme}
      >
        Hire me !
      </button>
    </div>
  );
}
