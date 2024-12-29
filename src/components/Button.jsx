import { motion } from "framer-motion";
import React from "react";
import { IoIosReturnRight } from "react-icons/io";

const Button = ({ title = "Start a Project" }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.13 }}
      transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
      className="w-40 px-4 py-1.5 bg-zinc-200 text-black rounded-full flex items-center justify-between"
    >
      <span className="text-sm font-medium">{title}</span>
      <IoIosReturnRight />
    </motion.div>
  );
};

export default Button;
