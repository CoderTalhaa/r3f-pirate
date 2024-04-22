import { useContext, useRef } from "react";
import Home from "./components/Home";
import Webgl from "./components/Webgl";
import { DataContext } from "./context/DataContext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import nft from "../src/assets/ntf.jpg"

function App() {
  const {activeData} = useContext(DataContext)
  const ref = useRef(null, useGSAP)

  useGSAP(()=>{
    gsap.to(ref.current,{
      background: activeData.background,
      duration: 0.8,
      ease: 'power3.inOut',
    })
  },[activeData])

  return (
    <div ref={ref} className="w-screen h-screen relative ">
      <h1 className="select-none absolute z-50 text-3xl font-bold text-left tracking-tight my-2 ml-6 md:ml-28 lg:ml-[5vw] lg:my-8"
      style={{color: activeData.logo}}
      >NFT's.</h1>
      <div className=" w-full h-screen flex justify-between items-center flex-col lg:flex-row-reverse">
        <Webgl />
        <Home />
      </div>
    </div>
  );
}

export default App;
