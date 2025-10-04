import React, { use, useEffect } from "react";

const Service = ({
  servicePromise,
  onCardClick,
  tasks,
  handleComplete,
  resolvedTasks,
  allServices,
  setAllServices,
}) => {
  const serviceData = use(servicePromise);

  useEffect(() => {
    if (allServices.length === 0) {
      setAllServices(serviceData);
    }
  }, [serviceData, allServices, setAllServices]);

  return (
    <div className="bg-gray-50">
      <div className="max-w-[1280px] mx-auto p-4 sm:p-6 lg:p-10 flex flex-col lg:flex-row gap-8">
        <div className="flex-grow lg:w-3/4">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            Customer Tickets
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-5">
            {allServices.map((service) => (
              <div
                key={service.id}
                onClick={() => onCardClick(service)}
                className="bg-white p-4 rounded-xl shadow-md border border-gray-100 transition-shadow hover:shadow-lg cursor-pointer"
              >
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-base font-semibold text-gray-900">
                    {service.title}
                  </h2>
                  <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                    <span className="h-2 w-2 mr-1 rounded-full bg-green-500"></span>
                    {service.status}
                  </span>
                </div>

                <p className="text-gray-600 mb-3 text-sm line-clamp-2">
                  {service.description}
                </p>

                <div className="flex justify-between items-center text-xs text-gray-500">
                  <div className="flex items-center space-x-2">
                    <span className="font-mono text-gray-700">
                      #{service.id}
                    </span>
                    <span className="font-semibold text-red-600 bg-red-100 px-1.5 py-0.5 rounded text-xs tracking-wider">
                      {service.priority}
                    </span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <span className="text-gray-700">{service.customer}</span>
                    <div className="flex items-center">
                      <svg
                        className="w-3 h-3 mr-1 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        ></path>
                      </svg>
                      <span className="text-gray-700">{service.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:w-1/4 w-full">
          <div className="p-6 rounded-xl bg-gray-50 sticky top-6">
            <div className="mb-4">
              <h2 className="text-xl font-bold text-gray-800">Task Status</h2>

              {tasks.length > 0 ? (
                <ul className="space-y-3 bg-white p-3 rounded-lg">
                  {tasks.map((task) => (
                    <li key={task.id} className="">
                      <span className="font-semibold block mb-2">
                        {task.title}
                      </span>
                      <button
                        onClick={() => handleComplete(task.id, task.title)}
                        className="bg-green-500 w-full text-white px-3 py-1 font-bold hover:bg-green-600 transition text-sm rounded-md"
                      >
                        Complete
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500 text-sm">
                  Select a ticket to add to Task Status
                </p>
              )}
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-800">
                Resolved Task
              </h3>
              {resolvedTasks.length > 0 ? (
                <ul className="text-sm text-gray-700 mt-2 space-y-2">
                  {resolvedTasks.map((task, idx) => (
                    <li
                      className="bg-[#E0E7FF] p-3 rounded-md text-gray-900"
                      key={idx}
                    >
                      {task}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500 text-sm">No resolved tasks yet.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
