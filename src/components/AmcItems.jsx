import AmcButton from "../components/AmcButton";
import OkButton from "./OkButton";

export const AMCItems = () => {
    
  return (
    <div className="border-2 my-4 bg-white p-4 rounded-xl">
      {/* Panels Section */}
      <div className="grid grid-cols-5 pb-6 border-b-2">
        <div className="flex flex-col justify-center text-2xl">
          <div className="flex justify-center">Panel</div>
        </div>
        <div className="grid justify-center gap-6 border-r-2 border-dashed">
          <div className="flex justify-center text-lg">Alarm</div>
          <div><AmcButton /></div>
        </div>
        <div className="grid justify-center gap-6 border-r-2 border-dashed">
          <div className="flex justify-center text-lg">MCC</div>
          <div><AmcButton /></div>
        </div>
        <div className="grid justify-center gap-6 border-r-2 border-dashed">
          <div className="flex justify-center text-lg">Repeater</div>
          <div><AmcButton /></div>
        </div>
        <div className="grid justify-center gap-6">
          <div className="flex justify-center text-lg">Deluge</div>
          <div><AmcButton /></div>
        </div>
      </div>

      {/* Pumps Section */}
      <div className="grid grid-cols-5 pb-6 border-b-2 my-4">
        <div className="flex flex-col justify-center text-2xl">
          <div className="flex justify-center">Pump</div>
        </div>
        <div className="grid justify-center gap-6 border-r-2 border-dashed">
          <div className="flex justify-center text-lg">Main Hydrant</div>
          <div><AmcButton /></div>
          <div className="flex justify-center text-lg">Drencher</div>
          <div><AmcButton /></div>
        </div>
        <div className="grid justify-center gap-6 border-r-2 border-dashed">
          <div className="flex justify-center text-lg">Jockey Hydrant</div>
          <div><AmcButton /></div>
          <div className="flex justify-center text-lg">Stand by Electric</div>
          <div><AmcButton /></div>
        </div>
        <div className="grid justify-center gap-6 border-r-2 border-dashed">
          <div className="flex justify-center text-lg">Main Sprinkler</div>
          <div><AmcButton /></div>
          <div className="flex justify-center text-lg">Stand by DE</div>
          <div><AmcButton /></div>
        </div>
        <div className="grid justify-center gap-6">
          <div className="flex justify-center text-lg">Jockey Sprinkler</div>
          <div><AmcButton /></div>
          <div className="flex justify-center text-lg">Sump Pump</div>
          <div><AmcButton /></div>
        </div>
      </div>

      {/* Valves Section */}
      <div className="grid grid-cols-5 pb-6 border-b-2 my-4">
        <div className="flex flex-col justify-center text-2xl">
          <div className="flex justify-center">Valves</div>
        </div>
        <div className="grid justify-center gap-6 border-r-2 border-dashed">
          <div className="flex justify-center text-lg">Butterfly</div>
          <div><AmcButton /></div>
          <div className="flex justify-center text-lg">PRV</div>
          <div><AmcButton /></div>
          <div className="flex justify-center text-lg">Stand Post WM</div>
          <div><AmcButton /></div>
        </div>
        <div className="grid justify-center gap-6 border-r-2 border-dashed">
          <div className="flex justify-center text-lg">NRV</div>
          <div><AmcButton /></div>
          <div className="flex justify-center text-lg">Fire Hydrant</div>
          <div><AmcButton /></div>
          <div className="flex justify-center text-lg">Below</div>
          <div><AmcButton /></div>
        </div>
        <div className="grid justify-center gap-6 border-r-2 border-dashed">
          <div className="flex justify-center text-lg">Deluge</div>
          <div><AmcButton /></div>
          <div className="flex justify-center text-lg">Two way Breaching</div>
          <div><AmcButton /></div>
          <div className="flex justify-center text-lg">Air Release</div>
          <div><AmcButton /></div>
        </div>
        <div className="grid justify-center ">
          <div className="flex justify-center text-lg">Air Release</div>
          <div><AmcButton /></div>
          <div className="flex justify-center text-lg">Four Way IB</div>
          <div><AmcButton /></div>
          
        </div>
      </div>

      {/* Gauges Section */}
      <div className="grid grid-cols-5 pb-6 border-b-2">
        <div className="flex flex-col justify-center text-2xl">
          <div className="flex justify-center">Gauges</div>
        </div>
        <div className="grid justify-center gap-6 border-r-2 border-dashed">
          <div className="flex justify-center text-lg">Pressure Gauge</div>
          <div><AmcButton /></div>
        </div>
      </div>

      {/* Pressure Switch Section */}
      <div className="grid grid-cols-5 pb-6 border-b-2 my-4">
        <div className="flex flex-col justify-center text-2xl">
          <div className="flex justify-center">Pressure Switch</div>
        </div>
        <div className="grid justify-center gap-6 border-r-2 border-dashed">
          <div className="flex justify-center text-lg">Main Hydrant</div>
          <div><AmcButton /></div>
        </div>
        <div className="grid justify-center gap-6 border-r-2 border-dashed">
          <div className="flex justify-center text-lg">Jockey Hydrant</div>
          <div><AmcButton /></div>
        </div>
        <div className="grid justify-center gap-6 border-r-2 border-dashed">
          <div className="flex justify-center text-lg">Main Sprinkler</div>
          <div><AmcButton /></div>
        </div>
        <div className="grid justify-center gap-6">
          <div className="flex justify-center text-lg">Jockey Sprinkler</div>
          <div><AmcButton /></div>
        </div>
      </div>

      {/* Fire Hose Box Section */}
      <div className="grid grid-cols-5 pb-6 border-b-2 my-4">
        <div className="flex flex-col justify-center text-2xl">
          <div className="flex justify-center">Fire Hose Box</div>
        </div>
        <div className="grid justify-center gap-6 border-r-2 border-dashed">
          <div className="flex justify-center text-lg">Enclosure</div>
          <div><AmcButton /></div>
        </div>
        <div className="grid justify-center gap-6 border-r-2 border-dashed">
          <div className="flex justify-center text-lg">Fire Hose</div>
          <div><AmcButton /></div>
        </div>
        <div className="grid justify-center gap-6 border-r-2 border-dashed">
          <div className="flex justify-center text-lg">Fire Hose Coupling</div>
          <div><AmcButton /></div>
        </div>
        <div className="grid justify-center gap-6">
          <div className="flex justify-center text-lg">Branch Pipe</div>
          <div><AmcButton /></div>
        </div>
      </div>

      {/* Hose Pipe Reel Section */}
      <div className="grid grid-cols-5 pb-6 border-b-2 my-4">
        <div className="flex flex-col justify-center text-2xl">
          <div className="flex justify-center">Hose Pipe Reel</div>
        </div>
        <div className="grid justify-center gap-6 border-r-2 border-dashed">
          <div className="flex justify-center text-lg">Shift-off Nozzle</div>
          <div><AmcButton /></div>
        </div>
        <div className="grid justify-center gap-6">
          <div className="flex justify-center text-lg">Ball Valve</div>
          <div><AmcButton /></div>
        </div>
      </div>

      {/* Detectors Section */}
      <div className="grid grid-cols-5 pb-6 border-b-2 my-4">
        <div className="flex flex-col justify-center text-2xl">
          <div className="flex justify-center">Detectors</div>
        </div>
        <div className="grid justify-center gap-6 border-r-2 border-dashed">
          <div className="flex justify-center text-lg">Smoke</div>
          <div><AmcButton /></div>
        </div>
        <div className="grid justify-center gap-6 border-r-2 border-dashed">
          <div className="flex justify-center text-lg">Flame</div>
          <div><AmcButton /></div>
        </div>
        <div className="grid justify-center gap-6">
          <div className="flex justify-center text-lg">Heat</div>
          <div><AmcButton /></div>
        </div>
      </div>

      {/* Miscellaneous Items Section */}
      <div className="grid grid-cols-5 pb-6 border-b-2 my-4">
        
        <div className="grid justify-center gap-6 border-r-2 border-dashed">
          <div className="flex justify-center text-lg">Sprinkler</div>
          <div><OkButton /></div>
        </div>
        <div className="grid justify-center gap-6 border-r-2 border-dashed">
          <div className="flex justify-center text-lg">Sand Bucket</div>
          <div><OkButton /></div>
        </div>
        <div className="grid justify-center gap-6 border-r-2 border-dashed">
          <div className="flex justify-center text-lg">Signages</div>
          <div><OkButton /></div>
        </div>
        <div className="grid justify-center gap-6 border-r-2 border-dashed">
          <div className="flex justify-center text-lg">Extinguishers</div>
          <div><OkButton /></div>
        </div>
         
        <div className="grid justify-center gap-6">
          <div className="flex justify-center text-lg">Air Vessel Tank</div>
          <div><OkButton /></div>
        </div>
      </div>

      {/* Others Section */}
      <div className="grid grid-cols-5 pb-6 border-b-2 my-4">
        
        <div className="grid justify-center gap-6">
          <div className="flex justify-center text-lg">Others</div>
          <div><OkButton /></div>
        </div>
      </div>
    </div>
  );
};
