import React, { createContext, useState } from "react";

//Tipando os dados que quero para usuário

type IContextProps = {
  children: React.ReactNode;
};

type IStepType = {
  name: string;
  age: number;
  id: number;
  stepIndex: number;
};

//Tipando as Props do contexto
type PropsStepContext = {
  state: IStepType;
  setState: React.Dispatch<React.SetStateAction<IStepType>>;
};

//Valor default do contexto
const DEFAULT_VALUE = {
  state: {
    name: "",
    age: 0,
    id: 0,
    stepIndex: 0,
  },
  setState: () => {},
};

const StepContext = createContext<PropsStepContext>(DEFAULT_VALUE);

const StepContextProvider: React.FC<IContextProps> = ({ children }) => {
  const [state, setState] = useState(DEFAULT_VALUE.state);
  return (
    <StepContext.Provider
      value={{
        state,
        setState,
      }}
    >
      {children}
    </StepContext.Provider>
  );
};

export { StepContextProvider };
export default StepContext;
