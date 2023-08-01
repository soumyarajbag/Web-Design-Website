import Navbar from "./components/Navbar";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PortfolioPage from "./pages/PortfolioPage";
import ServicesPage from "./pages/ServicesPage";
import Footer from './components/Footer'
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<HomePage />}></Route>
      <Route exact path="/portfolio" element={<PortfolioPage />}></Route>
      <Route exact path="/services" element={<ServicesPage />}></Route>
    </Routes>
    <Footer />
    </BrowserRouter>
  
    
    </>
  );
}

export default App;
