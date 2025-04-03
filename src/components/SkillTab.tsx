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
    <div className="flex items-center gap-3 px-3 py-2 min-w-fit max-w-max rounded-full bg-neutral-50/60 border border-neutral-300 hover:bg-neutral-100/80 cursor-pointer dark:bg-neutral-800/60 dark:hover:bg-neutral-800 dark:border-neutral-700 transition-all duration-200 shadow-sm">
      <img
        src={src}
        alt={skillname}
        height={24}
        width={24}
        className={`${isopenai ? "dark:invert" : ""} w-6 h-6`}
      />
      <span className="font-semibold text-sm text-neutral-800 dark:text-neutral-300 whitespace-nowrap">
        {skillname}
      </span>
    </div>
  );
}
