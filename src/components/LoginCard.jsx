import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import firedepartment from "../assets/firedepartment.svg";
import intergratedpartner from "../assets/intergratedpartner.svg";
import individual from "../assets/individual.svg";
import emaillogo from "../assets/email.svg";
import passwordlogo from "../assets/password.svg";
import whatsapp from "../assets/whatsapp.svg";
import instagram from "../assets/instagram.svg";
import gmail from "../assets/gmail.svg";
import x from "../assets/x.svg";

export const LoginCard = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selected, setSelected] = useState(null);

  const navigatemap = () => {
    if (!email ||  !password) {
      alert("Please fill all the fields");
      return;
    }
    if (!selected){
      alert("Please select the authority");
      return;
    }
    navigate("/map");
  };

  const handleSelect = (option) => {
    setSelected(option);
  };

  const options = [
    { id: "firedepartment", image: firedepartment, label: "Fire Department" },
    {
      id: "intergratedpartner",
      image: intergratedpartner,
      label: "Integrated Partner",
    },
    { id: "individual", image: individual, label: "Individual" },
  ];

  return (
    <div className="bg-white p-4 w-fit shadow-2xl rounded-3xl">
      <div className="text-2xl p-2">
        Hello, <span className="text-red-600">Welcome</span>
      </div>
      <div className="grid px-2 my-4">
        <div className="grid grid-cols-3 text-sm gap-3">
          {options.map((option) => (
            <div
              key={option.id}
              className={`grid justify-center gap-2 cursor-pointer ${
                selected === option.id ? "border-black" : "border-gray-50"
              }`}
              onClick={() => handleSelect(option.id)}
            >
              <div
                className={`border-2 w-20 h-20 ${
                  option.label === "Integrated Partner" ? "md:ml-4 " : "md:ml-0"
                } flex items-center justify-center rounded-full ${
                  selected === option.id
                    ? "border-black shadow-xl"
                    : "border-gray-200"
                }`}
              >
                <img
                  src={option.image}
                  alt={option.label}
                  className="max-w-full max-h-full p-2"
                />
              </div>
              <div className="flex items-center justify-center text-center">
                {option.label}
              </div>
            </div>
          ))}
        </div>
        <div className="my-4">
          {" "}
          <div className="grid gap-4">
            <div className="border-2 flex  p-3 w-full rounded-2xl space-x-6">
              <div className="flex flex-col justify-center">
                <img src={emaillogo} className="h-5 w-5 "></img>
              </div>
              <input
                className="border-none outline-none text-lg"
                placeholder="Email"
                type="text"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              ></input>
            </div>

            <div className="border-2 flex  p-3 w-full rounded-2xl space-x-6">
              <div className="flex flex-col justify-center">
                <img src={passwordlogo} className="h-5 w-5 "></img>
              </div>
              <input
                className="border-none outline-none text-lg"
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              ></input>
            </div>
            <div className="grid gap-4">
              <div className="flex justify-end  cursor-pointer text-sm">
                Forgot password ?
              </div>

              <div className="w-full flex justify-center">
                <div
                  className="border p-2 w-fit px-24 rounded-2xl text-lg text-white bg-black text-md cursor-pointer"
                  onClick={navigatemap}
                >
                  Log In
                </div>
              </div>

              <div className="w-full flex justify-center">
                <div className="text-sm text-slate-400 cursor-pointer">
                  Don't have an account?{" "}
                  <span className="text-black underline ">Sign Up</span>
                </div>
              </div>

              <div className="w-full flex justify-center">
                <div className="text-xs grid gap-2 ">
                  <div className="text-black flex justify-center ">
                    Connect us on
                  </div>
                  <div className="grid grid-cols-4 gap-10">
                    <div>
                      <img
                        src={whatsapp}
                        className="h-6 w-6 cursor-pointer"
                      ></img>
                    </div>
                    <div>
                      <img
                        src={instagram}
                        className="h-6 w-6 cursor-pointer"
                      ></img>
                    </div>
                    <div>
                      <img src={gmail} className="h-6 w-6 cursor-pointer"></img>
                    </div>
                    <div>
                      <img src={x} className="h-6 w-6 cursor-pointer"></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
