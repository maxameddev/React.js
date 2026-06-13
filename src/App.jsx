import { useState } from "react";
import Toggle from "./Toggle";

function App() {
  const [isOn, setIsOn] = useState(false);

  const toggleButton = () => {
    setIsOn(!isOn);
  };

  return (
    <div>
      <button onClick={toggleButton}>
        {isOn ? "Turn Off" : "Turn On"}
      </button>

      <Toggle isOn={isOn} />
    </div>
  );
}

export default App;