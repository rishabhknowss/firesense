import React from "react";
import ReactSpeedometer from "react-d3-speedometer";

const metrics = [
  { name: "Voltage", min: 0, max: 300, unit: "Volt" },
  { name: "Current", min: 0, max: 500, unit: "Ampere" },
  { name: "Frequency", min: 0, max: 60, unit: "Hertz" },
];

const phases = ["R Phase", "Y Phase", "B Phase"];

const SpeedometerGroup = ({ phase }) => (
  <div className=" rounded-lg p-4">
    <h2 className="text-center  mb-4">{phase}</h2>
    <div className="space-y-6 border p-4 rounded-lg">
      {metrics.map((metric, index) => (
        <div key={index} className="flex flex-col items-center">
          <ReactSpeedometer
            value={Math.random() * (metric.max - metric.min) + metric.min}
            minValue={metric.min}
            maxValue={metric.max}
            currentValueText={metric.unit}
            segments={5}
            segmentColors={[
              "#FF0000",
              "#fb8500",
              "#FFFF00",
              "#70e000",
              "#38b000",
            ]}
            width={140}
            height={100}
            ringWidth={15}
            needleHeightRatio={0.5}
            needleColor="#333"
            textColor="#333"
            valueTextFontSize="12px"
            labelFontSize="10px"
          />
        </div>
      ))}
    </div>
  </div>
);

export default function MotorControlCentrePanel() {
  return (
    <div className="max-w-5xl mx-auto bg-white border-2 rounded-lg p-6">
      <h1 className="text-2xl  text-center mb-6">Motor Control Centre Panel</h1>
      <div className="grid grid-cols-5 gap-4">
        <div className="space-y-24 pt-8">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="text-right pr-4 mt-16  flex items-center justify-end">
              {metric.name}
            </div>
          ))}
        </div>
        {phases.map((phase, index) => (
          <SpeedometerGroup key={index} phase={phase} />
        ))}

        <div className="mt-20 ">
          <div className="space-y-2  border grid p-3">
            <h2 className=" mb-2  flex justify-center">Alarm</h2>
            <div className="bg-gray-100   text-sm flex-col justify-center flex border rounded-lg">
              <div className="flex justify-center">Over Voltage</div>
            </div>
            <div className="bg-gray-100 rounded  text-sm flex-col justify-center flex">
              <div className="flex justify-center">Under Voltage</div>
            </div>
            <div className="bg-gray-100 rounded  text-sm flex-col justify-center flex">
              <div className="flex justify-center">Single Phase</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
