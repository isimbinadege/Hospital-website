import { BrowserRouter as Router ,Routes,Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Doctor from "./components/Doctor"
import Services from "./components/Services"


// import Contact from "./components/Contact"
function App() {
  
  return (
    <Router>
    <Navbar/>
       <Routes>
        <Route path="/" element={<Home/>}/>
     {/* <Route path="/About" element={<About/>}/>
    <Route path="/Doctor" element={<Doctor/>}/>
         <Route path="/Services" element={<Services/>}/>
    <Route path="/Contact" element={<Contact/>}/> */}
    </Routes>
    </Router>
  )
}

export default App
