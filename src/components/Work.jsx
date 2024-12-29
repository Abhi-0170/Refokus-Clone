import React, { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";

const Work = () => {
  const [images, setImages] = useState([
    { url: "/work_1.png", top: "40%", left: "50%", isActive: false },
    { url: "/work_2.png", top: "58%", left: "44%", isActive: false },
    { url: "/work_3.png", top: "50%", left: "56%", isActive: false },
    { url: "/work_4.png", top: "60%", left: "70%", isActive: false },
    { url: "/work_5.png", top: "73%", left: "50%", isActive: false },
    { url: "/work_6.png", top: "80%", left: "60%", isActive: false },
  ]);

  const { scrollYProgress } = useScroll();

  scrollYProgress.on("change", (data) => {

    function imagesShow(arr) {
      setImages(prev => 
         prev.map((item, index) => 
            arr.indexOf(index) === -1 ? {...item, isActive: false} : {...item, isActive: true}
        )
      );
    }


    switch (Math.floor(data * 100)) {
      case 0:
        imagesShow([]);
        break;
      case 1:
        imagesShow([0]);
        break;
      case 3:
        imagesShow([0, 1]);
        break;
      case 5:
        imagesShow([0, 1, 2]);
        break;
      case 7:
        imagesShow([0, 1, 2, 3]);
        break;
      case 9:
        imagesShow([0, 1, 2, 3, 4]);
        break;
      case 11:
        imagesShow([0, 1, 2, 3, 4, 5]);
        break;
    }
  });

  return (
    <div className="w-full mt-10">
      <div className="relative max-w-screen-lg mx-auto text-center">
        <h1 className="text-[30vw] leading-none font-medium tracking-tighter select-none">
          work
        </h1>
        <div className="absolute top-0 w-full h-full">
          {images.map(
            (elem, index) =>
              elem.isActive && (
                <img
                  key={index}
                  className="absolute w-60 rounded-lg -translate-x-[50%] -translate-y-[50%]"
                  src={elem.url}
                  style={{ top: elem.top, left: elem.left }}
                  alt=""
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;
