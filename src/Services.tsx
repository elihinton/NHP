import FeatureBox from "./FeatureBox";

const Services : React.FC = () => {

    const services : string[] = ["Sports Injuries", "Custom Orthotics (hard & soft)","Dry Needling","Heel Pain","Childrens Foot Problems", "Diabetic Management", "Biomechanical Assessments", "General Podiatry"]

    return (
        <div className="my-32 bg-white">
            <h1 className="text-center text-blue-500 font-bold text-3xl sm:text-5xl py-2">Our Services</h1>
            <p className="text-center text-gray-700 w-1/2 pt-4 pb-8 mx-auto">From caring for the development of children's feet to helping you maintain good foot health to keep you mobile as you get older, we offer a wide range of services to people of all ages.</p>
            <div className="flex flex-wrap justify-center mt-12 mb-64 mx-4">
                {services.map((service) => {
                    return <FeatureBox
                        label = {service}
                        customStyle="w-36 my-2 h-32 p-4 border-solid border-4 border-slate-300 text-center rounded-lg bg-blue-500 hover:border-blue-600 text-white mx-2"
                        >
                    </FeatureBox>
                })}
            </div>
            
        </div>
    )
}

export default Services;


