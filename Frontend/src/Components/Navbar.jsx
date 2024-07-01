import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <div className=" py-20">
      <ul
        onMouseLeave={() => setPosition((pv) => ({
            ...pv,
            opacity: 0,
          }))}
        className="relative mx-auto flex w-fit rounded-full border-2 border-black font-mono bg-white p-1"
      >
        <Tab label="Stayfit.ai" setPosition={setPosition} />
        <Tab label="Home" setPosition={setPosition} />
        <Tab label="What do we do" setPosition={setPosition} />
        <Tab label="Get Started" setPosition={setPosition} />
        <Tab label="Blog" setPosition={setPosition} />
        <Cursor position={position} />
      </ul>
    </div>
  );
};

const Tab = ({ label, setPosition }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();
        setPosition({
            left: ref.current.offsetLeft,
            width,
            opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white  mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      {label}
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ left: position.left, width: position.width, opacity: position.opacity }}
      transition={{ ease: "easeOut", duration: 0.3 }}
      className="absolute  md:h-12  z-0 h-7 bg-black rounded-full"
      style={{ willChange: "left, width" }}
    />
  );
};

export default Navbar;
