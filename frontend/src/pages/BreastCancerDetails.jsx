import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function BreastCancerDetails() {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-pink-50 px-6 pt-4 py-10">
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
      <div className="max-w-5xl mx-auto bg-white rounded-[2rem] shadow-xl p-8">

        <h1 className="text-5xl font-black text-pink-600">
          Breast Cancer Awareness
        </h1>

        <p className="mt-4 text-slate-600">
          Breast cancer is one of the most common cancers affecting women worldwide.
          Early screening and diagnosis significantly improve treatment outcomes.
        </p>

        <div className="mt-8">
          <h2 className="text-2xl font-bold">Symptoms</h2>
          <ul className="list-disc ml-6 mt-3 space-y-2">
            <li>Breast lump or thickening</li>
            <li>Changes in breast shape</li>
            <li>Nipple discharge</li>
            <li>Skin dimpling or redness</li>
          </ul>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold">Risk Factors</h2>
          <ul className="list-disc ml-6 mt-3 space-y-2">
            <li>Family history</li>
            <li>Obesity</li>
            <li>Smoking</li>
            <li>Hormonal factors</li>
          </ul>
        </div>

        <div className="mt-10 p-6 bg-pink-50 border border-pink-200 rounded-2xl">
          <h2 className="text-2xl font-black text-pink-600">
            AI Breast Cancer Risk Predictor
          </h2>

          <p className="mt-3 text-slate-700">
            Upload medical feature values or a CSV report and get an AI-powered screening prediction.
          </p>

          <Link to="/breast-cancer-predict">
            <button className="mt-5 bg-pink-600 text-white px-6 py-3 rounded-xl font-bold hover:scale-105 transition">
              Predict Risk with AI
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}