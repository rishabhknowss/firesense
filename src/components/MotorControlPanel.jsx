import React from 'react';
import ReactSpeedometer from "react-d3-speedometer";

const metrics = [
  { name: 'Voltage', min: 0, max: 300, unit: "Volt" },
  { name: 'Current', min: 0, max: 500, unit: "Ampere" },
  { name: 'Frequency', min: 0, max: 60, unit: "Hertz" },
];

const phases = ['R Phase', 'Y Phase', 'B Phase'];

const SpeedometerGroup = ({ phase }) => (
  <div className="p-3 rounded-lg space-y-6 border">
    <h2 className="text-center mb-2 text-sm">{phase}</h2>
    {metrics.map((metric, index) => (
      <div key={index} className="flex justify-center items-center">
        <ReactSpeedometer
          value={Math.random() * (metric.max - metric.min) + metric.min}
          minValue={metric.min}
          maxValue={metric.max}
          currentValueText={metric.unit}
          segments={5}
          segmentColors={["#FF0000", "#fb8500", "#FFFF00", "#70e000", "#38b000"]}
          width={110}
          height={80}
          ringWidth={10}
          needleHeightRatio={0.5}
          needleColor="#333"
          textColor="#333"
          valueTextFontSize="8px"
          labelFontSize="7px"
        />
      </div>
    ))}
  </div>
);

export default function MotorControlCentrePanel() {
  return (
    <div className="w-full max-w-4xl mx-auto bg-white border-2 rounded-lg p-4">
      <h1 className="text-xl text-center mb-6">Motor Control Centre Panel</h1>
      <div className="grid grid-cols-5 gap-3">
        <div className="flex flex-col justify-between py-6 space-y-10">
          {metrics.map((metric, index) => (
            <div key={index} className="text-right pr-3 font-medium flex items-center justify-end">
              {metric.name}
            </div>
          ))}
        </div>
        {phases.map((phase, index) => (
          <SpeedometerGroup key={index} phase={phase} />
        ))}
        <div className="flex flex-col justify-center items-center space-y-3">
          <div className="border-2 p-3 rounded-xl w-36">
            <h2 className="text-center text-lg  mb-3">Alarm</h2>
            <div className="space-y-6">
              <div className="bg-gray-100 rounded-lg py-2 text-center text-sm ">Over Voltage</div>
              <div className="bg-gray-100 rounded-lg py-2 text-center text-sm">Under Voltage</div>
              <div className="bg-gray-100 rounded-lg py-2 text-center text-sm">Single Phase</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
