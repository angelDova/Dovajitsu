import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef, createContext } from "react";
import { FiArrowRight } from "react-icons/fi";

export const HoverLinks = () => {
  return (
    <section className="bg-neutral-950 p-4 md:p-8">
      <div className="mx-auto max-w-5x">
        <Link
          heading="About"
          subheading="Learn what we do here"
          imgSrc="/imgs/random1.jpg"
          href="#"
        />
        <Link
          heading="Clients"
          subheading="We work with great people"
          imgSrc="/imgs/random2.jpg"
          href="#"
        />
        <Link
          heading="Portfolio"
          subheading="Our work speaks for itself"
          imgSrc="/imgs/random3.jpg"
          href="#"
        />
        <Link
          heading="Careers"
          subheading="We want cool people"
          imgSrc="/imgs/random4.jpg"
          href="#"
        />
        <Link
          heading="Fun"
          subheading="Incase you're bored"
          imgSrc="/imgs/random5.jpg"
          href="#"
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
  return (
    <motion.a
      initial="initial"
      whileHover="whileHover"
      href={href}
      className="group relative flex items-center justify-between border-b-2 border-neutral-700 py-4 transition-colors duration-500 hover:border-neutral-50 md:py-8"
    >
      <div className="">
        <span className="relative z-10 block text-4xl font-bold text-neutral-500 transition-colors duration-500 md:text-6xl group-hover:text-neutral-50">
          {heading}
        </span>
        <span className="relative z-10 mt-2 block text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50">
          {subheading}
        </span>
      </div>

      {/* Add Image here */}
      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        className="relative z-10 p-4"
      >
        <FiArrowRight className="text-5xl text-neutral-50" />
      </motion.div>
    </motion.a>
  );
};
