import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import background from "./assets/dark.jpg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      className="bg-[length:60px]  h-screen w-full rounded opacity-1 flex  flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
      }}
    >
      <div className="text-white border-slate-300 border-2 rounded-lg p-4">
        <h2>To do List</h2>
      </div>
    </div>
  );
}

export default App;
