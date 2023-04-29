import { Route, Routes } from "react-router";
import Landing from "./landingPage/Landing";
import About from "./About/About";
import Howitworks from "./How-it-works/Howitworks";
import Whatwelook from "./what-we-look-for/Whatwelook";


function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Landing/>} />
      <Route exact path="/about" element={<About/>} />
      <Route exact path="/how-it-works" element={<Howitworks/>} />
      <Route exact path="/what-we-look-for" element={<Whatwelook/>} />
    </Routes>
  );
}

export default App;
