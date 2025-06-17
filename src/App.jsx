import React, { useState, useEffect } from "react";
import Top from "./components/Top.jsx";
import Vision from "./components/Vision.jsx";
import Skills from "./components/Skills.jsx";
import Interests from "./components/Interests.jsx";
import Contact from "./components/Contact.jsx";
import Loading from "./components/Loading.jsx";

import "./assets/styles/stylesheet.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="App">
      <Top />
      <Vision />
      <Skills />
      <Interests />
      <Contact />
    </div>
  );
}

export default App;
