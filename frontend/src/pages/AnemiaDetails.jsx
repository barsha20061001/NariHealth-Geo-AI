import { Link, useNavigate } from "react-router-dom";


export default function AnemiaDetails() {
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
  className="bg-gray-600 text-white px-4 py-2 rounded-xl"
>
  Back
</button>

        <button
          onClick={() => navigate("/")}
          className="bg-pink-600 text-white px-4 py-2 rounded-xl"
        >
          Home
        </button>
      </div>

      <div className="max-w-6xl mx-auto bg-white rounded-[2rem] shadow-xl p-10 border border-pink-200 mt-10">

        <h1 className="text-5xl font-black text-pink-600">
          Anemia Awareness
        </h1>

        <p className="mt-5 text-slate-600">
          Anemia occurs when the body does not have enough healthy red blood cells
          to carry oxygen efficiently.
        </p>

        <div className="mt-10">
          <h2 className="text-3xl font-bold">
            Common Symptoms
          </h2>

          <ul className="list-disc ml-6 mt-4 space-y-2">
            <li>Fatigue</li>
            <li>Dizziness</li>
            <li>Weakness</li>
            <li>Pale skin</li>
            <li>Shortness of breath</li>
            <li>Rapid heartbeat</li>
          </ul>
        </div>

        <div className="mt-10">
          <h2 className="text-3xl font-bold">
            Risk Factors
          </h2>

          <ul className="list-disc ml-6 mt-4 space-y-2">
            <li>Iron deficiency</li>
            <li>Poor nutrition</li>
            <li>Heavy menstrual bleeding</li>
            <li>Pregnancy</li>
            <li>Chronic diseases</li>
          </ul>
        </div>

        <div className="mt-10 bg-pink-50 border border-pink-200 p-8 rounded-2xl">
          <h2 className="text-3xl font-black text-pink-600">
            AI Anemia Screening
          </h2>

          <p className="mt-4 text-slate-700">
            Assess anemia risk using simple health indicators.
          </p>


        <div className="mt-6 flex">
  <Link to="/anemia-predict">
    <button className="bg-pink-600 text-white px-6 py-3 rounded-xl font-bold">
      Check Anemia Risk
    </button>
  </Link>

  <Link to="/anemia-csv-upload">
    <button className="ml-4 bg-pink-600 text-white px-6 py-3 rounded-xl font-bold">
      Upload CSV
    </button>
  </Link>
</div>

        </div>

        

      </div>
    </div>
  );
}