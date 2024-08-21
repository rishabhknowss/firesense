import rooftop from "../assets/rooftop.svg";
export const WaterTankLevel = () => {
  return (
    <div>
      <div className="bg-white border-2 border-gray-200 rounded-xl py-4 px-10">
        <div className="flex justify-center ">
          <div className="flex flex-col justify-center text-lg">
            Water Tank Level
          </div>
        </div>

        <div className="grid grid-cols-2 gap-28 ">
          <div className="flex">
            <div className="py-4 pr-4 flex">
              <img src={rooftop} className="h-8 w-8" alt="Rooftop tank" />
            </div>
            <div className="flex flex-col justify-center ">
              <span className="text-xs">Roof Top</span>
              <span className="text-red-600">25,000 Ltr.</span>
            </div>
          </div>
          <div className="flex">
            <div className="p-4 flex">
              <img src={rooftop} className="h-8 w-8" alt="Underground tank" />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-xs">Under Ground</span>
              <span className="text-red-600">35,000 Ltr.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
