interface Step {
  navigate: (path: string | number) => void;
  handleBack: () => void;
  handleExit: () => void;
}
