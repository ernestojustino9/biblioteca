import { useState } from "react";
import "./App.css";
import AppRoutes from "./AppRoutes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <div id="wrapper"> */}
      <div>
        <AppRoutes />
      </div>
    </>
  );
}

export default App;
