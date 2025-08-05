import { useEffect, useState } from "react";

export default function Stopwatch() {
  const [watch, setWatch] = useState("00.00.00");
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        setWatch((prev) => {
          const [hours, minutes, seconds] = prev.split('.').map(Number);
          let newSeconds = seconds + 1;
          let newMinutes = minutes;
          let newHours = hours;

          if (newSeconds >= 60) {
            newSeconds = 0;
            newMinutes += 1;
          }

          if (newMinutes >= 60) {
            newMinutes = 0;
            newHours += 1;
          }

          return `${String(newHours).padStart(2, '0')}.${String(newMinutes).padStart(2, '0')}.${String(newSeconds).padStart(2, '0')}`;
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  const handleReset = () => {
    setIsRunning(false);
    setWatch("00.00.00");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-8 bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800">Stopwatch</h1>

      <div className="w-40 h-40 rounded-full bg-blue-600 text-white flex items-center justify-center font-mono shadow-lg">
        <p>{watch}</p>
      </div>

      <div className="flex gap-4">
        <button
          onClick={() => setIsRunning(true)}
          className="px-6 py-2 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700 transition"
        >
          Start
        </button>

        <button
          onClick={() => setIsRunning(false)}
          className="px-6 py-2 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-700 transition"
        >
          Stop
        </button>

        <button
          onClick={handleReset}
          className="px-6 py-2 rounded-lg bg-gray-600 text-white font-semibold hover:bg-gray-700 transition"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
