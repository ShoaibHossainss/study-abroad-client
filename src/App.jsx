import AdmissionProcess from "./components/AdmissionProcess"
import Countries from "./components/Countries"
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import LeadForm from "./components/LeadForm"
import Navbar from "./components/Navbar"
import WhyStudy from "./components/WhyStudy"

function App() {


  return (
  <div>
    <Navbar></Navbar>
   <HeroSection></HeroSection>
   <WhyStudy></WhyStudy>
   <Countries></Countries>
   <AdmissionProcess></AdmissionProcess>
   <LeadForm></LeadForm>
   <Footer></Footer>
  </div>
  )
}

export default App
