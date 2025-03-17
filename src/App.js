import './App.css'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {

  /*Toastify Notifs*/
  const notifySentMessage = () => {
    toast.success("Your message has been sent!", {
      position: toast.POSITION.TOP_CENTER
    });
  };
  
  const [pageReady, setPageReady] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pageIsReady = (status) => {
    setPageReady(status);
  }

  return (
    <>
      <main>
        <Navbar
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
        <Home 
          mobileMenuOpen={mobileMenuOpen}
          pageReady={pageReady}
          pageIsReady={pageIsReady}
          notifySentMessage={notifySentMessage}
        />
      </main>
      <ToastContainer />
    </>
  );
}

export default App;