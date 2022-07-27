import { useContext } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import StepContext from "../../contexts/StepContext";
import Step3 from "./Step3";
const StepController = () => {
  const { state } = useContext(StepContext);

  const hadleStepController = [<Step1 />, <Step2 />, <Step3 />];

  return hadleStepController[state.stepIndex];
};

export default StepController;
