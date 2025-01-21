import { NavigateFunction } from "react-router-dom";

interface Step {
  navigate: NavigateFunction;
  handleBack: () => void;
  handleExit: () => void;
}
