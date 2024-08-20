import education from "../assets/education.svg";
export const LocationDashboard = () => {
  return (
    <div >
      <div className="bg-white border-2 rounded-xl shadow-xl w-fit  py-5  ">
        <div className="flex space-x-6">
          <div className=" bg-red-600 text-white px-6 py-2 rounded-r-lg shadow-md text-sm">
            Vasai-Virar Fire Department
          </div>
          <div className="flex flex-col justify-center text-xl ">TFPC.LLP</div>
        </div>
        <div className="flex px-8 ">
          <div className="p-1 flex">
            <div className="grid ">
              <div className="ml-2 border-2 rounded-full shadow-md w-fit p-2">
                <img src={education} className="h-6 w-6" alt="Education icon" />
              </div>
              <div className=" text-gray-500 italic mt-1 text-sm ">
                Education
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center text-lg px-6">
            St. Gonsalo Garcia College <span>of Arts and Commerce</span>
          </div>
        </div>
      </div>
    </div>
  );
};
