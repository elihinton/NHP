import Button from './Button.tsx'

const AboutUs : React.FC = () => {

    const toggleButtonText = () => {
        const btn = document.getElementById('about-us-info-btn');
        if (btn === null) return;
        if (btn.innerText === "Read More"){
            btn.innerText = "Read Less";
        } else {
            btn.innerText = "Read More";
        }
    }

    const toggleShowInfo = () => {
        // toggles information shown
        const element = document.getElementById('extra-info');
        if (element){
            element.classList.toggle('hidden');
        }
        // toggles button label
        toggleButtonText();
    }
    
    return (
        <div className="flex flex-col justify-center items-center p-32 bg-white">
            <h1 id="about-us" className="font-bold text-4xl sm:text-5xl text-center text-blue-500 m-8">About Us</h1>
            <p className="text-center text-gray-700 text-sm sm:text-lg  w-72 sm:w-4/5  m-3 pb-8">
                At Nick Hinton Podiatry, we understand the importance of healthy, well-cared-for feet. Led by Nick Hinton, a passionate and dedicated podiatrist, our clinic offers expert care tailored to each patient’s unique needs. With two convenient locations, we specialize in foot and lower limb function for patients of all ages – from children’s foot development to sports injuries and ongoing general care.
                <span id="extra-info" className="hidden text-gray-700">
                    <br />
                    <br />
                    Whether you're dealing with foot pain, recovering from an injury, or simply ensuring your feet are healthy, we provide comprehensive services, including footwear advice, manual therapies (manipulation or dry needling), exercise programs, and quality custom orthotics to help you get back on your feet.
                    <br />
                    <br />
                    We also specialize in children's foot care, treating pain and ensuring proper development, and we work closely with athletes to manage injuries and optimize performance.
                    <br />
                    <br />
                    At Nick Hinton Podiatry, we believe in the importance of regular foot health monitoring. We offer free quotes on all our services, so call today to speak with our friendly staff and take the first step toward better foot health. With Nick’s expertise and genuine care, we’re here to help you move better, live better, and stay active.
                </span>
            </p>
            <Button
                id = "about-us-info-btn"
                buttonLabel = "Read More"
                type = "primary"
                click = {toggleShowInfo} // toggles info & toggles label
            ></Button>
        </div>
    )
}

export default AboutUs;