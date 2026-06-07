import {
  HeartPulse,
  MapPinned,
  Brain,
  ShieldCheck,
  Users,
  Activity,
  Stethoscope,
  Mic,
  FileText,
  Bell,
  Hospital,
  BarChart3,
  Sparkles,
  Mail, Globe, User,
  Moon,
  Sun,
  ArrowRight,
} from "lucide-react";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowUp, X } from "lucide-react";

import heroImg from "../assets/hero.jpg";

import breastImg from "../assets/breast-cancer.png";
import pcosImg from "../assets/pcos.webp";
import uterusImg from "../assets/uterus-cancer.jpeg";
import cervicalImg from "../assets/cervical-cancer.webp";
import anemiaImg from "../assets/anemia.jpg";
import menstrualImg from "../assets/menstrual.jpg";

export default function Home() {
    const [showTop, setShowTop] = useState(false);
const [showDashboard, setShowDashboard] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setShowTop(window.scrollY > 400);
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

const [darkMode, setDarkMode] = useState(false);
  const features = [
    ["AI Risk Engine", Brain, "PCOS, cancer, anemia and menstrual health risk prediction."],
    ["Geo Hotspots", MapPinned, "Ward and district-wise high-risk area detection."],
    ["Minister Dashboard", BarChart3, "Trends, alerts, resources and camp planning."],
    ["ASHA Portal", Users, "Field-level data collection and follow-up tracking."],
    ["Doctor Review", Stethoscope, "Verified medical feedback for safer decisions."],
    ["Voice Reports", Mic, "Hindi, Bengali and English symptom reporting."],
  ];

  const diseases = [
  {
    title: "Breast Cancer",
    desc: "Early risk screening",
    image: breastImg,
  },
  {
    title: "PCOS / PCOD",
    desc: "Hormonal disorder tracking",
    image: pcosImg,
  },
  {
    title: "Uterus Cancer",
    desc: "Symptom-based alert",
    image: uterusImg,
  },
  {
    title: "Cervical Cancer",
    desc: "Awareness & screening",
    image: cervicalImg,
  },
  {
    title: "Anemia",
    desc: "Nutrition risk support",
    image: anemiaImg,
  },
  {
    title: "Menstrual Disorders",
    desc: "Cycle health monitoring",
    image: menstrualImg,
  },
];



const Counter = ({ end, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const increment = end / (duration / 20);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 20);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
};

  return (
    <div
  className={
    darkMode
      ? "min-h-screen bg-slate-950 text-white overflow-hidden"
      : "min-h-screen bg-[#fff7fb] text-slate-900 overflow-hidden"
  }
>
      <div className="absolute top-0 left-0 h-96 w-96 bg-pink-300/30 blur-3xl rounded-full" />
      <div className="absolute top-20 right-0 h-96 w-96 bg-purple-300/30 blur-3xl rounded-full" />
      <div className="absolute bottom-0 left-1/3 h-96 w-96 bg-teal-200/30 blur-3xl rounded-full" />

    <nav className="sticky top-0 z-50 w-full px-0">
  <div
  className={
    darkMode
      ? "flex items-center justify-between  bg-slate-900/90 backdrop-blur-xl border border-white/10 shadow-xl px-6 py-4"
      : "flex items-center justify-between  bg-white/80 backdrop-blur-xl border border-pink-100 shadow-xl px-6 py-4"
  }
>
    
    <div className="flex items-center gap-3">
      <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white shadow-lg">
        <HeartPulse size={25} />
      </div>

      <h1 className="text-3xl font-black tracking-tight">
        NariHealth <span className="text-pink-600">GeoAI</span>
      </h1>
    </div>

    

    <div className="ml-auto mr-10 hidden md:flex items-center gap-3 bg-pink-50 border border-pink-600 px-4 py-2 rounded-full">
      {[
  ["Features", "#features"],
  ["Dashboard", "#dashboard"],
  ["Hotspots", "#hotspots"],
  ["Reports", "#reports"],
].map(([item, link]) => (
  <a
    key={item}
    href={link}
    className="px-4 py-2 rounded-full font-semibold text-slate-700 hover:bg-white hover:text-pink-600 transition">
    {item}
  </a>
))}
    </div>

<div className="flex items-center gap-8">
    <button
  onClick={() => setDarkMode(!darkMode)}
  className="h-12 w-12 rounded-full bg-white border border-pink-200 flex items-center justify-center shadow hover:scale-105 transition"
>
  {darkMode ? (
    <Sun className="text-yellow-500" size={22} />
  ) : (
    <Moon className="text-slate-900" size={22} />
  )}
</button>

    <button className="rounded-full bg-slate-950 text-white px-7 py-3 font-bold shadow-xl border-2 border-pink-500 hover:scale-105 transition">
      Get Started
    </button>
    </div>
  </div>
</nav>

    <section id="home" className="relative z-10 max-w-7xl mx-auto px-6 pt-14  pb-20 grid lg:grid-cols-2 gap-44 items-center">
  <div>
   
   <div className="mb-8 flex flex-wrap justify-center gap-4">
  
  <div className="bg-white rounded-2xl px-6 py-4 shadow-lg border border-pink-900">
    <p className="font-bold text-pink-600">
       High-risk zone detected
    </p>
    <p className="text-slate-500">
      Ward 12 needs urgent camp
    </p>
  </div>

  <div className="bg-white rounded-2xl px-6 py-4 shadow-lg border border-purple-900">
    <p className="font-bold text-purple-600">
       24/7 Health Alerts
    </p>
    <p className="text-slate-500">
      ASHA worker notified
    </p>
  </div>
  </div>
   
   

    <h2 className="mt-0 text-4xl md:text-6xl font-black leading-[0.95] text-center tracking-tight">
      Early Detection.
      <br />
      Smarter Decisions.
      <br />
      <span className="bg-gradient-to-r from-pink-600 via-fuchsia-500 to-purple-600 bg-clip-text text-transparent">
        Healthier Women.
      </span>
    </h2>
<div className="mb-8 flex flex-wrap justify-center gap-4">
  
  

  </div>
    <p
  className={`text-xl  text-center leading-relaxed ${
    darkMode ? "text-white/80" : "text-slate-600"
  }`}
>
      A women-first AI platform that detects health risks, identifies
      area-wise disease hotspots, alerts health workers and helps health
      departments plan screening camps.
    </p>

    <div className="mt-9 flex flex-wrap gap-4 justify-center items-center">
      <button className="rounded-2xl bg-slate-950 text-white px-8 py-4 font-bold shadow-2xl border-2 border-pink-500 flex items-center gap-2 hover:scale-105 transition">
        Start Screening <ArrowRight />
      </button>

      <button
       onClick={() => setShowDashboard(true)}
       className="rounded-2xl bg-white text-slate-900 px-8 py-4 font-bold shadow-xl border border-pink-700 hover:scale-105 transition">
        View Dashboard
      </button>
    </div>
  </div>

  

  

  <div className="relative">
    <div className="rounded-[3rem] bg-white p-6 shadow-2xl border border-pink-700">
      <img
        src={heroImg}
        alt="Women Health AI"
        className="rounded-[2.5rem] w-full h-[420px] object-cover"
      />

      <div className="grid grid-cols-3 gap-4 mt-5 ">
        <div className="bg-pink-50 rounded-3xl p-5  ">
          <h3 className="text-3xl font-black text-pink-600 "><Counter end={50} suffix="K+" /></h3>
          <p className="text-sm text-slate-500">Women screened</p>
        </div>

        <div className="bg-purple-50 rounded-3xl p-5">
          <h3 className="text-3xl font-black text-purple-600"><Counter end={500} suffix="+" /></h3>
          <p className="text-sm text-slate-500">Hotspots found</p>
        </div>

        <div className="bg-teal-50 rounded-3xl p-5">
          <h3 className="text-3xl font-black text-teal-600"><Counter end={100} suffix="+" /></h3>
          <p className="text-sm text-slate-500">Camps planned</p>
        </div>
      </div>
    </div>

    

</div>
    

</section>


<section id="dashboard" className="max-w-7xl mx-auto px-6 pb-24">
  <div className="relative rounded-[3rem] bg-[#071124] p-8 md:p-10 shadow-2xl overflow-hidden">
    <div className="absolute top-0 right-0 h-72 w-72 bg-pink-500/20 blur-3xl rounded-full"></div>
    <div className="absolute bottom-0 left-0 h-72 w-72 bg-purple-500/20 blur-3xl rounded-full"></div>

    <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
      <div>
        <p className="text-pink-400 font-bold">
          Live Government Dashboard
        </p>

        <h2 className="text-4xl md:text-5xl font-black text-white mt-2">
          Women Health Hotspot Intelligence
        </h2>

        <p className="text-white/60 mt-3 max-w-2xl">
          Area-wise risk tracking, camp planning, alerts and resource allocation.
        </p>
      </div>

      <button className="bg-white text-slate-900 px-6 py-3 rounded-2xl font-bold shadow-xl">
        View Full Dashboard
      </button>
    </div>

    <div className="relative grid lg:grid-cols-4 gap-5 mb-6">
      <div className="bg-red-500 rounded-3xl p-6 text-white shadow-xl">
        <p className="text-white/80">Critical Zone</p>
        <h3 className="font-black text-3xl mt-2">Ward 12</h3>
        <p className="mt-2">High PCOS Risk</p>
      </div>

      <div className="bg-yellow-400 rounded-3xl p-6 text-slate-900 shadow-xl">
        <p className="text-slate-700">Medium Zone</p>
        <h3 className="font-black text-3xl mt-2">Ward 8</h3>
        <p className="mt-2">Needs monitoring</p>
      </div>

      <div className="bg-green-400 rounded-3xl p-6 text-slate-900 shadow-xl">
        <p className="text-slate-700">Stable Zone</p>
        <h3 className="font-black text-3xl mt-2">Ward 3</h3>
        <p className="mt-2">Low Risk</p>
      </div>

      <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-6 text-white shadow-xl">
        <p className="text-white/80">AI Confidence</p>
        <h3 className="font-black text-3xl mt-2">92%</h3>
        <p className="mt-2">Prediction Accuracy</p>
      </div>
    </div>

    <div className="relative grid lg:grid-cols-3 gap-5">
      <div className="bg-white/10 border border-white/10 rounded-3xl p-6 text-white">
        <h3 className="font-black text-xl">🔔 Alert Sent</h3>
        <p className="text-white/60 mt-2">
          ASHA worker notified for urgent field follow-up.
        </p>
      </div>

      <div className="bg-white/10 border border-white/10 rounded-3xl p-6 text-white">
        <h3 className="font-black text-xl">📄 AI Report Generated</h3>
        <p className="text-white/60 mt-2">
          Monthly health hotspot report is ready for review.
        </p>
      </div>

      <div className="bg-white/10 border border-white/10 rounded-3xl p-6 text-white">
        <h3 className="font-black text-xl">🏥 Camp Recommended</h3>
        <p className="text-white/60 mt-2">
          Ward 12 needs screening camp with doctors and mobile van.
        </p>
      </div>
    </div>
  </div>
</section>


<section id="features" className="relative z-10 w-full px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-black">Powerful Platform Features</h2>
          <p className={`mt-4 ${darkMode ? "text-yellow-300" : "text-slate-600"}`}>
            Built for women, doctors, health workers and government authorities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(([title, Icon, desc]) => (
            <div
              key={title}
              className="group rounded-[2rem] bg-white p-7 shadow-xl border border-2 border-pink-600 hover:bg-slate-950 hover:text-white transition"
            >
              
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-pink-100 to-purple-100 text-pink-600 flex items-center justify-center mb-6">
                <Icon />
              </div>
              <h3 className="text-xl font-black mb-3 text-black group-hover:text-white transition-colors duration-300">{title}</h3>
              <p className="text-slate-600  group-hover:text-amber-300 transition-colors duration-300 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="hotspots" className="max-w-7xl mx-auto px-6 py-20">
  <div className="text-center mb-14">
    <h2 className="text-5xl font-black">
      Diseases We Monitor
    </h2>

    <p  className={
    darkMode
      ? "text-white/80 mt-4"
      : "text-slate-600 mt-4"
  }
>
      Early detection and AI-powered health screening for women's most critical health concerns.
    </p>
  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    {diseases.map((item) => (
      <div
        key={item.title}
        className="group overflow-hidden rounded-[2rem] shadow-2xl relative h-[360px] w-full h-full object-cover group-hover:scale-110 transition duration-500 "
      >
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

        <div className="absolute bottom-0 p-6 text-white">
          <h3 className="text-3xl font-black">
            {item.title}
          </h3>

          <p className="text-white/80 mt-2">
            {item.desc}
          </p>

          <button className="mt-3 opacity-0 group-hover:opacity-100 transition duration-300 text-pink-300 font-semibold">
    Learn More →
  </button>
        </div>
      </div>
    ))}
  </div>
</section>

      <section id="reports" className="relative z-10 mx-auto max-w-7xl px-6 pb-8">
        <div className="rounded-3xl bg-yellow-50 border border-yellow-200 p-6 text-center text-slate-700">
          <ShieldCheck className="mx-auto mb-3 text-yellow-600" />
          <b>Medical Disclaimer:</b> This system is for screening, awareness and
          public health planning only. It does not replace diagnosis by a doctor.
        </div>
      </section>

      <section className="w-full px-12 lg:px-20 py-18">
  <div className="rounded-[3rem] bg-gradient-to-r from-slate-950 via-purple-950 to-pink-700 text-white p-12 text-center shadow-2xl">
    <h2 className="text-5xl font-black">
      Ready to Transform Women’s Healthcare?
    </h2>

    <p className="mt-5 text-white/80 text-lg max-w-3xl mx-auto">
      Join doctors, ASHA workers and health authorities using AI-powered
      hotspot intelligence for early detection and faster action.
    </p>

    <div className="mt-8 flex justify-center gap-5">
      <button href="/breast-cancer-predict"
      className="bg-white text-slate-950 px-8 py-4 rounded-2xl font-bold">
        Start Screening
      </button>

      <button className="border border-white/40 px-8 py-4 rounded-2xl font-bold">
        View Dashboard
      </button>
    </div>
  </div>
</section>

<footer className="bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950 text-white  px-12 lg:px-20 py-14">
  <div className="grid md:grid-cols-4 gap-10">
    
    <div className="md:col-span-2">
      <h2 className="text-3xl font-black">
        NariHealth <span className="text-pink-500">GeoAI</span>
      </h2>

      <p className="mt-4 text-white/60 max-w-md leading-relaxed">
        AI-powered women health hotspot detection and screening platform for
        early diagnosis support, public health planning and government action.
      </p>
    </div>

    <div>
      <h3 className="font-bold text-lg mb-4">Quick Links</h3>
      <ul className="space-y-3 text-white/60">
        <li>Features</li>
        <li>Dashboard</li>
        <li>Hotspots</li>
        <li>Reports</li>
      </ul>
    </div>

    <div>
      <h3 className="font-bold text-lg mb-4">Resources</h3>
      <ul className="space-y-3 text-white/60">
        <li>Privacy Policy</li>
        <li>Terms & Conditions</li>
        <li>Medical Disclaimer</li>
        <li>Contact</li>
      </ul>
    </div>
  </div>

  <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between">
  
  <p className="text-white/50">
    © 2026 NariHealth GeoAI. All rights reserved.
  </p>
   <div className="flex items-center justify-end gap-4">
  

  
    
    <a
      href="https://github.com/barsha20061001"
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-pink-500 hover:border-pink-500 transition"
    >
      <User size={18} />
    </a>

    <a
      href="https://linkedin.com"
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-purple-500 hover:border-purple-500 transition"
    >
      <Globe size={18} />
    </a>

    <a
      href="mailto:barshadgp212@gmail.com"
      className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-blue-500 hover:border-blue-500 transition"
    >
      <Mail size={18} />
    </a>

  </div>
</div>
  
  
</footer>

{showDashboard && (
  <div className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center px-6">
    <div className="relative bg-white rounded-[2rem] max-w-5xl w-full p-8 shadow-2xl">
      <button
        onClick={() => setShowDashboard(false)}
        className="absolute top-5 right-5 h-10 w-10 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center hover:bg-pink-600 hover:text-white transition"
      >
        <X size={22} />
      </button>

      <h2 className="text-4xl font-black text-slate-900">
        Government Dashboard Preview
      </h2>

      <p className="mt-3 text-slate-600">
        Area-wise women health hotspot tracking, alerts, AI reports and camp recommendations.
      </p>

      <div className="mt-8 rounded-[2rem] bg-[#071124] p-8 text-white">
        <p className="text-pink-400 font-bold">
          Live Government Dashboard
        </p>

        <h3 className="text-3xl font-black mt-2">
          Women Health Hotspot Intelligence
        </h3>

        <div className="grid md:grid-cols-4 gap-5 mt-8">
          <div className="bg-red-500 rounded-3xl p-6">
            <p>Critical Zone</p>
            <h4 className="text-3xl font-black mt-2">Ward 12</h4>
            <p>High PCOS Risk</p>
          </div>

          <div className="bg-yellow-400 text-slate-900 rounded-3xl p-6">
            <p>Medium Zone</p>
            <h4 className="text-3xl font-black mt-2">Ward 8</h4>
            <p>Needs monitoring</p>
          </div>

          <div className="bg-green-400 text-slate-900 rounded-3xl p-6">
            <p>Stable Zone</p>
            <h4 className="text-3xl font-black mt-2">Ward 3</h4>
            <p>Low Risk</p>
          </div>

          <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-6">
            <p>AI Confidence</p>
            <h4 className="text-3xl font-black mt-2">92%</h4>
            <p>Prediction Accuracy</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mt-6">
          <div className="bg-white/10 border border-white/10 rounded-3xl p-6">
            <h4 className="font-black text-xl">Alert Sent</h4>
            <p className="text-white/60 mt-2">
              ASHA worker notified for urgent follow-up.
            </p>
          </div>

          <div className="bg-white/10 border border-white/10 rounded-3xl p-6">
            <h4 className="font-black text-xl">AI Report Generated</h4>
            <p className="text-white/60 mt-2">
              Monthly hotspot report is ready.
            </p>
          </div>

          <div className="bg-white/10 border border-white/10 rounded-3xl p-6">
            <h4 className="font-black text-xl">Camp Recommended</h4>
            <p className="text-white/60 mt-2">
              Ward 12 needs screening camp.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)}

{showTop && (
  <button
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    className="fixed bottom-8 right-8 z-50 h-14 w-14 rounded-full bg-pink-600 text-white flex items-center justify-center shadow-2xl hover:scale-110 transition"
  >
    <ArrowUp size={26} />
  </button>
)}

    </div>
  );
}