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
import data from './data.json';

export const LoginCard = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selected, setSelected] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);

  // Function to validate login credentials and retrieve relationships
  const validateLogin = (email, password, role) => {
    for (const fireDepartment of data.fireDepartments) {
      if (role === "Fire Department" && fireDepartment.email === email && fireDepartment.password === password) {
        return { 
          role: 'Fire Department', 
          user: fireDepartment, 
          relationships: {
            integratedPartners: fireDepartment.integratedPartners 
          }
        };
      }

      for (const partner of fireDepartment.integratedPartners) {
        if (role === "Integrated Partner" && partner.email === email && partner.password === password) {
          return { 
            role: 'Integrated Partner', 
            user: partner, 
            relationships: {
              fireDepartment: fireDepartment.name,
              individuals: partner.individuals 
            }
          };
        }

        for (const individual of partner.individuals) {
          if (role === "Individual" && individual.email === email && individual.password === password) {
            return { 
              role: 'Individual', 
              user: individual, 
              relationships: {
                fireDepartment: fireDepartment.name,
                integratedPartner: partner.name
              }
            };
          }
        }
      }
    }
    return null; // Invalid credentials
  };

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please fill all the fields");
      return;
    }
    if (!selected) {
      alert("Please select the authority");
      return;
    }

    // Validate credentials based on selected role
    const roleLabel = options.find(option => option.id === selected)?.label;
    const userDetails = validateLogin(email, password, roleLabel);

    if (userDetails) {
      console.log("Login successful!");
      console.log("User details:", userDetails.user);
      console.log("Relationships:", userDetails.relationships);

      // Navigate to the appropriate page based on role
      if (userDetails.role === 'Individual') {
        navigate('/dashboard', { state: userDetails });
      } else {
        // Navigate to the departments page and pass the user details
        navigate("/departments", { state: userDetails });
      }
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  const handleSelect = (option) => {
    setSelected(option);
  };

  const options = [
    { id: "firedepartment", image: firedepartment, label: "Fire Department" },
    { id: "intergratedpartner", image: intergratedpartner, label: "Integrated Partner" },
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
                  option.label === "Integrated Partner" || option.label === "Fire Department" ? "md:ml-4 " : "md:ml-0"
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
          <div className="grid gap-4">
            <div className="border-2 flex p-3 w-full rounded-2xl space-x-6">
              <div className="flex flex-col justify-center">
                <img src={emaillogo} className="h-5 w-5 " alt="email logo"/>
              </div>
              <input
                className="border-none outline-none text-lg"
                placeholder="Email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="border-2 flex p-3 w-full rounded-2xl space-x-6">
              <div className="flex flex-col justify-center">
                <img src={passwordlogo} className="h-5 w-5 " alt="password logo"/>
              </div>
              <input
                className="border-none outline-none text-lg"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="grid gap-4">
              <div className="flex justify-end cursor-pointer text-sm">
                Forgot password?
              </div>

              <div className="w-full flex justify-center">
                <div
                  className="border p-2 w-fit px-24 rounded-2xl text-lg text-white bg-black text-md cursor-pointer"
                  onClick={handleLogin}
                >
                  Log In
                </div>
              </div>

              <div className="w-full flex justify-center">
                <div className="text-sm text-slate-400 cursor-pointer">
                  Don't have an account?{" "}
                  <span className="text-black underline">Sign Up</span>
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
                        alt="whatsapp"
                      />
                    </div>
                    <div>
                      <img
                        src={instagram}
                        className="h-6 w-6 cursor-pointer"
                        alt="instagram"
                      />
                    </div>
                    <div>
                      <img
                        src={gmail}
                        className="h-6 w-6 cursor-pointer"
                        alt="gmail"
                      />
                    </div>
                    <div>
                      <img
                        src={x}
                        className="h-6 w-6 cursor-pointer"
                        alt="x"
                      />
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
