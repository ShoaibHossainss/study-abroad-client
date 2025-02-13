import { Helmet } from "react-helmet";
import AdmissionProcess from "./components/AdmissionProcess";
import Countries from "./components/Countries";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import LeadForm from "./components/LeadForm";
import Navbar from "./components/Navbar";
import WhyStudy from "./components/WhyStudy";
import { useEffect } from "react";
import { reportWebVitals } from "web-vitals";  // Import the Web Vitals library

function App() {
  useEffect(() => {
    // Track page load time using the PerformanceNavigationTiming API
    const navigationTiming = performance.getEntriesByType('navigation')[0];

    const loadTime = navigationTiming.domContentLoadedEventEnd - navigationTiming.startTime;
    const firstByteTime = navigationTiming.responseStart - navigationTiming.startTime;

    // Send page load time to Google Analytics as a custom event
    window.gtag('event', 'page_load', {
      'event_category': 'Performance',
      'event_label': 'Page Load Time',
      'value': loadTime, // Load time in milliseconds
    });

    // Send time to first byte to Google Analytics as a custom event
    window.gtag('event', 'first_byte', {
      'event_category': 'Performance',
      'event_label': 'Time to First Byte',
      'value': firstByteTime, // Time to First Byte in milliseconds
    });
  }, []);

  useEffect(() => {
    // Track Web Vitals (LCP, FID, CLS) using the reportWebVitals function
    reportWebVitals((metric) => {
      window.gtag('event', metric.name, {
        event_category: 'Web Vitals',
        event_label: metric.id,
        value: metric.value,
        non_interaction: true,  // Ensures it doesn't affect bounce rate
      });
    });
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
