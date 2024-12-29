import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="max-w-screen-lg mx-auto py-6 flex items-center justify-between border-b-[1px] border-zinc-600">
      <div className="nleft flex items-center">
        <img
          src="https://raw.githubusercontent.com/Lucky-Kashyap/Front-End-Domination-Create-Anything-with-Code/38a4ab30039db6ba96e4894eebf564110b698496/React%20JS%20Project%20-%20Refokus%20Clone/Refokus_Clone/src/assets/refokus_logo.svg"
          alt=""
        />
        <div className="links flex gap-14 ml-20">
          {["Home", "Work", "Culture", "", "News"].map((elem, index) =>
            elem.length === 0 ? (
              <span key = {index} className="w-[1px] h-6 bg-zinc-600"></span>
            ) : (
              <a key = {index} className="text-sm flex items-center gap-1.5" href="#">
                {index === 1 && (
                  <span
                    style={{ boxShadow: "0 0 0.25em #00FF19" }}
                    className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 "
                  ></span>
                )}

                {elem}
              </a>
            )
          )}
        </div>
      </div>
      <Button />
    </div>
  );
};

export default Navbar;
