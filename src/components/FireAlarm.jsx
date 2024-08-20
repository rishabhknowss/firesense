export const FireAlarm = () => {
  return (
    <div className="flex justify-center">
      <div>
        <div className=" bg-white border-2  border-gray-200 rounded-xl py-4 px-2 w-fit">
          <div className="grid gap-5">
            <div className="flex justify-center">Fire Alarm Panel</div>
            <div className="grid grid-cols-3 py-4 px-2">
              <div className="text-green-500 flex justify-center">Healthy</div>
              <div className="flex justify-center">
                <label className=" items-center cursor-pointer ">
                  <input type="checkbox" value="" className="sr-only peer" />
                  <div className="relative w-11 h-6 bg-red-500 peer-focus:outline-none rounded-full peer dark:bg-green-400 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-green-500 peer-checked:bg-red-500"></div>
                </label>
              </div>
              <div className="text-red-600 flex justify-center ">Unhealthy</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
