import firedepartment from "../assets/firedepartment.svg";
import intergratedpartner from "../assets/intergratedpartner.svg";
import individual from "../assets/individual.svg";
import emaillogo from "../assets/email.svg";
import passwordlogo from "../assets/password.svg";
import whatsapp from "../assets/whatsapp.svg";
import instagram from "../assets/instagram.svg";
import gmail from "../assets/gmail.svg";
import x from "../assets/x.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export const LoginCard = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selected, setSelected] = useState(null);

  const navigatemap = () => {
    if (!email && !password) {
      alert("Please fill all the fields");
      return;
    }
    navigate("/map");
  };

  const handleSelect = (option) => {
    setSelected(option);
  };

  return (
    <div className="bg-white p-4 w-fit shadow-2xl rounded-3xl">
      <div className="text-2xl">
        Hello, <span className="text-red-600">Welcome</span>
      </div>
      <div className="grid px-3 my-4">
        <div className="grid grid-cols-3 text-sm gap-4">
          <div
            className={`grid justify-center gap-2 cursor-pointer ${
              selected === "firedepartment" ? "border-black" : "border-gray-50"
            }`}
            onClick={() => handleSelect("firedepartment")}
          >
            <div
              className={`border-2 w-fit rounded-full ml-2 ${
                selected === "firedepartment"
                  ? "border-black shadow-xl"
                  : "border-gray-200"
              }`}
            >
              <img src={firedepartment} alt="Fire Department" />
            </div>
            <div className="flex justify-center">Fire Department</div>
          </div>

          <div
            className={`grid justify-center gap-2 cursor-pointer ${
              selected === "intergratedpartner"
                ? "border-black "
                : "border-gray-200"
            }`}
            onClick={() => handleSelect("intergratedpartner")}
          >
            <div
              className={`border-2 w-fit p-2 rounded-full ml-2 ${
                selected === "intergratedpartner"
                  ? "border-black shadow-xl"
                  : "border-gray-200"
              }`}
            >
              <img src={intergratedpartner} alt="Integrated Partner" />
            </div>
            <div className="flex justify-center">Integrated Partner</div>
          </div>

          <div
            className={`grid justify-center gap-2 cursor-pointer  ${
              selected === "individual" ? "border-black" : "border-gray-200"
            }`}
            onClick={() => handleSelect("individual")}
          >
            <div
              className={`border-2 w-fit p-2 rounded-full ml-2 ${
                selected === "individual" ? "border-black shadow-xl" : "border-gray-200"
              }`}
            >
              <img src={individual} alt="Individual" />
            </div>
            <div className="flex justify-center">Individual</div>
          </div>
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
                  setEmail(e);
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
                  setPassword(e);
                }}
              ></input>
            </div>
            <div className="grid gap-6">
              <div className="flex justify-end mt-2 cursor-pointer">
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
