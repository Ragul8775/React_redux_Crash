import { useState } from "react";

import "./App.css";
import background from "./assets/dark.jpg";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

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
      <div
        className="text-white rounded-lg p-4 "
        style={{ background: "rgba(255,255,255,0.2)" }}
      >
        <AddTodo />
        <Todos />
      </div>
    </div>
  );
}

export default App;
