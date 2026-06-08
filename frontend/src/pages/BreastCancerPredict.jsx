import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BreastCancerPredict() {
  const [values, setValues] = useState(Array(30).fill(""));
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const features = [
    "mean radius", "mean texture", "mean perimeter", "mean area", "mean smoothness",
    "mean compactness", "mean concavity", "mean concave points", "mean symmetry", "mean fractal dimension",
    "radius error", "texture error", "perimeter error", "area error", "smoothness error",
    "compactness error", "concavity error", "concave points error", "symmetry error", "fractal dimension error",
    "worst radius", "worst texture", "worst perimeter", "worst area", "worst smoothness",
    "worst compactness", "worst concavity", "worst concave points", "worst symmetry", "worst fractal dimension"
  ];

  const navigate = useNavigate();

  const [csvFile, setCsvFile] = useState(null);
const [csvResult, setCsvResult] = useState(null);

  const handleChange = (index, value) => {
    const updated = [...values];
    updated[index] = value;
    setValues(updated);
  };

  const fillSample = () => {
    setValues([
      17.99, 10.38, 122.8, 1001, 0.1184,
      0.2776, 0.3001, 0.1471, 0.2419, 0.07871,
      1.095, 0.9053, 8.589, 153.4, 0.006399,
      0.04904, 0.05373, 0.01587, 0.03003, 0.006193,
      25.38, 17.33, 184.6, 2019, 0.1622,
      0.6656, 0.7119, 0.2654, 0.4601, 0.1189
    ]);
  };

  const predict = async () => {
    setLoading(true);
    setResult(null);

    try {
      const numericValues = values.map(Number);

      const response = await fetch("http://127.0.0.1:8080/predict/breast-cancer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          values: numericValues
        })
      });

      const data = await response.json();
      setResult(data);
    } catch (error) {
      setResult({
        risk: "Error",
        message: "Backend not connected. Make sure FastAPI is running on port 8080."
      });
    }

    setLoading(false);
  };

  const uploadCSV = async () => {
  if (!csvFile) {
    alert("Please select a CSV file");
    return;
  }

  const formData = new FormData();
  formData.append("file", csvFile);

  try {
    const response = await fetch("http://127.0.0.1:8080/predict/breast-cancer-csv", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setCsvResult(data);
  } catch (error) {
    console.error(error);
  }
};

  const predictCSV = async () => {
  if (!csvFile) {
    alert("Please select a CSV file");
    return;
  }

  const formData = new FormData();
  formData.append("file", csvFile);

  try {
    const response = await fetch(
      "http://127.0.0.1:8080/predict/breast-cancer-csv",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();
    setCsvResult(data);
  } catch (error) {
    console.error(error);
  }
};

  return (
    <div className=" min-h-screen bg-pink-50 px-6 pt-4 pb-10 ">

        <div className="flex justify-end gap-3 mb-0">
  <button
    onClick={() => navigate(-1)}
    className="bg-gray-600 text-white px-4 py-2 rounded-xl font-semibold hover:bg-gray-700"
  >
     Back
  </button>

  <button
    onClick={() => navigate("/")}
    className="bg-pink-600 text-white px-4 py-2 rounded-xl font-semibold hover:bg-pink-700"
  >
     Home
  </button>
</div>

        
      <div className="max-w-6xl mx-auto bg-white rounded-[2rem] shadow-2xl p-8 border border-pink-200">
        <h1 className="text-4xl font-black text-slate-950">
          Breast Cancer Risk Prediction
        </h1>

        <p className="mt-3 text-slate-600">
          Enter medical feature values to get AI-based screening result.
          This is not a medical diagnosis.
        </p>

        <div className="mt-6 mb-6 p-4 border rounded-xl bg-pink-50">
  <h3 className="text-lg font-bold mb-3">
    Upload CSV Report
  </h3>
   
     <div className="flex items-center gap-4 flex-wrap">
    
    <label className="cursor-pointer bg-purple-600 text-white px-5 py-3 rounded-xl font-semibold hover:bg-purple-700">
      Choose CSV File
      <input
        type="file"
        accept=".csv"
        onChange={(e) => setCsvFile(e.target.files[0])}
        className="hidden"
      />
    </label>

    <span className="text-gray-700 font-medium">
      {csvFile ? csvFile.name : "No CSV file selected"}
    </span>

    <button
      onClick={predictCSV}
      className="bg-pink-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-pink-700"
    >
      Predict CSV
    </button>

  </div>
</div>

        <div className="mt-6 flex gap-4">
          <button
            onClick={fillSample}
            className="bg-purple-600 text-white px-5 py-3 rounded-xl font-bold"
          >
            Fill Sample Values
          </button>

          <button
            onClick={predict}
            className="bg-pink-600 text-white px-5 py-3 rounded-xl font-bold"
          >
            {loading ? "Predicting..." : "Predict Risk"}
          </button>
        </div>



  {csvResult && (
    <div className="mt-5 bg-white p-4 rounded-xl border">
      <p><b>Prediction:</b> {csvResult.prediction}</p>
      <p><b>Risk:</b> {csvResult.risk}</p>
      <p><b>Confidence:</b> {csvResult.confidence}%</p>
    </div>
  )}


        <div className="grid md:grid-cols-3 gap-4 mt-8">
          {features.map((feature, index) => (
            <div key={feature}>
              <label className="text-sm font-semibold text-slate-700">
                {feature}
              </label>

              <input
                type="number"
                step="any"
                value={values[index]}
                onChange={(e) => handleChange(index, e.target.value)}
                className="mt-2 w-full border border-pink-200 rounded-xl px-4 py-3 outline-none focus:border-pink-500"
                placeholder="Enter value"
              />
            </div>
          ))}
        </div>

        {result && (
          <div
            className={`mt-8 rounded-2xl p-6 border ${
              result.risk === "High Risk"
                ? "bg-red-50 border-red-300"
                : result.risk === "Low Risk"
                ? "bg-green-50 border-green-300"
                : "bg-yellow-50 border-yellow-300"
            }`}
          >
            <h2 className="text-2xl font-black">
              Result: {result.risk}
            </h2>

            {result.prediction && (
              <p className="mt-2">
                Prediction: <b>{result.prediction}</b>
              </p>
            )}

            {result.confidence && (
              <p>
                Confidence: <b>{result.confidence}%</b>
              </p>
            )}

            <p className="mt-3 text-slate-700">
              {result.message}
            </p>
          </div> 
          )}

          {csvResult && (
  <div className="mt-8 p-6 border rounded-xl bg-purple-50">
    <h2 className="text-xl font-bold">
      CSV Prediction Result
    </h2>

    <p>
      Prediction: <b>{csvResult.prediction}</b>
    </p>

    <p>
      Risk: <b>{csvResult.risk}</b>
    </p>

    <p>
      Confidence: <b>{csvResult.confidence}%</b>
    </p>
  </div>
)}
        
      </div>
    </div>
  );
}