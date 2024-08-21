import React, { useState } from "react";
import mapbg from "../assets/map-bg.svg";
import search from "../assets/search.svg";
import cloudimg from "../assets/cloudimg.svg";
import clock from "../assets/clock.svg";
import whatsapp from "../assets/whatsapp.svg";
import instagram from "../assets/instagram.svg";
import gmail from "../assets/gmail.svg";
import x from "../assets/x.svg";
import down from "../assets/down.svg";
import vasaivirar from "../assets/vasaivirar.svg";
import { useNavigate } from "react-router-dom";

export const Map = () => {
  const [showRecent, setShowRecent] = useState(false);
  const [map, setMap] = useState(mapbg);
  const [searchCard, setSearchCard] = useState(true);

  const recentSearches = [
    "Madhuban Society",
    "New Venketesh CHSL, 401201",
    "Naigoan",
    "Nalasopara",
    "Vasai-virar",
  ];

  const changemap = () => {
    setMap(vasaivirar);
  };

  const navigate = useNavigate()

  return (
    <div
      className="bg-cover bg-center h-screen w-screen p-4 md:relative"
      style={{ backgroundImage: `url(${map})` }}
    >
      <div className="md:absolute top-4 right-4 bg-red-600 text-white cursor-pointer px-4 py-2 rounded-lg shadow-md " >
        Vasai-Virar Fire Department
      </div>

      <div className="p-6 flex mt-10 md:mt-0 relative">
        <div className={`bg-white p-6 w-80 shadow-2xl rounded-3xl space-y-4 transition-all duration-300 ${searchCard ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}`}>
          <div className="text-2xl font-medium">Hello, Firefighter</div>
          <div className="space-y-4">
            <div className="border-2 flex p-2 rounded-2xl">
              <input
                className="flex-grow border-none outline-none text-lg"
                placeholder="Search"
                type="text"
                onClick={() => setShowRecent(!showRecent)}
              />
              <img
                src={search}
                className="h-5 w-5 cursor-pointer"
                alt="Search"
                onClick={() => changemap()}
              />
            </div>
            {showRecent && (
              <div className="border-2 p-3 rounded-xl text-gray-500">
                <div className="mb-2 flex space-x-2">
                  <div className="flex flex-col justify-center">
                    <img src={clock} className="h-4 w-4" alt="Clock" />
                  </div>
                  <div className="flex flex-col justify-center">
                    Recent Searches
                  </div>
                </div>
                {recentSearches.map((search, index) => (
                  <div
                    key={index}
                    className="text-sm mb-1 last:mb-0 cursor-pointer"
                  >
                    {search}
                    <div className="border border-red-300"></div>
                  </div>
                ))}
              </div>
            )}
            <div
              className="grid gap-2 rounded-lg items-center border-2 p-3 cursor-pointer"
              onClick={()=>navigate('/dashboard')}
            >
              <div className="flex w-full justify-between">
                <div className="flex">Vasai-Virar</div>
                <div className="flex items-center">
                  31° <img src={cloudimg} className="h-6 w-6 ml-1" alt="Cloud" />
                </div>
              </div>

              <div className="border border-red-500"></div>

              <div className="grid grid-cols-3 text-xs">
                <div className="flex justify-center border-r border-red-500">
                  Sunday
                </div>
                <div className="flex justify-center border-r border-red-500">
                  18 Aug 2024
                </div>
                <div className="flex justify-center">10:32 AM</div>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-center">
            <div className="text-xs grid gap-2">
              <div className="text-black flex justify-center">
                Connect us on
              </div>
              <div className="grid grid-cols-4 gap-10">
                <div>
                  <img
                    src={whatsapp}
                    className="h-6 w-6 cursor-pointer"
                    alt="WhatsApp"
                  />
                </div>
                <div>
                  <img
                    src={instagram}
                    className="h-6 w-6 cursor-pointer"
                    alt="Instagram"
                  />
                </div>
                <div>
                  <img
                    src={gmail}
                    className="h-6 w-6 cursor-pointer"
                    alt="Gmail"
                  />
                </div>
                <div>
                  <img src={x} className="h-6 w-6 cursor-pointer" alt="X" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div 
          className={`absolute cursor-pointer transition-all duration-300 ${
            searchCard ? 'left-[334px] md:left-[344px]' : 'left-[-15px]'
          }`}
          style={{top: '50%', transform: 'translateY(-50%)'}}
        >
          <div 
            className="bg-black w-fit h-fit py-4 rounded" 
            onClick={() => setSearchCard(!searchCard)}
          >
            <img 
              src={down} 
              className={`h-4 w-4 transition-transform ${searchCard ? '' : 'rotate-180'}`} 
              alt="Toggle search card" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;