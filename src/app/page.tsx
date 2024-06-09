"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { api } from "@/trpc/react";

import { getLocalisedTime } from "@/utils/helpers/getLocalisedTime";

const title = "PUZZLO";

const description = "Every day, new password.";

const howToPlayHref = "/how-to-play";

const scoreboardHref = "/scoreboard";

const playHref = "/play";

const buttonStyle =
  "bg-yellow-500  rounded-full  p-7  hover:bg-yello-600 hover:text-white  text-lg lg:text-2xl md:text-xl font-bold text-black";

const githubLink = "https://github.com/thenameisajay";

export default function Home() {
  const { data, isPending, isError } = api.check.check.useQuery(undefined);

  console.info({ data, isPending, isError });

  const PageBanner = () => {
    return (
      <>
        <h1 className=" relative  bottom-28 bg-inherit text-7xl font-bold  text-white md:text-8xl">
          {title}
        </h1>
        <p className=" 8bg-inherit relative    bottom-24  text-2xl font-bold text-gray-700     md:text-3xl">
          {description}
        </p>
      </>
    );
  };

  const LinkContainer = () => {
    return (
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-evenly space-x-3 p-4  md:space-x-6 ">
          <Link href={howToPlayHref}>
            <Button className={buttonStyle}>How to Play ?</Button>
          </Link>
          <Link href={scoreboardHref}>
            <Button className={buttonStyle}>Scoreboard</Button>
          </Link>
        </div>
        <div className="">
          <Link href={playHref}>
            <Button className={buttonStyle}>PLAY</Button>
          </Link>
        </div>
      </div>
    );
  };

  const Footer = () => {
    return (
      <div className="absolute bottom-0 flex w-full flex-col items-center justify-center">
        <footer className=" relative  bottom-0  mx-4  my-4  w-64 rounded-full border border-slate-500 p-3  text-center  text-black  hover:bg-slate-100  focus:bg-slate-100 sm:p-2  ">
          <p className=" text-xs">
            <span className="text-base">&copy;</span>{" "}
            <span className="  font-semibold">
              {" "}
              {getLocalisedTime(new Date())}
            </span>
            ,{" "}
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold   text-primary"
            >
              Made with 🧡 by AJ & F.
            </a>
          </p>
        </footer>
      </div>
    );
  };

  return (
    <div className=" flex h-dvh  w-full  flex-col items-center   justify-center bg-sky-500">
      <PageBanner />
      <LinkContainer />
      <Footer />
    </div>
  );
}
