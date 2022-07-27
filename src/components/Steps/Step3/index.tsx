import React, { useContext } from "react";
import "../../../css/steps.css";
import StepContext from "../../../contexts/StepContext";
const Step3: React.FC = () => {
  const { state } = useContext(StepContext);

  return (
    <div className="container">
      <h1>
        Parabéns {state.name}, voce fara {state.age + 1} anos no ano que vem
      </h1>
    </div>
  );
};

export default Step3;
