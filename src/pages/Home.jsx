import redline from "../assets/redline.svg";
import map from "../assets/map.svg";

import { LoginCard } from "../components/LoginCard";

export const Home = () => {
  return (
    <div className="bg-slate-100 h-full">
      <div className="grid md:grid-cols-2 p-2 md:p-6 md:gap-4 px-4 md:">
        <div className="flex flex-col md:relative">
          <div className="text-3xl md:text-6xl grid md:gap-3 mx-3 py-6 md:py-10 md:z-10">
            <div className="flex">
              Ensuring{" "}
              <span className="grid ml-4">
                Safety,
                <img src={redline} alt="Red underline" className="w-24 md:w-full" />
              </span>
            </div>
            <div>Empowering People</div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center mt-3 ml-5 invisible  md:visible">
            <img 
              src={map} 
              alt="Coverage map" 
              className="w-full object-contain "
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