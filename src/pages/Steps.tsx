import { useContext } from "react";
import StepController from "../components/Steps/";
import { StepContextProvider } from "../contexts/StepContext";
function App() {
  return (
    <StepContextProvider>
      <StepController />
    </StepContextProvider>
  );
}

export default App;
