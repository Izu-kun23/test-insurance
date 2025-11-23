import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import './App.css'
import Home from './pages/Home'
import FAQ from './pages/FAQ'
import Claims from './pages/Claims'
// import Contact from './pages/Contact'
import AboutUs from './pages/AboutUs'
import Leadership from './pages/Leadership'
import GetQuote from './pages/GetQuote'
import AviationInsurance from './pages/services/AviationInsurance'
import MarineHullCargoInsurance from './pages/services/MarineHullCargoInsurance'
import OilGasEnergyInsurance from './pages/services/OilGasEnergyInsurance'
import MotorInsurance from './pages/services/MotorInsurance'
import EngineeringInsurance from './pages/services/EngineeringInsurance'
import FireInsurance from './pages/services/FireInsurance'
import HouseholdersInsurance from './pages/services/HouseholdersInsurance'
import BurglaryInsurance from './pages/services/BurglaryInsurance'
import MoneyInsurance from './pages/services/MoneyInsurance'
import GoodsInTransitInsurance from './pages/services/GoodsInTransitInsurance'
import FidelityGuaranteeInsurance from './pages/services/FidelityGuaranteeInsurance'
import GroupPersonalAccidentInsurance from './pages/services/GroupPersonalAccidentInsurance'
import WholeLifeInsurance from './pages/services/WholeLifeInsurance'
import TermLifeInsurance from './pages/services/TermLifeInsurance'
import GroupLifeInsurance from './pages/services/GroupLifeInsurance'

function App() {
  return (
    <div>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/claims" element={<Claims />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/faqs" element={<FAQ />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/get-quote" element={<GetQuote />} />
        <Route path="/what-we-do/aviation" element={<AviationInsurance />} />
        <Route path="/what-we-do/marine-hull-cargo" element={<MarineHullCargoInsurance />} />
        <Route path="/what-we-do/oil-gas-energy" element={<OilGasEnergyInsurance />} />
        <Route path="/what-we-do/motor" element={<MotorInsurance />} />
        <Route path="/what-we-do/engineering-all-risks" element={<EngineeringInsurance />} />
        <Route path="/what-we-do/fire" element={<FireInsurance />} />
        <Route path="/what-we-do/householders" element={<HouseholdersInsurance />} />
        <Route path="/what-we-do/general-accident/fidelity-guarantee" element={<FidelityGuaranteeInsurance />} />
        <Route path="/what-we-do/general-accident/group-personal-accident" element={<GroupPersonalAccidentInsurance />} />
        <Route path="/what-we-do/life-insurance/whole-life" element={<WholeLifeInsurance />} />
        <Route path="/what-we-do/life-insurance/term-life" element={<TermLifeInsurance />} />
        <Route path="/what-we-do/life-insurance/group-life" element={<GroupLifeInsurance />} />
        <Route path="/what-we-do/general-accident/burglary" element={<BurglaryInsurance />} />
        <Route path="/what-we-do/general-accident/money" element={<MoneyInsurance />} />
        <Route path="/what-we-do/general-accident/goods-in-transit" element={<GoodsInTransitInsurance />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
