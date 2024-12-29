import { motion } from "framer-motion";
import React from "react";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const Card = ({ width, start, para, hover = "false", header, title }) => {
  return (
    <motion.div
      whileHover={{
        backgroundColor: hover === "true" && "#7443ff",
        padding: "25px",
      }}
      className={` bg-zinc-800 p-5 rounded-xl ${width} min-h-[60vh]  flex flex-col justify-between`}
    >
      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          <h3>{header}</h3>
          <MdOutlineArrowRightAlt />
        </div>
        <h1 className="text-2xl font-medium mt-5">{title}</h1>
      </div>
      <div className="down w-full">
        {start && (
          <>
            <h1 className="text-6xl font-semibold tracking-tight leading-none">
              Start a Project
            </h1>
            <button className="mt-5 px-5 py-2 rounded-full border-[1px] border-zinc-500">
              Contact Us
            </button>
          </>
        )}

        {para && (
          <>
            <p className="text-xs text-zinc-500 font-medium ">
              Explore what drives our team.
            </p>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
