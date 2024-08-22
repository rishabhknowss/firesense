import ReactSpeedometer from "react-d3-speedometer";

export const Speedometer = () => {
  const metricsArray = [
    {
      label: "Fire Hydrant System",
      pressure: 7,
      mainPump: true,
      jockeyPump: true,
    },
    {
      label: "Fire Sprinkler System",
      pressure: 5,
      mainPump: true,
      jockeyPump: true,
    },
    {
      label: "Standby System",
      pressure: 10,
      mainPump: true,
      jockeyPump: true,
    },
    {
      label: "Fire Drencher System",
      pressure: 7.5,
      mainPump: true,
      jockeyPump: true,
    },
  ];

  return (
    <div>
      {metricsArray.map((metrics, index) => (
        <div
          key={index}
          className="mx-auto bg-white rounded-xl border-2 overflow-hidden mb-4 pb-0 p-4"
        >
          <h2 className="text-xl flex justify-center">{metrics.label}</h2>
          <div className="grid grid-cols-2 justify-center">
            <div className="flex flex-col justify-center">
              <ReactSpeedometer
                value={metrics.pressure}
                minValue={0}
                maxValue={15}
                currentValueText="Pressure"
                segments={5}
                segmentColors={[
                  "#FF0000",
                  "#fb8500",
                  "#FFFF00",
                  "#70e000",
                  "#38b000",
                ]}
                width={180}
                height={120}
                ringWidth={20}
                needleHeightRatio={0.7}
                needleColor="#333"
                textColor="#333"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex justify-between items-center mb-2 text-gray-600">
                <span>Main Pump</span>
                <span
                  className={`inline-flex  items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    metrics.mainPump
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                 <span className="flex flex-col justify-center">{metrics.mainPump ? "ON" : "OFF"}</span>
                </span>
              </div>
              <div className="flex justify-between items-center mb-2 text-gray-600">
                <span>Jockey Pump</span>
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    metrics.jockeyPump
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {metrics.jockeyPump ? "ON" : "OFF"}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
