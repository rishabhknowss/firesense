import React from "react";
import download from "../assets/download.svg";

export const DownloadCard = ({ onDownload }) => {
  return (
    <div className="bg-white border-2 rounded-xl p-4">
      <div className="flex justify-center">Download Report File</div>
      <div className="flex justify-center p-3 ">
        <select className="p-3 px-6 bg-slate-100 border-2 rounded-xl cursor-pointer text-md outline-none">
          <option value={"List of Equipments"}>List of Equipments</option>
          <option value="System SLD">System SLD</option>
          <option value="User Manual">User Manual</option>
        </select>
        <div className="flex flex-col justify-center ml-3">.pdf</div>
      </div>
      <div className="flex justify-center cursor-pointer">
        <div
          className="border px-4 py-1 rounded-xl text-white bg-black text-sm flex gap-2"
          onClick={onDownload}
        >
          Download{" "}
          <div className="flex flex-col justify-center">
            <img src={download} className="h-2 w-2" alt="Download icon" />
          </div>
        </div>
      </div>
    </div>
  );
};
