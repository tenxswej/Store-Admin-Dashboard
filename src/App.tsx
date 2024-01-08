import { useEffect } from "react";
import Main from "./routes/route";

function App() {
  useEffect(() => {
    console.log(window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, []);

  return <Main />;
}

export default App;
