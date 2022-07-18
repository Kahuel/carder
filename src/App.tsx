import React from "react";
import { BattleField } from "./components";

const App: React.FC = () => {
  return (
    <div style={{ height: "300px", width: "400px", background: "green" }}>
      <BattleField />
    </div>
  );
};

export default App;
