import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

interface LocationInfo {
    suburb: string;
    address: string;
    phone: string;
}

const Footer = () => {


    //suburb,address,phone
    const magillLocation : LocationInfo = {
        suburb: "Magill",
        address: "535 Magill Rd,\n Magill SA 5072",
        phone : "08 8265 6272"
    }

    const mtBarketLocation : LocationInfo = {
        suburb: "Mount Barker",
        address: "59 Wellington Rd,\n Mount Barker SA 5251",
        phone : "08 8391 0699"
    }


    //array of object + email
    const Locations : Array<LocationInfo> = [ magillLocation , mtBarketLocation ];

    return (
        <div className="bg-blue-500 py-28 flex flex-col lg:flex-row justify-evenly h-full w-screen">
            <ContactForm></ContactForm>
            <ContactInfo
                email= "nickhintonpodiatrist@gmail.com"
                locations = {Locations}
            ></ContactInfo>
        </div>
    )
}

export default Footer;