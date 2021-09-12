import { GlobalState } from "./provider/globalState";
import { Routes } from "./routes";
import './index.css'
import { Template } from "./template";
import { Socket } from "./provider/socket";

function App() {
  return (
    <GlobalState>
      <Socket>
        <Template>
          <Routes />
        </Template>
      </Socket>
    </GlobalState>
  );
}

export default App;
