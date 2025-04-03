export default function Skilltab({
  src,
  skillname,
}: {
  isLoading: boolean;
  src: string;
  skillname: string;
}) {
  const isopenai = src.includes("chatgpt");
  return (
    <div className="rounded-full  px-4 py-1 w-40   h-10 flex  gap-4 items-center bg-neutral-50/60 border hover:bg-neutral-100/80 cursor-pointer dark:bg-neutral-800/60 m-2 dark:hover:bg-neutral-800  dark:border-neutral-700 ">
      <img
        src={src}
        alt={skillname}
        height={24}
        width={24}
        className={`${isopenai ? "dark:invert" : ""} w-6 h-6 `}
      />

      <span className="font-semibold text-sm  text-neutral-800 dark:text-neutral-300">
        {skillname}
      </span>
    </div>
  );
}
