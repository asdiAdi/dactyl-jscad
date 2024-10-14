import "./App.css";
import { Renderer } from "jscad-react";
import { SinglePlateV1 } from "./src/components/SinglePlate.ts";

function App() {
  // single plate

  return <Renderer solids={[SinglePlateV1]} height={500} width={500} />;
}

export default App;
