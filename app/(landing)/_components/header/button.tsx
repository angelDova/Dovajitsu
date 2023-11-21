import { motion } from "framer-motion";

interface ButtonProps {
  isActive: boolean;
  setIsActive: (isActive: boolean) => void;
}

export default function Button({ isActive, setIsActive }: ButtonProps) {
  return (
    <div
      onClick={() => {
        setIsActive(!isActive);
      }}
      className="h-[40px] w-[100px] rounded-[25px] cursor-pointer overflow-hidden
      absolute uppercase top-0 right-0"
    >
      <motion.div
        className="relative h-full w-full  "
        animate={{ top: isActive ? "-100%" : "0" }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
      >
        <div className=" h-full w-full bg-[#c9fd74]">
          <PerspectiveText label="Menu" />
        </div>
        <div className=" h-full w-full absolute top-[100%] bg-black text-white">
          <PerspectiveText label="Close" />
        </div>
      </motion.div>
    </div>
  );
}

interface PerspectiveTextProps {
  label: string;
}

function PerspectiveText({ label }: PerspectiveTextProps) {
  return (
    <div className="flex items-center justify-center h-full w-full transition-all duration-700 in-expo transform-style-3d">
      <p className="hover:translate-y-[-100%] hover:opacity-0">{label}</p>
      <p className="absolute opacity-0 hover:opacity-100 origin-bottom">
        {label}
      </p>
    </div>
  );
}
