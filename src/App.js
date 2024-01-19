import Count from "./Count";
import { Welcome } from "./Welcome";

function App() {
  return (
    <div>
      <Welcome name={"HTML"} age={30} />
      <Count />
    </div>
  );
}

export default App;
