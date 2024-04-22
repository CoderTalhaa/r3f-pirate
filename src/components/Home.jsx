import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Home() {
  const { activeData: data, condition, setCondition } = useContext(DataContext);

  useGSAP(() => {
    if (condition) return;
    setCondition(true);

    gsap.from(".text", {
      y: 200,
      ease: "power4.out",
      duration: 1,
      stagger: {
        amount: 0.3,
      },
      onComplete: () => {
        setCondition(false);
      },
    });
  }, [data]);
  return (
    <div className="select-none w-full h-2/5 flex justify-center items-center lg:w-1/2 lg:h-full lg:justify-end ">
      <div>
        <h1 className="text-left uppercase text-5xl font-bold mb-1 w-full relative p-1 overflow-hidden md:text-[6vw] md:mb-2 ">
          <p className="text" style={{ color: data.color }}>
            {data.heading}
          </p>
        </h1>
        <h6 className="text-left text-2xl font-regular mb-6 w-full p-1 overflow-hidden md:text-4xl">
          <p className="text">{data.subheading}</p>
        </h6>
        <p className="w-full text-xs font-medium text-left mb-8 p-1 overflow-hidden  md:text-base md:mb-12 ">
          <p className="text">{data.text}</p>
        </p>
      </div>
    </div>
  );
}

export default Home;
