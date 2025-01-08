import { Normalize } from "styled-normalize";
import "./reset.css";
import "./App.css";
import Router from "./pages/Router";

const App = () => {
  return (
    <>
      <Normalize />
      <Router />
    </>
  );
};
export default App;
