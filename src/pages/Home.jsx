import redline from "../assets/redline.svg";
import map from "../assets/map.svg";
import flame from "/flame.png";

import { LoginCard } from "../components/LoginCard";

export const Home = () => {
  return (
    <div className="bg-slate-100 h-screen">
      <div className="grid md:grid-cols-2 p-2 md:p-6 md:gap-4 px-4 md:">
        <div className="flex flex-col md:relative">
          <div className="text-3xl md:text-6xl grid md:gap-2 mx-3 py-6 md:py-10 md:z-10">
            <div className="flex">
              Ensuring{" "}
              <span className="grid ml-4">
                Safety,
                <img src={redline} alt="Red underline" className="w-24 md:w-full" />
              </span>
            </div>
            <div className="flex">
              <div className="flex flex-col justify-center ">Empowering People </div>
              <img src={flame} alt="Flame" className="w-12 md:w-24" />
            </div>
          </div>
          <div className="absolute w-[900px]  h-full ml-20 inset-0 flex items-center justify-center mt-10 invisible md:visible">
            <img
              src={map}
              alt="Coverage map"
              className="w-full md:w-[900px] object-fit"
            />
          </div>
        </div>

        <div className="col-span-1 items-center content-center justify-center flex">
          <LoginCard />
        </div>
      </div>
    </div>
  );
};