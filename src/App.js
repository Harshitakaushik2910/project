import React, { useEffect, useRef } from "react";
import Home from "./components/home/Home";
import SecondSection from "./components/home/SecondSection";
import PartnerSection from "./components/home/PartnerSection";
import Service from "./components/home/Service";
import Deals from "./components/home/Deals";
import Popular from "./components/home/Popular";
import Footer from "./components/home/Footer";
function App() {
  const homeRef = useRef(null);
  const dealsRef = useRef(null);
  const serviceRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (!hash) {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        return;
      }
      let targetRef;
      switch (hash) {
        case "#Deals":
          targetRef = dealsRef;
          break;
        case "#Service":
          targetRef = serviceRef;
          break;
        case "#Contact":
          targetRef = contactRef;
          break;
        default:
          targetRef = homeRef;
      }
      if (targetRef.current) {
        targetRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <div className="my-4">
      <div ref={homeRef}>
        <Home />
      </div>
      <div>
        <SecondSection />
      </div>
      <div>
        <PartnerSection />
      </div>
      <div ref={serviceRef}>
        <Service />
      </div>
      <div ref={dealsRef}>
        <Deals />
      </div>
      <div>
        <Popular />
      </div>
      <div ref={contactRef}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
