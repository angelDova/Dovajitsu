"use client";

import { AnimatePresence, motion } from "framer-motion";

const menu = {
  open: {
    width: "350px",
    height: "650px",
    top: "-25px",
    right: "-25px",
    transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
  },

  closed: {
    width: "100px",
    height: "40px",
    top: "0px",
    right: "0px",
    transition: {
      duration: 0.75,
      delay: 0.35,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

import { useState } from "react";
import Button from "./button";
import Nav from "../nav";

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="fixed right-[50px] top-[50px]">
      <motion.div
        variants={menu}
        animate={isActive ? "open" : "closed"}
        initial="closed"
        className="h-[320px] w-[240px] bg-[#c9fd74] rounded-[25px] relative"
      >
        <AnimatePresence>{isActive && <Nav />}</AnimatePresence>
      </motion.div>
      <Button isActive={isActive} setIsActive={setIsActive} />
    </div>
  );
}
