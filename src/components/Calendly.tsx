import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";

const CalendlyWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex justify-center relative   items-center mt-8">
      <div
        className="absolute top-0 left-2 cursor-pointer w-12 md:w-40 bg-neutral-50 hover:bg-white transition ease-in-out flex items-center justify-center rounded-md gap-2 py-2 px-2 text-neutral-600"
        onClick={() => window.history.back()}
      >
        <ArrowLeft />
        <span className="font-semibold hidden md:block text-lg">Go back</span>
      </div>
      <div className=" rounded-lg bg-white p-4 w-full max-w-xl ">
        <h2 className="text-lg font-semibold text-center mb-3 text-gray-800 ">
          Book a 30-Min Meeting 📅
        </h2>
        <div
          className="calendly-inline-widget rounded-md"
          data-url="https://calendly.com/ashishmehtalinked786/30min"
          style={{ width: "100%", height: "600px" }}
        />
      </div>
    </div>
  );
};

export default CalendlyWidget;
