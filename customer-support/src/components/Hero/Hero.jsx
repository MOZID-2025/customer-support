import React from "react";
import bgImg from "../../assets/vector1.png";

const Hero = ({ inProgress, resolved }) => {
  return (
    <div className="bg-gray-50 py-6">
      <div className="max-w-[1280px] mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-6">
          {/* In Progress */}
          <div className="w-full md:w-1/2">
            <div
              className="rounded-xl p-6 sm:p-8 text-white shadow-xl 
                bg-gradient-to-br from-purple-700 to-indigo-600 
                overflow-hidden relative min-h-[180px] sm:min-h-[200px] 
                flex flex-col justify-center items-center"
            >
              <div className="absolute">
                <img src={bgImg} alt="" />
              </div>
              <div className="text-center">
                <p className="text-xl sm:text-2xl mb-2">In-Progress</p>
                <p className="text-3xl sm:text-4xl font-bold mt-2 sm:mt-4">
                  {inProgress}
                </p>
              </div>
            </div>
          </div>

          {/* Resolved */}
          <div className="w-full md:w-1/2">
            <div
              className="rounded-xl p-6 sm:p-8 text-white shadow-xl 
                bg-gradient-to-br from-green-500 to-green-700 
                overflow-hidden relative min-h-[180px] sm:min-h-[200px] 
                flex flex-col justify-center items-center"
            >
              <div className="absolute">
                <img src={bgImg} alt="" />
              </div>
              <div className="text-center">
                <p className="text-xl sm:text-2xl">Resolved</p>
                <p className="text-3xl sm:text-4xl font-bold mt-2 sm:mt-4">
                  {resolved}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
