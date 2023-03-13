import { ReactElement } from "react";
import HeroCanvas from "./canvas/HeroCanvas";

export default function Hero(): ReactElement {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="sm:px-16 px-6 absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5">
        <div className="flex flex-col items-center justify-center mt-5">
          <div className="w-5 h-5 rounded-full violet-gradient" />
          <div className="w-1 h-40 sm:h-80 violet-gradient" />
        </div>
        <div>
          <h1 className="font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
            {/* Hi, I'm <span className="text-orange-600"> Yassett </span> */}
          </h1>
          <p
            className={`font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 text-white-100`}
          >
            I develop 3D visuals, user
            <br className="hidden sm:block" />
            interfaces and web
          </p>
        </div>
      </div>
      <HeroCanvas />
    </section>
  );
}