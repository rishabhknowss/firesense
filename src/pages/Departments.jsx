import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const Departments = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, role, relationships } = location.state || {};

  console.log("Location state:", location.state);
  console.log("Role:", role);
  console.log("Relationships:", relationships);

  // Default data if not provided
  const defaultData = {
    fireDepartment: "Default Fire Department",
    integratedPartners: [
      { name: "Default Integrated Partner 1", individuals: [] },
      { name: "Default Integrated Partner 2", individuals: [] },
    ],
  };

  // Extract data based on role or use default
  const fireDepartmentName =
    role === "Fire Department"
      ? user.name
      : role === "Integrated Partner"
      ? relationships?.fireDepartment || defaultData.fireDepartment
      : defaultData.fireDepartment;

  const integratedPartners =
    role === "Fire Department"
      ? relationships?.integratedPartners || defaultData.integratedPartners
      : [];

  const clients =
    role === "Integrated Partner"
      ? relationships?.individuals || defaultData.clients
      : [];

  console.log("Fire Department Name:", fireDepartmentName);
  console.log("Integrated Partners:", integratedPartners);
  console.log("Clients:", clients);

  // Handle individual click to navigate to the dashboard with the selected individual
  const handleIndividualClick = (individual) => {
    navigate("/dashboard", {
      state: {
        role: role,
        user: user,
        relationships: relationships,
        selectedIndividual: individual,
      },
    });
  };

  return (
    <div>
    
      <div className="p-4 px-24 flex justify-center">
        <div className="justify-center border-2 rounded-xl h-fit grid w-[900px]">
          <div>
            <div className="flex p-8 rounded-b-xl justify-center text-3xl bg-red-600 text-white">
              {role === "Fire Department" ? fireDepartmentName : user.name  }
            </div>
          </div>
          <div className="grid grid-cols-2 w-full">
            {role === "Fire Department" &&
              integratedPartners.map((partner, index) => (
                <div key={index} className="p-8 border-r">
                  <div className="text-xl">{partner.name}</div>
                  <div className="mt-4 space-y-6">
                    <div className="mt-2 space-y-3">
                      {partner.individuals.map((individual, i) => (
                        <div
                          key={i}
                          className="border w-fit py-3 cursor-pointer px-6 rounded-xl transition-colors duration-300 hover:bg-black hover:text-white"
                          onClick={() => handleIndividualClick(individual)}
                        >
                          {individual.name}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

            {role === "Integrated Partner" &&
              clients.map((individual, index) => (
                <div
                  key={index}
                  className="border m-5 gap-2 w-fit  py-3 cursor-pointer px-6 rounded-xl transition-colors duration-300 hover:bg-black hover:text-white"
                  onClick={() => handleIndividualClick(individual)}
                >
                  {individual.name}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
