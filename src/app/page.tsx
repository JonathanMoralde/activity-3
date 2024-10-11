"use client";

import { useState } from "react";

export default function Home() {
  // Input Numbers state
  const [firstNum, setFirstNum] = useState<number>(0);
  const [secondNum, setSecondNum] = useState<number>(0);

  // Reset states to 0
  const handleReset = () => {
    setFirstNum(0);
    setSecondNum(0);
  };

  return (
    <main className="min-h-screen grid place-items-center">
      <section className="shadow h-[50%] max-w-screen-sm w-full bg-white p-10 flex flex-col items-center justify-center gap-10">
        {/* Sum Display */}
        <h1 className="font-bold text-7xl">{firstNum + secondNum}</h1>

        <div>
          {/* Input Fields */}
          <div className="flex items-center gap-4 mb-4">
            {/* Input for first number */}
            <div>
              <input
                type="number"
                name="firstNum"
                id="firstNum"
                value={firstNum}
                onChange={(e) => setFirstNum(parseInt(e.target.value))}
              />
            </div>

            <p>+</p>

            {/* Input for second number */}
            <div>
              <input
                type="number"
                name="secondNum"
                id="secondNum"
                value={secondNum}
                onChange={(e) => setSecondNum(parseInt(e.target.value))}
              />
            </div>
          </div>

          {/* reset button */}
          <div className="flex justify-center">
            <button
              type="button"
              className="bg-gray-400 hover:opacity-75 transition-all shadow w-1/3 py-1"
              onClick={handleReset}
            >
              RESET
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
