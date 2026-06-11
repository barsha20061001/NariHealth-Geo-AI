import { useState } from "react";

import { Link } from "react-router-dom";

export default function AnemiaCsvUpload() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
  if (!file) {
    alert("Please select a CSV file");
    return;
  }

  const formData = new FormData();
  formData.append("file", file);

  try {
    setLoading(true);

    const response = await fetch("http://127.0.0.1:8080/predict/anemia-csv", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (!response.ok) {
      console.log(data);
      alert("Prediction failed");
      return;
    }

    setResult(data);
  } catch (err) {
    console.error(err);
    alert("Prediction failed");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="min-h-screen bg-pink-50 flex justify-center items-center p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-2xl">

        <h1 className="text-3xl font-bold text-pink-600 mb-6">
          AI Anemia CSV Screening
        </h1>

        <div className="border-2 border-dashed border-pink-300 rounded-xl p-6 text-center mb-6 bg-pink-50">
  <label
    htmlFor="csv-upload"
    className="cursor-pointer text-pink-600 font-semibold text-lg"
  >
     Click here to upload CSV
  </label>

  <p className="text-gray-500 mt-2">
    {file ? file.name : "No file selected"}
  </p>

  <input
    id="csv-upload"
    type="file"
    accept=".csv"
    onChange={(e) => setFile(e.target.files[0])}
    className="hidden"
  />
</div>

        

        {result && (
          <div className="mt-8 border rounded-xl p-6 bg-pink-50">

            <h2 className="text-2xl font-bold text-pink-600 mb-4">
              Prediction Result
            </h2>

            <p className="mb-2">
              <strong>Prediction:</strong> {result.prediction}
            </p>

            <p className="mb-2">
              <strong>Risk:</strong> {result.risk}
            </p>

            <p className="mb-2">
              <strong>Confidence:</strong> {result.confidence}%
            </p>

            <p className="text-sm text-gray-600 mt-4">
              {result.message}
            </p>
          </div>
        )}

        <div className="flex gap-4 mt-6">
  <button
    onClick={handleUpload}
    className="bg-pink-600 text-white px-6 py-3 rounded-lg"
  >
    {loading ? "Analyzing..." : "Upload & Predict"}
  </button>

  <Link to="/anemia-details">
    <button className="bg-gray-700 text-white px-6 py-3 rounded-lg">
      Back
    </button>
  </Link>

  <Link to="/">
  <button className="bg-gray-700 text-white px-6 py-3 rounded-lg">
    Home
  </button>
</Link>
</div>
        
        
        
        

      </div>
    </div>
  );
}