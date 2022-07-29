import "./App.css";
import { Background } from "./components/Background";
import { Time } from "./components/Time";

function App() {
  return (
    <div className="App">
      <Background isVideo />
      <div className="dash-container">
        <Time />
      </div>
    </div>
  );
}

export default App;
