import React, { useContext, useState } from "react";
import "../../../css/steps.css";

import StepContext from "../../../contexts/StepContext";
const Step1: React.FC = () => {
  const { state, setState } = useContext(StepContext);
  const [name, setName] = useState("");
  return (
    <div className="container">
      <h1>step: 1 </h1>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setState({ ...state, name: name })}>
        atualizar nome
      </button>
      <br />
      <button
        onClick={() => setState({ ...state, stepIndex: state.stepIndex + 1 })}
      >
        avançar
      </button>
    </div>
  );
};

export default Step1;
