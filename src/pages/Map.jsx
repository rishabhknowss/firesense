import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
import { Navbar } from "../components/Navbar";

export const Map = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Extract user details and relationships from location state
  const { role, user, relationships } = location.state;

  const [showRecent, setShowRecent] = useState(false);
  const [map, setMap] = useState(mapbg);
  const [searchCard, setSearchCard] = useState(true);
  const [currentDate, setCurrentDate] = useState({
    day: '',
    date: '',
    time: ''
  });

  // Change the map background on button click
  const changemap = () => {
    setMap(vasaivirar);
  };

  // Handle redirect to dashboard with all data passed
  const handleIndividualClick = (individual) => {
    navigate("/dashboard", {
      state: {
        role: role,
        user: user,
        relationships: relationships,
        selectedIndividual: individual
      }
    });
  };

  // Update current date and time every second
  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const optionsDate = { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' };
      const optionsTime = { hour: '2-digit', minute: '2-digit', second: '2-digit' };

      setCurrentDate({
        day: now.toLocaleDateString('en-US', optionsDate).split(',')[0],
        date: now.toLocaleDateString('en-US', optionsDate).split(',')[1],
        time: now.toLocaleTimeString('en-US', optionsTime)
      });
    };

    updateDateTime();
    const intervalId = setInterval(updateDateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div><Navbar />
    <div
      className="bg-cover bg-center h-screen w-screen p-4 md:relative"
      style={{ backgroundImage: `url(${map})` }}
    >
      {(role === "Fire Department" || role === "Integrated Partner") && (
        <div className="md:absolute top-4 right-4 bg-red-600 text-white cursor-pointer px-4 py-2 rounded-lg shadow-md">
          {role === "Fire Department"
            ? `Fire Department: ${user.name}`
            : `Partner: ${relationships.fireDepartment}`}
        </div>
      )}

      <div className="p-6 flex mt-10 md:mt-0 relative">
        <div className={`bg-white p-6 w-80 shadow-2xl rounded-3xl space-y-4 transition-all duration-300 ${searchCard ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}`}>
          <div className="text-2xl font-medium">
            Hello, {user.name}
          </div>
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

            {/* Recent Searches Section */}
            {showRecent && (
              <div className="border-2 p-3 rounded-xl text-gray-500">
                <div className="mb-2 flex space-x-2">
                  <div className="flex flex-col justify-center">
                    <img src={clock} className="h-4 w-4" alt="Clock" />
                  </div>
                  <div className="flex flex-col justify-center">
                    Clients
                  </div>
                </div>

                {/* Display individuals under Fire Department */}
                {role === "Fire Department" && relationships.integratedPartners.map((partner, index) => (
                  <div key={index}>
                    <div className="font-semibold mb-2">
                      {partner.name}
                    </div>
                    <div className="pl-4">
                      {partner.individuals.map((individual, i) => (
                        <div
                          key={i}
                          className="text-sm mb-1 last:mb-0 cursor-pointer"
                          onClick={() => handleIndividualClick(individual)}
                        >
                          {individual.name}
                          <div className="border border-red-300"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Display individuals for Integrated Partner role */}
                {role === "Integrated Partner" && relationships.individuals.map((individual, index) => (
                  <div
                    key={index}
                    className="text-sm mb-1 last:mb-0 cursor-pointer"
                    onClick={() => handleIndividualClick(individual)}
                  >
                    {individual.name}
                    <div className="border border-red-300"></div>
                  </div>
                ))}
              </div>
            )}

            <div
              className="grid gap-2 rounded-lg items-center border-2 p-3 cursor-pointer"
              onClick={() => navigate('/dashboard')}
            >
              <div className="flex w-full justify-between">
                <div className="flex">{user.name}</div>
                <div className="flex items-center">
                  31° <img src={cloudimg} className="h-6 w-6 ml-1" alt="Cloud" />
                </div>
              </div>

              <div className="border border-red-500"></div>

              <div className="grid grid-cols-3 text-xs">
                <div className="flex justify-center border-r border-red-500">
                  {currentDate.day}
                </div>
                <div className="flex justify-center border-r border-red-500">
                  {currentDate.date}
                </div>
                <div className="flex justify-center">{currentDate.time}</div>
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
          style={{ top: '50%', transform: 'translateY(-50%)' }}
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
    </div></div>
  );
};

export default Map;
