import React, { useContext, useState } from "react";
import "../../../css/steps.css";
import StepContext from "../../../contexts/StepContext";
const Step2: React.FC = () => {
  const { state, setState } = useContext(StepContext);
  const [idade, setIdade] = useState("");

  return (
    <div className="container">
      <h1>step: 2 </h1>
      <input type="number" onChange={(e) => setIdade(e.target.value)} />
      <button onClick={() => setState({ ...state, age: Number(idade) })}>
        atualizar idade
      </button>
      <br />
      <div className="button-container">
        <button
          onClick={() => setState({ ...state, stepIndex: state.stepIndex - 1 })}
        >
          voltar
        </button>
        <button
          onClick={() => setState({ ...state, stepIndex: state.stepIndex + 1 })}
        >
          avançar
        </button>
      </div>
    </div>
  );
};

export default Step2;
