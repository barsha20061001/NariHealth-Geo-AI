import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BreastCancerPredict from "./pages/BreastCancerPredict";
import BreastCancerDetails from "./pages/BreastCancerDetails";
import PCOSPredict from "./pages/PCOSPredict";
import PCOSDetails from "./pages/PCOSDetails";
import UterusCancerDetails from "./pages/UterusCancerDetails";
import UterusCancerPredict from "./pages/UterusCancerPredict";
import UterusCancerRisk from "./pages/UterusCancerRisk";
import AnemiaPredict from "./pages/AnemiaPredict";
import AnemiaDetails from "./pages/AnemiaDetails";
import AnemiaCsvUpload from "./pages/AnemiaCsvUpload";
import CervicalCancerDetails from "./pages/CervicalCancerDetails";
import CervicalCancerPredict from "./pages/CervicalCancerPredict";
import CervicalCancerCsvUpload from "./pages/CervicalCancerCsvUpload";
import PeriodDetails from "./pages/PeriodDetails";
import PeriodRisk from "./pages/PeriodRisk";
import PeriodCsvUpload from "./pages/PeriodCsvUpload";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/breast-cancer-details" element={<BreastCancerDetails />} />
        <Route path="/breast-cancer-predict" element={<BreastCancerPredict />} />
        <Route path="/pcos-details" element={<PCOSDetails />} />
        <Route path="/pcos-predict" element={<PCOSPredict />} />
        <Route path="/uterus-cancer-details"element={<UterusCancerDetails />}/>
        <Route path="/uterus-cancer-predict" element={<UterusCancerPredict />} />
        <Route path="/uterus-cancer-risk" element={<UterusCancerRisk />} />
        <Route path="/anemia-predict" element={<AnemiaPredict />} />
        <Route path="/anemia-details" element={<AnemiaDetails />} />
        <Route path="/anemia-csv-upload" element={<AnemiaCsvUpload />}/>
        <Route path="/period-details" element={<PeriodDetails />} />
        <Route path="/period-risk" element={<PeriodRisk />} />
        
        <Route
  path="/cervical-cancer-predict"
  element={<CervicalCancerPredict />}
/>
<Route path="/period-csv-upload" element={<PeriodCsvUpload />} />
        
        <Route path="/cervical-cancer-details" element={<CervicalCancerDetails />} />
        <Route path="/cervical-cancer-csv-upload" element={<CervicalCancerCsvUpload />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;