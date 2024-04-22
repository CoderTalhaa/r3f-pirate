import { useContext, useRef } from "react";
import Home from "./components/Home";
import Webgl from "./components/Webgl";
import { DataContext } from "./context/DataContext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function App() {
  const { activeData } = useContext(DataContext);
  const ref = useRef(null, useGSAP);

  useGSAP(() => {
    gsap.to(ref.current, {
      background: activeData.background,
      duration: 0.8,
      ease: "power3.inOut",
    });
  }, [activeData]);

  return (
    <div ref={ref} className="w-screen h-screen relative ">
      <h1
        className="select-none absolute z-50 text-3xl font-bold text-left tracking-tight my-2 ml-6 md:ml-28 lg:ml-[5vw] lg:my-8"
        style={{ color: activeData.logo }}
      >
        NFT's.
      </h1>
      <div className=" w-full h-screen flex justify-between items-center flex-col lg:flex-row-reverse">
        <Webgl />
        <Home />
      </div>
    </div>
  );
}

export default App;

const Loader = () => {
  return (
    <div className="w-full h-screen z-50 bg-zinc-900  ">
      <div class="w-32 aspect-square rounded-full absolute top-1/2 left-1/2 flex justify-center items-center animate-[spin_3s_linear_infinite] z-40 bg-[conic-gradient(white_0deg,white_300deg,transparent_270deg,transparent_360deg)] before:animate-[spin_2s_linear_infinite] before:absolute before:w-[60%] before:aspect-square before:rounded-full before:z-[80] before:bg-[conic-gradient(white_0deg,white_270deg,transparent_180deg,transparent_360deg)] after:absolute after:w-3/4 after:aspect-square after:rounded-full after:z-[60] after:animate-[spin_3s_linear_infinite] after:bg-[conic-gradient(#065f46_0deg,#065f46_180deg,transparent_180deg,transparent_360deg)]">
        <span class="absolute w-[85%] aspect-square rounded-full z-[60] animate-[spin_5s_linear_infinite] bg-[conic-gradient(#34d399_0deg,#34d399_180deg,transparent_180deg,transparent_360deg)]"></span>
      </div>
    </div>
  );
};
