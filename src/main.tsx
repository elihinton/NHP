import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ButtonRow from './ButtonRow.tsx'
import Home from './Home.tsx'
import AboutUs from './AboutUs.tsx'
import Map from './Map.tsx'
import Services from './Services.tsx'
import Bookings from './Bookings.tsx'
import Footer from './Footer.tsx'
import Copyright from './Copyright.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <ButtonRow></ButtonRow>
    <Home></Home>
    <AboutUs></AboutUs>
    <div className='w-screen'>
      <h1 id="location-hours" className=" bg-white text-center font-bold text-3xl sm:text-4xl sm:text-5xl text-blue-500 mt-32 mx-8 pb-4">Opening Hours & Locations</h1>
      <p className=" bg-white text-center text-gray-700 w-1/2 mx-auto mb-20">We are located at Magill and Mount Barker. Please note these hours are subject to changes.</p>
    </div>
    <Map></Map>
    <Services></Services>
    <Bookings
      clinikoId={import.meta.env.VITE_CLINIKO_ID}
    ></Bookings>
    <div className="w-screen h-4 bg-slate-200 mt-32"></div>
    <Footer>
    </Footer>
    <Copyright></Copyright>
  </StrictMode>,
)
