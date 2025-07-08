import Button from './Button'
import BgImage from './assets/main-image.webp'

const Home : React.FC = () => {
    
    const handleClick = (e : string) => {
        const element = document.getElementById(e);
        if (element){
            element.scrollIntoView({behavior : "smooth"});
        }
    }

    return (
        <section id="home" className="w-screen h-100 bg-cover flex-col justify-center content-center" style={{ backgroundImage: `url(${BgImage})` }}>
            <div className="pt-32 px-3 text-3xl font-bold sm:font-normal sm:text-5xl text-center text-white py-3">Caring for Your Feet, So You Can Stay on Your Feet.</div>
            <div className="text-md sm:text-lg font-bold text-blue-500 text-center pb-20 px-4"> providing 30+ years of podiatric expertise</div>
            <div className='flex justify-center items-center'>
                <Button
                buttonLabel='Book Now'
                idDestination='appointment-booking'
                click={handleClick}
                ></Button>
            </div>
        </section>
    );
};

export default Home;