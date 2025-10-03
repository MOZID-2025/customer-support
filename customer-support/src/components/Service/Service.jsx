import React from "react";

const Service = () => {
  return (
    <div>
      <div className="bg-gray-50">
        <div className="max-w-[1280px] mx-auto  p-6 sm:p-10 flex flex-col lg:flex-row gap-8">
          <div className="flex-grow lg:w-3/4">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">
              Customer Tickets
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100 transition-shadow hover:shadow-lg">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-base font-semibold text-gray-900">
                    Login Issues - Can't Access Account
                  </h2>
                  <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                    <span className="h-2 w-2 mr-1 rounded-full bg-green-500"></span>
                    Open
                  </span>
                </div>

                <p className="text-gray-600 mb-3 text-sm line-clamp-2">
                  Customer is unable to log in to their account. They've tried
                  resetting their password multiple times but still...
                </p>

                <div className="flex justify-between items-center text-xs text-gray-500">
                  <div className="flex items-center space-x-2">
                    <span className="font-mono text-gray-700">#1001</span>
                    <span className="font-semibold text-red-600 bg-red-100 px-1.5 py-0.5 rounded text-xs tracking-wider">
                      HIGH PRIORITY
                    </span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <span className="text-gray-700">John Smith</span>
                    <div className="flex items-center">
                      <svg
                        className="w-3 h-3 mr-1 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        ></path>
                      </svg>
                      <span className="text-gray-700">1/15/2024</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100 transition-shadow hover:shadow-lg">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-base font-semibold text-gray-900">
                    Missing Order Confirmation Email
                  </h2>
                  <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                    Open
                  </span>
                </div>
                <p className="text-gray-600 mb-3 text-sm line-clamp-2">
                  Customer placed an order but didn't receive a confirmation
                  email even though payment succeeded.
                </p>
                <div className="flex justify-between items-center text-xs text-gray-500">
                  <div className="flex items-center space-x-2">
                    <span className="font-mono text-gray-700">#1010</span>
                    <span className="font-semibold text-yellow-600 bg-yellow-100 px-1.5 py-0.5 rounded text-xs tracking-wider">
                      MEDIUM PRIORITY
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-700">Isabella Garcia</span>
                    <div className="flex items-center">
                      <svg
                        className="w-3 h-3 mr-1 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        ></path>
                      </svg>
                      <span className="text-gray-700">1/24/2024</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/4">
            <div className="bg-white p-6 rounded-xl shadow-md sticky top-6">
              <div className="mb-4">
                <h2 className="text-xl font-bold text-gray-800">Task Status</h2>
                <p className="text-gray-500 text-sm">
                  Select a ticket to add to Task Status
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Resolved Task
                </h3>
                <p className="text-gray-500 text-sm ">No resolved tasks yet.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
