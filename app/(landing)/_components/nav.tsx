import { footerLinks, links } from "@/constants/data";
import { HoverLinks } from "@/components/hover-links";
import { motion } from "framer-motion";

const perspective = {
  initial: { opacity: 0, rotateX: 90, translateY: 80, translateX: -20 },
  enter: (i: number) => ({
    opacity: 1,
    transition: {
      duration: 0.65,
      opacity: { duration: 0.35 },
      delay: 0.5 + i * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
    },
    rotateX: 0,
    translateY: 0,
    translateX: 0,
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.5, type: "linear", ease: [0.76, 0, 0.24, 1] },
  },
};

export const slideIn = {
  initial: {
    opacity: 0,

    y: 20,
  },
  enter: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.75 + i * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.5, type: "tween", ease: "easeInOut" },
  },
};

export default function Nav() {
  return (
    <div className="flex flex-col h-full pt-[100px] pb-[40px] pr-[50px] pl-[40px] box-border justify-between">
      <div className="gap-2">
        {links.map((link, i) => {
          return (
            <div className="perspective-250 perspective-origin-bottom" key={i}>
              <motion.div
                className=""
                custom={i}
                variants={perspective}
                animate="enter"
                initial="initial"
                exit="exit"
              >
                <a
                  href={link.href}
                  className="text-black text-[46px] decoration-0"
                >
                  {link.title}
                </a>
              </motion.div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-wrap">
        {footerLinks.map((link, i) => {
          return (
            <motion.a
              key={i}
              href={link.href}
              variants={slideIn}
              custom={i}
              animate="enter"
              initial="initial"
              exit="exit"
              className="w-1/2 text-black text-[16px] decoration-0"
            >
              {link.title}
            </motion.a>
          );
        })}
      </div>
    </div>
  );
}
