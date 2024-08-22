import React from "react";
import { useLocation } from "react-router-dom";
import education from "../assets/education.svg";
import { MdLocalHospital } from "react-icons/md";
import { FaHotel } from "react-icons/fa6";

export const LocationDashboard = () => {
  const location = useLocation();
  const { role, user, relationships, selectedIndividual } =
    location.state || {};

  console.log("Location state:", location.state);

  // Validate relationships and selectedIndividual
  if (!relationships || (role !== "Individual" && !selectedIndividual)) {
    return <div>Error: Invalid relationships or selected individual</div>;
  }

  // Find the related Fire Department and Integrated Partner
  let fireDepartmentName, integratedPartnerName, client;

  if (role === "Fire Department") {
    fireDepartmentName = user.name;
    integratedPartnerName =
      relationships.integratedPartners.find((partner) =>
        partner.individuals.some((ind) => ind.name === selectedIndividual.name)
      )?.name || "Integrated Partner Name";
    client =
      relationships.integratedPartners
        .flatMap((partner) => partner.individuals)
        .find((individual) => individual.name === selectedIndividual.name) ||
      {};
  } else if (role === "Integrated Partner") {
    fireDepartmentName = relationships.fireDepartment;
    integratedPartnerName = user.name;
    client =
      relationships.individuals.find(
        (individual) => individual.name === selectedIndividual.name
      ) || {};
  } else if (role === "Individual") {
    fireDepartmentName = relationships.fireDepartment;
    integratedPartnerName = relationships.integratedPartner;
    client = user;
  } else {
    return <div>Error: Invalid role</div>;
  }

  return (
    <div className="bg-white border-2 rounded-xl shadow-xl py-5">
      <div className="flex space-x-6">
        <div className="bg-red-600 text-white px-6 py-2 rounded-r-lg shadow-md text-sm">
          {fireDepartmentName}
        </div>
        <div className="flex flex-col justify-center text-xl">
          {integratedPartnerName || "Integrated Partner Name"}
        </div>
      </div>
      <div className="flex px-8 mt-4">
        <div className="p-1 flex items-center space-x-2">
          <div className="border-2 rounded-full shadow-md w-fit p-2">
            {client.type === "Hospital" ? (
              <MdLocalHospital className="h-6 w-6" alt="Hospital icon" />
            ) : client.type === "Residential Building" ? (
              <FaHotel className="h-6 w-6" alt="Residential Building icon" />
            ) : client.type === "College" || client.type === "School" ? (
              <img src={education} className="h-6 w-6" alt="Education icon" />
            ) : (
              <DefaultIcon className="h-6 w-6" alt="Default icon" /> // Fallback for any other type
            )}
          </div>
          <div className="text-gray-500 italic text-sm">
            {client.type || "Client Type"}
          </div>
        </div>
        <div className="flex flex-col justify-center text-lg px-6">
          {client.name || "Client Name"}
        </div>
      </div>
    </div>
  );
};
