import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BreastCancerPredict from "./pages/BreastCancerPredict";
import BreastCancerDetails from "./pages/BreastCancerDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
  <Route path="/" element={<Home />} />

  <Route
    path="/breast-cancer-predict"
    element={<BreastCancerPredict />}
  />

  <Route
    path="/breast-cancer-details"
    element={<BreastCancerDetails />}
  />
</Routes>
    </BrowserRouter>
  );
}

export default App;