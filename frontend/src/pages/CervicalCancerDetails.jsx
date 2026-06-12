import { Link, useNavigate } from "react-router-dom";

export default function CervicalCancerDetails() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-pink-50 px-6 pt-6 pb-10">
      <div className="absolute top-4 right-10 flex gap-3">
        <button
  onClick={() => {
    navigate("/");

    setTimeout(() => {
      const section = document.getElementById("hotspots");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
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
          Cervical Cancer Awareness
        </h1>

        <p className="mt-5 text-slate-600">
          Cervical cancer is a cancer that starts in the cervix. Early screening,
          HPV vaccination, and regular checkups can help reduce risk.
        </p>

        <div className="mt-10">
          <h2 className="text-3xl font-bold">Common Symptoms</h2>
          <ul className="list-disc ml-6 mt-4 space-y-2">
            <li>Abnormal vaginal bleeding</li>
            <li>Bleeding after intercourse</li>
            <li>Pelvic pain</li>
            <li>Unusual vaginal discharge</li>
            <li>Pain during intercourse</li>
            <li>Longer or heavier periods</li>
          </ul>
        </div>

        <div className="mt-10">
          <h2 className="text-3xl font-bold">Risk Factors</h2>
          <ul className="list-disc ml-6 mt-4 space-y-2">
            <li>HPV infection</li>
            <li>Smoking</li>
            <li>Multiple sexual partners</li>
            <li>Weak immune system</li>
            <li>Long-term contraceptive use</li>
            <li>Lack of regular cervical screening</li>
          </ul>
        </div>

        <div className="mt-10 bg-pink-50 border border-pink-200 p-8 rounded-2xl">
          <h2 className="text-3xl font-black text-pink-600">
            AI Cervical Cancer Screening
          </h2>

          <p className="mt-4 text-slate-700">
            Assess cervical cancer risk using clinical and lifestyle indicators.
          </p>

          <div className="mt-6 flex gap-4">
  <Link to="/cervical-cancer-predict">
    <button className="bg-pink-600 text-white px-6 py-3 rounded-xl font-bold">
      Check Cervical Cancer Risk
    </button>
  </Link>

  <Link to="/cervical-cancer-csv-upload">
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