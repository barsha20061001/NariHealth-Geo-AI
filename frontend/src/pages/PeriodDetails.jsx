import { Link, useNavigate } from "react-router-dom";

export default function PeriodDetails() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-pink-50 px-6 pt-6 pb-10">
      <div className="absolute top-4 right-10 flex gap-3">
        <button
          onClick={() => {
            navigate("/");
            setTimeout(() => {
              document.getElementById("hotspots")?.scrollIntoView({
                behavior: "smooth",
              });
            }, 300);
          }}
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

      <div className="max-w-6xl mx-auto bg-white rounded-[2rem] shadow-xl p-10 border border-pink-200 mt-10">
        <h1 className="text-5xl font-black text-pink-600">
          Menstrual Disorders Awareness
        </h1>

        <p className="mt-5 text-slate-600">
          Menstrual disorders include irregular periods, painful periods, heavy bleeding,
          missed periods, and abnormal cycle patterns. Tracking symptoms helps identify
          early warning signs and supports timely medical consultation.
        </p>

        <div className="mt-10">
          <h2 className="text-3xl font-bold">Common Symptoms</h2>
          <ul className="list-disc ml-6 mt-4 space-y-2">
            <li>Irregular menstrual cycles</li>
            <li>Heavy bleeding</li>
            <li>Severe cramps or pelvic pain</li>
            <li>Missed or delayed periods</li>
            <li>Fatigue and weakness</li>
            <li>Mood changes or anxiety</li>
          </ul>
        </div>

        <div className="mt-10">
          <h2 className="text-3xl font-bold">Risk Factors</h2>
          <ul className="list-disc ml-6 mt-4 space-y-2">
            <li>Hormonal imbalance</li>
            <li>PCOS or thyroid issues</li>
            <li>Stress and poor sleep</li>
            <li>Poor nutrition</li>
            <li>Excessive weight changes</li>
            <li>Underlying reproductive health conditions</li>
          </ul>
        </div>

        <div className="mt-10 bg-pink-50 border border-pink-200 p-8 rounded-2xl">
          <h2 className="text-3xl font-black text-pink-600">
            AI Menstrual Health Screening
          </h2>

          <p className="mt-4 text-slate-700">
            Assess menstrual health risk using cycle length, bleeding duration,
            pain level, and symptom indicators.
          </p>

          <div className="mt-6 flex gap-4">
            <Link to="/period-risk">
              <button className="bg-pink-600 text-white px-6 py-3 rounded-xl font-bold">
                Check Period Health Risk
              </button>
            </Link>

            
            <Link to="/period-csv-upload">
  <button className="bg-pink-600 text-white px-6 py-3 rounded-xl font-bold">
    Upload CSV
  </button>
</Link>
          </div>
        </div>
      </div>
    </div>
  );
}