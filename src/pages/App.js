import { Route, Routes } from "react-router";
import Landing from "./landingPage/Landing";


function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Landing/>} />
    </Routes>
  );
}

export default App;
