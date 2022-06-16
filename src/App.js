import "./styles.css";
import { BarAllAfter } from "./AllBar/Main";
import { BarSeoulAfter } from "./SeoulBar/Main";
import { AllAfter } from "./AllLine/line";

export default function App() {
  return (
    <div className="App">
      <BarAllAfter />
      <BarSeoulAfter />
      <AllAfter />
    </div>
  );
}
