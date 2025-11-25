import { Suspense, useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Tickets from "./components/Tickets/Tickets";
import TaskStatus from "./components/TaskStatus/TaskStatus";
import Footer from "./components/Footer/Footer";
import { toast, ToastContainer } from "react-toastify";

const fetchTickets = async () => {
  const res = await fetch("./data.json");
  return res.json();
};

const ticketPromise = fetchTickets();

function App() {
  const [progress, setProgress] = useState([]);

  const [resolved, setResolved] = useState([]);

  const handleProgress = (task) => {
    const isAlreadyInProgress = progress.find((item) => item.id === task.id);
    if (isAlreadyInProgress) {
      toast("already added in progress");
      return;
    } else {
      const newProgress = [...progress, task];

      setProgress(newProgress);
    }
  };

  const handleResolved = (resolvedTask) => {
    const isAlreadyResolved = resolved.some(
      (item) => item.id === resolvedTask.id
    );
    if (isAlreadyResolved) {
      toast("sorry already added");
      return;
    } else {
      const newResolved = [...resolved, resolvedTask];
      setResolved(newResolved);
    }

    const updatedProgress = progress.filter(
      (task) => task.id !== resolvedTask.id
    );
    setProgress(updatedProgress);
  };

  return (
    <>
      <Navbar></Navbar>

      <Banner progress={progress} resolved={resolved} />

      {/* Responsive Main Layout */}
      <div className="flex flex-col md:flex-row md:space-x-4 mt-6 px-2 md:px-6">
        <div className="w-full md:w-3/4 mb-4 md:mb-0">
          <Suspense fallback={<p>Waiting for data...</p>}>
            <Tickets
              handleProgress={handleProgress}
              ticketPromise={ticketPromise}
            ></Tickets>
          </Suspense>
        </div>

        <div className="w-full md:w-1/4">
          <TaskStatus
            progress={progress}
            resolved={resolved}
            handleResolved={handleResolved}
          ></TaskStatus>
        </div>
      </div>

      <Footer className="mt-8"/>
      <ToastContainer />
    </>
  );
}

export default App;
