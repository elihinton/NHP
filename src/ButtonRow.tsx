import { useState } from 'react';
import { Menu } from 'lucide-react';  
import Button from './Button.tsx';

const ButtonRow = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const goToElement = (e: string) => {
    const element = document.getElementById(e);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-screen mt-32 sm:m-0">

      <div className="sm:hidden flex justify-end mb-4 mr-4">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu className="w-8 h-8 text-gray-800" />
        </button>
      </div>

      <div className={`sm:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col items-center bg-white shadow-lg  rounded-lg">
          <Button
            buttonLabel="Home"
            type="secondary"
            idDestination="home"
            click={goToElement}
            styles="w-full mb-2"
          />
          <Button
            buttonLabel="About Us"
            type="secondary"
            idDestination="about-us"
            click={goToElement}
            styles="w-full mb-2"
          />
          <Button
            buttonLabel="Services"
            type="secondary"
            idDestination="services"
            click={goToElement}
            styles="w-full mb-2"
          />
          <Button
            buttonLabel="Location"
            type="secondary"
            idDestination="location-hours"
            click={goToElement}
            styles="w-full mb-2"
          />
          <Button
            buttonLabel="Hours"
            type="secondary"
            idDestination="location-hours"
            click={goToElement}
            styles="w-full mb-2"
          />
          <Button
            buttonLabel="Book Online"
            type="secondary"
            idDestination="appointment-booking"
            click={goToElement}
            styles="w-full mb-2"
          />
          <Button
            buttonLabel="Contact Us"
            type="secondary"
            idDestination="contact-form"
            click={goToElement}
            styles="w-full"
          />
        </div>
      </div>

      {/* Buttons for larger screens (md and up) */}
      <div className="hidden sm:flex justify-around">
        <Button
          buttonLabel="Home"
          type="secondary"
          idDestination="home"
          click={goToElement}
          styles="w-full"
        />
        <Button
          buttonLabel="About Us"
          type="secondary"
          idDestination="about-us"
          click={goToElement}
          styles="w-full"
        />
        <Button
          buttonLabel="Services"
          type="secondary"
          idDestination="services"
          click={goToElement}
          styles="w-full"
        />
        <Button
          buttonLabel="Location"
          type="secondary"
          idDestination="location-hours"
          click={goToElement}
          styles="w-full"
        />
        <Button
          buttonLabel="Hours"
          type="secondary"
          idDestination="location-hours"
          click={goToElement}
          styles="w-full "
        />
        <Button
          buttonLabel="Book Online"
          type="secondary"
          idDestination="appointment-booking"
          click={goToElement}
          styles="w-full "
        />
        <Button
          buttonLabel="Contact Us"
          type="secondary"
          idDestination="contact-form"
          click={goToElement}
          styles="w-full "
        />
      </div>
    </div>
  );
};

export default ButtonRow;
