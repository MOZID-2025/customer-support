import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Service from "./components/Service/Service";
import { Suspense, useState } from "react";
import Footer from "./components/Footer/Footer";
import { toast, ToastContainer } from "react-toastify";

const fetchService = async () => {
  const res = await fetch("/Service.json");
  return res.json();
};

const servicePromise = fetchService();

function App() {
  const [inProgressCount, setInProgressCount] = useState(0);
  const [resolvedCount, setResolvedCount] = useState(0);
  const [tasks, setTasks] = useState([]);
  const [resolvedTasks, setResolvedTasks] = useState([]);
  const [allServices, setAllServices] = useState([]);

  const handleCardClick = (ticket) => {
    toast.success("Ticket Selected!");
    setTasks((prev) => [...prev, ticket]);
    setInProgressCount((prev) => prev + 1);
  };

  const handleComplete = (taskId, taskTitle) => {
    toast.info(`🎉 Task "${taskTitle}" Completed!`);
    setResolvedCount((prev) => prev + 1);
    setInProgressCount((prev) => (prev > 0 ? prev - 1 : 0));
    setResolvedTasks((prev) => [...prev, taskTitle]);
    setTasks((prev) => prev.filter((t) => t.id !== taskId));
    setAllServices((prev) => prev.filter((s) => s.id !== taskId));
  };

  return (
    <>
      <Navbar />
      <Hero inProgress={inProgressCount} resolved={resolvedCount} />
      <Suspense
        fallback={<span className="loading loading-dots loading-xl"></span>}
      >
        <Service
          servicePromise={servicePromise}
          onCardClick={handleCardClick}
          tasks={tasks}
          handleComplete={handleComplete}
          resolvedTasks={resolvedTasks}
          allServices={allServices}
          setAllServices={setAllServices}
        />
      </Suspense>
      <Footer />

      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}

export default App;
