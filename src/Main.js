import { useEffect } from 'react';
import Aos from 'aos';
import './App.css';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Hero from './components/Ui/Hero';
import Services from './components/Ui/Services';
import Protfolio from './components/Ui/Protfolio';
import Contact from './components/Ui/Contact';
import { ToastContainer } from 'react-toastify';

function Main() {
  useEffect(()=>{
    Aos.init();
  },[]);
  return (
    <>
   <Header/>
   <main>
     <Hero/>
     <Services/>
     <Protfolio/>
     <Contact/>
   </main>
   <Footer/>
   <ToastContainer />
   </>
  );
}

export default Main;
