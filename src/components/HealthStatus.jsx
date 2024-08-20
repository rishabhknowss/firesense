export const HealthStatus = () => {
    return <div className="flex justify-center">
    <div >
    <div className=" bg-white w-fit border-2 border-gray-200 rounded-xl p-4 ">
        <div className="flex flex-col items-center justify-center space-y-6">
                    <div className="text-lg text-center">Health Status</div>
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-full bg-green-400"></div>
                      <div className="text-xl">Healthy</div>
                    </div>
                    <div className="grid grid-cols-3 text-xs gap-2 w-full">
                      <div className="flex gap-1 items-center justify-center">
                        <div className="p-1 rounded-full bg-green-400"></div>
                        <div className="flex flex-col justify-center">
                          Healthy
                        </div>
                      </div>
                      <div className="flex gap-1 items-center justify-center">
                        <div className="p-1 rounded-full bg-yellow-400"></div>
                        <div>Moderate</div>
                      </div>
                      <div className="flex gap-1 items-center justify-center">
                        <div className="p-1 rounded-full bg-red-600"></div>
                        <div>Unhealthy</div>
                      </div>
                    </div>
                  </div>

    </div></div></div>
}