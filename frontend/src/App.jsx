import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BreastCancerPredict from "./pages/BreastCancerPredict";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/breast-cancer-predict" element={<BreastCancerPredict />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;