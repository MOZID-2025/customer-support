import React from "react";

const h3 = () => {
  return (
    <div className="bg-gray-50">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-wrap -mx-4 ">
          <div className="w-full md:w-1/2 p-4">
            <div
              className="rounded-xl p-8 text-white shadow-xl 
                  bg-gradient-to-br from-purple-700 to-indigo-600 
                  overflow-hidden relative min-h-[200px] flex flex-col justify-center items-center"
            >
              <div className="absolute inset-0 opacity-10"></div>

              <div className="text-center">
                <p className="text-2xl mb-2">In-Progress</p>
                <p className="text-4xl font-bold mt-4">0</p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 p-4">
            <div
              className="rounded-xl p-8 text-white shadow-xl 
                  bg-gradient-to-br from-green-500 to-green-700 
                  overflow-hidden relative min-h-[200px] flex flex-col justify-center items-center"
            >
              <div className="absolute inset-0 opacity-10"></div>

              <div className="text-center">
                <p className="text-2xl">Resolved</p>
                <p className="text-4xl font-bold mt-4">0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default h3;
