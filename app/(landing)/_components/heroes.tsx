import Image from "next/image";

export const Heroes = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
      <div className="flex sm:flex-row flex-col items-center sm:gap-16 gap-80">
        <div className="relative l w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:h-[400px] md:w-[400px] font-mono">
          My name is Isaac Cordova and I have been studying Jiu-Jitsu since I
          fell in love with the game in 2009. The never-ending quest of
          self-betterment and refinement has me here for the long haul. I was
          recently promoted to black belt & I teach at 10th Planet Fullerton.
          I&apos;m an active competitor, reaching the round of 16 of both East
          and West Coast ADCC Trials this past Year.
          <br />
          <br />
          My Triangle is my sharpest, most well developed sword. So that is
          where we begin. This is a new venture, so anything you find missing,
          lacking, or would like to see please reach out here or on Instagram.
          May this space become your new favorite place to study
        </div>
        <div className="relative h-[400px] w-[400px] md:block ">
          <Image
            src="/Isaac-website.png"
            fill
            className="object-contain"
            alt="Hero Image"
          />
        </div>
      </div>
    </div>
  );
};
