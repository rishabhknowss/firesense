import React from "react";
import { useLocation } from "react-router-dom";

import { Speedometer } from "../components/Speedometer";
import MotorControlPanel from "../components/MotorControlPanel";
import { LocationDashboard } from "../components/LocationDashboard";
import { HealthStatus } from "../components/HealthStatus";
import { WaterTankLevel } from "../components/WaterTankLevel";
import { FireAlarm } from "../components/FireAlarm";
import { Navbar } from "../components/Navbar";

export const Dashboard = () => {
  const location = useLocation();
  const { role, user, relationships, selectedIndividual } = location.state;

  return (
    <div>
     
    <div className="bg-slate-100 p-4">
      <div className="grid grid-cols-5 gap-4 justify-items-stretch">
        <div className="col-span-2 justify-self-stretch">
          <LocationDashboard 
            role={role} 
            user={user} 
            relationships={relationships} 
            selectedIndividual={selectedIndividual}
          />
        </div>
        <div className="col-span-1">
          <HealthStatus />
        </div>
        <div className="col-span-2 row-span-4">
          <Speedometer />
        </div>

        <div className="col-span-2 justify-self-stretch">
          <WaterTankLevel />
        </div>

        <div className="col-span-1">
          <FireAlarm />
        </div>

        <div className="col-span-3 row-span-2">
          <MotorControlPanel />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
