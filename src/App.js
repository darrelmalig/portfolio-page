import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PortfolioPage from "./Pages/PortfolioPage";
import { Suspense, useState } from 'react';
import Loader from './Components/common/Loader';
import useTimer from './Hooks/useTimer';

function App() {
  AOS.init();

  const [showContent, setShowContent] = useState(false);
  const isTimerComplete = useTimer(4500); // Use the custom hook with a 3-second delay

  // Update the state when the timer is complete
  if (isTimerComplete && !showContent) {
    setShowContent(true);
  }

  return (
    <>
      <Suspense fallback={<Loader />}>
        {!showContent && <Loader />}
        {showContent && <PortfolioPage />}
        <ToastContainer />
      </Suspense>
    </>
  );
}

export default App;