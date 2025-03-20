import './App.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import PortfolioPage from "./Pages/PortfolioPage"

function App() {
    
  AOS.init();

  return (
    <>
      <PortfolioPage />
      <ToastContainer />
    </>
  );
}

export default App;