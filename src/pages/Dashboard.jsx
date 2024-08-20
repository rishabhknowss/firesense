import React from "react";

import { Speedometer } from "../components/Speedometer";
import MotorControlCentrePanel from "../components/MotorControlPanel";
import { LocationDashboard } from "../components/LocationDashboard";
import { HealthStatus } from "../components/HealthStatus";
import { WaterTankLevel } from "../components/WaterTankLevel";
import { FireAlarm } from "../components/FireAlarm";

export const Dashboard = () => {
  return (
    <div className="bg-slate-100 h-full p-4">
     <div className="grid grid-cols-6">
      <div className="col-span-4 px-4">
        
          <div className="grid " >
            <div className="grid grid-cols-2 gap-6">
              <LocationDashboard />
              <HealthStatus />
            </div>
            <div className="grid grid-cols-2">
              <WaterTankLevel />
              <FireAlarm />
            </div>

          </div>
          <div className="">
            <MotorControlCentrePanel />
          
        </div>

      </div>
      <div className="col-span-2">
        <Speedometer />
      </div>

     </div>
    </div>
  );
};
