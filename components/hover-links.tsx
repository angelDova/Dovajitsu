"use client";

import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef, createContext } from "react";
import { FiArrowRight } from "react-icons/fi";

export const HoverLinks = () => {
  return (
    <section className="bg-neutral-950 p-4 md:p-8 overflow-x-hidden">
      <div className="mx-auto max-w-5x">
        <Link
          heading="Home"
          subheading="Learn what we do here"
          imgSrc="/imgs/random1.jpg"
          href="/"
        />
        <Link
          heading="About"
          subheading="Learn what we do here"
          imgSrc="/imgs/random1.jpg"
          href="#about"
        />
        <Link
          heading="Clients"
          subheading="We work with great people"
          imgSrc="/imgs/random2.jpg"
          href="#clients"
        />
        <Link
          heading="Portfolio"
          subheading="Our work speaks for itself"
          imgSrc="/imgs/random3.jpg"
          href="#portfolio"
        />
        <Link
          heading="Careers"
          subheading="We want cool people"
          imgSrc="/imgs/random4.jpg"
          href="#careers"
        />
        <Link
          heading="Fun"
          subheading="Incase you're bored"
          imgSrc="/imgs/random5.jpg"
          href="#fun"
        />
      </div>
    </section>
  );
};

interface LinkProps {
  heading: string;
  imgSrc: string;
  subheading: string;
  href: string;
}

const Link = ({ heading, imgSrc, subheading, href }: LinkProps) => {
  const ref = useRef<HTMLAnchorElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = ref.current?.getBoundingClientRect();

    if (rect !== undefined && rect !== null) {
      const width = rect?.width;
      const height = rect?.height;

      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const xPct = mouseX / width - 0.5;
      const yPct = mouseY / height - 0.5;

      x.set(xPct);
      y.set(yPct);
    }
  };

  return (
    <motion.a
      ref={ref}
      initial="initial"
      onMouseMove={handleMouseMove}
      whileHover="whileHover"
      href={href}
      className="group relative flex items-center justify-between border-b-2 border-neutral-700 py-4 transition-colors duration-500 hover:border-neutral-50 md:py-8"
    >
      <div className="">
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            delayChildren: 0.25,
            staggerChildren: 0.075,
          }}
          className="relative z-10 block text-4xl font-bold text-neutral-500 transition-colors duration-500 md:text-6xl group-hover:text-neutral-50"
        >
          {heading.split("").map((l, i) => {
            return (
              <motion.span
                variants={{
                  initial: { x: 0 },
                  whileHover: { x: 16 },
                }}
                transition={{ type: "spring" }}
                className="inline-block"
                key={i}
              >
                {l}
              </motion.span>
            );
          })}
        </motion.span>
        <span className="relative z-10 mt-2 block text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50">
          {subheading}
        </span>
      </div>

      <motion.img
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        transition={{ type: "spring" }}
        src={imgSrc}
        alt="Image Link"
        className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
      />

      <motion.div
        variants={{
          initial: { x: "25%", opacity: 0 },
          whileHover: { x: "0%", opacity: 1 },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 p-4"
      >
        <FiArrowRight className="text-5xl text-neutral-50" />
      </motion.div>
    </motion.a>
  );
};
