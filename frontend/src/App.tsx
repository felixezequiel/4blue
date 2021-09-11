import { GlobalState } from "./provider/globalState";
import { Routes } from "./routes";
import './index.css'
import { Template } from "./template";

function App() {
  return (
    <GlobalState>
      <Template>
        <Routes />
      </Template>
    </GlobalState>
  );
}

export default App;
