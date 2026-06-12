import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PeriodRisk() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    age: "",
    cycleLength: "",
    periodDuration: "",
    painLevel: "",
    heavyBleeding: "",
    irregularCycles: "",
    fatigue: "",
    moodSwings: "",
  });

  const [result, setResult] = useState(null);

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const calculateRisk = () => {
    let score = 0;

    if (Number(form.cycleLength) < 21 || Number(form.cycleLength) > 35) score += 2;
    if (Number(form.periodDuration) > 7) score += 2;
    if (Number(form.painLevel) >= 8) score += 2;
    if (form.heavyBleeding === "yes") score += 2;
    if (form.irregularCycles === "yes") score += 2;
    if (form.fatigue === "yes") score += 1;
    if (form.moodSwings === "yes") score += 1;

    if (score >= 7) {
      setResult({
        risk: "High Risk",
        color: "bg-red-50 border-red-300 text-red-700",
        message: "Please consult a gynecologist for proper evaluation.",
      });
    } else if (score >= 4) {
      setResult({
        risk: "Moderate Risk",
        color: "bg-yellow-50 border-yellow-300 text-yellow-700",
        message: "Monitor symptoms and consider medical consultation.",
      });
    } else {
      setResult({
        risk: "Low Risk",
        color: "bg-green-50 border-green-300 text-green-700",
        message: "Your symptoms appear low risk, but regular tracking is important.",
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-pink-50 px-6 pt-6 pb-10">
      <div className="absolute top-4 right-10 flex gap-3">
        <button
          onClick={() => navigate("/period-details")}
          className="bg-gray-600 text-white px-4 py-2 rounded-xl font-semibold"
        >
          Back
        </button>

        <button
          onClick={() => navigate("/")}
          className="bg-pink-600 text-white px-4 py-2 rounded-xl font-semibold"
        >
          Home
        </button>
      </div>

      <div className="max-w-5xl mx-auto bg-white rounded-[2rem] shadow-xl p-8 border border-pink-200 mt-10">
        <h1 className="text-4xl font-black text-pink-600">
          Menstrual Health Risk Assessment
        </h1>

        <p className="mt-3 text-slate-600">
          Enter cycle and symptom details to assess menstrual disorder risk.
        </p>

        <div className="grid md:grid-cols-2 gap-5 mt-8">
          <input
            type="number"
            placeholder="Age"
            className="border border-pink-200 rounded-xl px-4 py-3"
            onChange={(e) => handleChange("age", e.target.value)}
          />

          <input
            type="number"
            placeholder="Cycle Length (days)"
            className="border border-pink-200 rounded-xl px-4 py-3"
            onChange={(e) => handleChange("cycleLength", e.target.value)}
          />

          <input
            type="number"
            placeholder="Period Duration (days)"
            className="border border-pink-200 rounded-xl px-4 py-3"
            onChange={(e) => handleChange("periodDuration", e.target.value)}
          />

          <input
            type="number"
            placeholder="Pain Level (1-10)"
            className="border border-pink-200 rounded-xl px-4 py-3"
            onChange={(e) => handleChange("painLevel", e.target.value)}
          />

          {[
            ["heavyBleeding", "Heavy Bleeding?"],
            ["irregularCycles", "Irregular Cycles?"],
            ["fatigue", "Fatigue?"],
            ["moodSwings", "Mood Swings?"],
          ].map(([field, label]) => (
            <select
              key={field}
              className="border border-pink-200 rounded-xl px-4 py-3"
              onChange={(e) => handleChange(field, e.target.value)}
            >
              <option value="">{label}</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          ))}
        </div>

        <button
          onClick={calculateRisk}
          className="mt-8 bg-pink-600 text-white px-6 py-3 rounded-xl font-bold"
        >
          Check Risk
        </button>

        {result && (
          <div className={`mt-8 rounded-2xl border p-6 ${result.color}`}>
            <h2 className="text-2xl font-black">Result: {result.risk}</h2>
            <p className="mt-3">{result.message}</p>
          </div>
        )}
      </div>
    </div>
  );
}