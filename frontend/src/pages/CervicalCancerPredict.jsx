import { useState } from "react";

import { Link } from "react-router-dom";

export default function CervicalCancerPredict() {
  const [formData, setFormData] = useState({
    age: "",
    partners: "",
    pregnancies: "",
    smokes: ""
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: Number(e.target.value)
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const values = [
    formData.age,
    formData.partners,
    formData.pregnancies,
    formData.smokes,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
  ];

  try {
    const response = await fetch("http://127.0.0.1:8000/predict-cervical", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ values }),
    });

    const data = await response.json();
    setResult(data);
  } catch (err) {
    console.error(err);
    alert("Prediction failed");
  }
};

  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-xl">

        <h1 className="text-4xl font-black text-pink-600 mb-6">
          Cervical Cancer Risk Prediction
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="number"
            name="age"
            placeholder="Age"
            className="w-full p-3 border rounded-xl"
            onChange={handleChange}
          />

          <input
            type="number"
            name="partners"
            placeholder="Number of Sexual Partners"
            className="w-full p-3 border rounded-xl"
            onChange={handleChange}
          />

          <input
            type="number"
            name="pregnancies"
            placeholder="Number of Pregnancies"
            className="w-full p-3 border rounded-xl"
            onChange={handleChange}
          />

          <input
            type="number"
            name="smokes"
            placeholder="Smokes? (0 = No, 1 = Yes)"
            className="w-full p-3 border rounded-xl"
            onChange={handleChange}
          />

          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-3 rounded-xl font-bold"
          >
            Predict Risk
          </button>
        </form>

        {result && (
          <div className="mt-6 p-4 bg-pink-50 rounded-xl">
            <h3 className="font-bold text-xl">
              {result.prediction}
            </h3>

            <p>Risk: {result.risk}</p>
            <p>Confidence: {result.confidence}%</p>
          </div>
        )}

        <div className="flex gap-3 mt-6">
          <Link to="/cervical-cancer-details">
            <button className="bg-gray-600 text-white px-5 py-2 rounded-xl">
              Back
            </button>
          </Link>

          <Link to="/">
            <button className="bg-pink-600 text-white px-5 py-2 rounded-xl">
              Home
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}