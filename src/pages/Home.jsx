import React from 'react';
import redline from "../assets/redline.svg";
import map from "../assets/map.svg";
import { LoginCard } from "../components/LoginCard";

export const Home = () => {
  return (
    <div className="bg-slate-100 min-h-screen flex flex-col md:flex-row">
      <div className="flex-1 p-6 flex flex-col justify-between md:justify-center">
        <div className="text-3xl md:text-6xl font-bold md:font-normal mx-3 md:py-10">
          <div className="flex ">
            Ensuring
            <span className="ml-4">
              Safety,
              <img src={redline} alt="Red underline" className=" w-auto mt-2" />
            </span>
          </div>
          <div className="mt-4">Empowering People</div>
        </div>
        <div className="relative mt-4 hidden md:block">
          <img 
            src={map} 
            alt="Coverage map" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center px-4 md:p-6">
        <LoginCard />
      </div>

      {/* Mobile view map */}
      <div className="md:hidden relative mt-4 w-full h-64">
        <img 
          src={map} 
          alt="Coverage map" 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};
