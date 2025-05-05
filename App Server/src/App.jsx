import { useState } from 'react'
import Home from './Components/Home/Home'
import AboutPage from './Components/About/AboutPage'
import News from './Components/News&Events/News'
import Blogs from './Components/Blogs/Blogs'
import BlogDetails from './Components/Blogs/BlogDetails'
import DoctorsSection from './Components/DoctorsSection/DoctorsSection'
import SurgicalOncology from './Components/FacilityModules/SurgicalOncology'
import RadiationOncology from './Components/FacilityModules/RadiationOncology'
import PalliativeCare from './Components/FacilityModules/PalliativeCare'
import MedicalOncology from './Components/FacilityModules/MedicalOncology'
import HDRBrachytherapy from './Components/FacilityModules/HDRBrachytherapy'
import EarlyDetection from './Components/FacilityModules/EarlyDetection'
import CancerScreening from './Components/FacilityModules/CancerScreening'
import LaboratoryPage from './Components/VirtualTour/Laboratory'
import OperationTheatre from './Components/VirtualTour/OperationTheatre'
import Radiology from './Components/VirtualTour/Radiology'
import DayCare from './Components/VirtualTour/DayCare'
import ICU from './Components/VirtualTour/Icu'
import Treatments from './Components/VirtualTour/Treatment'
import PeripheralClinics from './Components/PeripheralClinics/PeripheralClinics'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Components/Header/Header'
import Clinics from './Components/Clinics/Clinics'
import Contact from './Components/Contact/Contact'
import WhatsAppChat from './Components/WhatsAppChat/WhatsAppChat'
import Footer from './Components/Footer/Footer'
import MDChairman from './Components/MD & Chairman/MD'

function App() {
return(
  <div>
  <Router>
    <Header></Header>
    <Routes>
    
    <Route path="/" element={<Home />} />
    <Route path="/about-us" element={<AboutPage />} />
    <Route path="//our-experts" element={<DoctorsSection/>}/>
    <Route path='/news'  element={<News></News>}/>
    <Route path="/blogs" element={<Blogs />} />
    <Route path="/blog/:id" element={<BlogDetails />} />
    <Route path="/Cancer Screening" element={<CancerScreening />} />
    <Route path="/Early Cancer Detection" element={<EarlyDetection />} />
    <Route path="/Surgical Oncology" element={<SurgicalOncology />} />
    <Route path="/Medical Oncology" element={<MedicalOncology />} />
    <Route path="/Radiation Oncology" element={<RadiationOncology />} />
    <Route path="/H D R Brachytherapy" element={<HDRBrachytherapy  />} />
    <Route path="/Pain & Palliative Care" element={<PalliativeCare  />} />
    <Route path="/facilities/laboratory"  element={<LaboratoryPage  />} />
    <Route path="/facilities/operationtheatre"  element={<OperationTheatre  />} />
    <Route path="/facilities/radiology-suite"  element={<Radiology />} />
    <Route path="/facilities/patient-rooms"  element={<DayCare />} />
    <Route path="/facilities/icu"  element={<ICU />} />
    <Route path="/facilities/treatments"  element={<Treatments />} />
    <Route path="/Clinics"  element={<Clinics/>} />
    <Route path="/Contact"  element={<Contact/>} />
    <Route path="/md-chairman"  element={<MDChairman/>} />
    
  </Routes>
  <WhatsAppChat></WhatsAppChat>
  <Footer></Footer>
  </Router>
  </div>
)
}

export default App
