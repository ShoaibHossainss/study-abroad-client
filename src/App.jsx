import { Helmet } from "react-helmet";
import { useEffect } from "react";
import AdmissionProcess from "./components/AdmissionProcess";
import Countries from "./components/Countries";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import LeadForm from "./components/LeadForm";
import Navbar from "./components/Navbar";
import WhyStudy from "./components/WhyStudy";

function App() {
  useEffect(() => {
    // Track page load time using the PerformanceNavigationTiming API
    const navigationTiming = performance.getEntriesByType("navigation")[0];

    if (navigationTiming) {
      const loadTime = navigationTiming.domContentLoadedEventEnd - navigationTiming.startTime;
      const firstByteTime = navigationTiming.responseStart - navigationTiming.startTime;

      // Send page load time to Google Analytics as a custom event
      window.gtag("event", "page_load", {
        event_category: "Performance",
        event_label: "Page Load Time",
        value: loadTime, // Load time in milliseconds
      });

      // Send time to first byte to Google Analytics as a custom event
      window.gtag("event", "first_byte", {
        event_category: "Performance",
        event_label: "Time to First Byte",
        value: firstByteTime, // Time to First Byte in milliseconds
      });
    }
  }, []);

  return (
    <div className="App">
      <Helmet>
        <title>StudyMedGlobal</title>
        <meta
          name="description"
          content="StudyMedGlobal helps students explore MBBS opportunities abroad. Learn about the best countries for MBBS, the admission process, and affordable education options."
        />
        <meta name="keywords" content="MBBS abroad, study medicine, medical education, affordable MBBS, top MBBS universities" />
      </Helmet>
      <Navbar />
      <HeroSection />
      <WhyStudy />
      <Countries />
      <AdmissionProcess />
      <LeadForm />
      <Footer />
    </div>
  );
}

export default App;
