import './App.css'
import Logo from './assets/Nick Hinton Podiatrist.png'

function App() {
  return (

    <section className="w-screen h-52  sm:flex sm:items-center sm:justify-between bg-white pt-4">
      <img className="w-32 h-32 sm:m-5 mx-auto mt-5" src={Logo} alt="Nick Hinton Podiatry Logo"/>
      <div className="flex-col flex sm:flex-row sm:right-12 right-0">
        <div className="flex mx-8 mb-8 sm:m-8 items-center w-1/2 sm:w-44">
          <svg className="w-10 h-10 text-gray-800 mr-3 hidden sm:block" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path fill-rule="evenodd" d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z" clip-rule="evenodd"/>
          </svg>
          <div className ="leading-7 text-gray-800 text-sm sm:text-base"><span className="text-xl sm:text-2xl font-bold text-blue-500 my-8">Magill</span> <br/> 535 Magill Rd <br/> <span className='hidden sm:block'>Magill SA 5072<br/></span>  <strong>Ph:</strong> <a href="tel:+6482656272">82656272</a></div>
        </div>


        <div className="flex mx-8 sm:m-8 items-center w-1/2 sm:w-56"> 
          <svg className="w-10 h-10 text-gray-800 mr-3 hidden sm:block" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path fill-rule="evenodd" d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z" clip-rule="evenodd"/>
          </svg>
          <div className ="leading-7 text-gray-800 text-sm sm:text-base"><span className="text-xl sm:text-2xl font-bold text-blue-500 my-8">Mount Barker</span> <br/> 59 Wellington Rd <br/> <span className='hidden sm:block'>Mount Barker SA 5251<br/></span>  <strong>Ph:</strong> <a href="tel:+6483910699">83910699</a></div>
        </div>
      </div>
    </section>




    
    /*
    header (add links to locations later)
    call to action with link
    about us/why choose us
    services
    locations + hours
    bookings
    footer (contact form, details, copyright)
    */
  );
}

export default App;
