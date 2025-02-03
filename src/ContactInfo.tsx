import React from 'react';

interface LocationInfo {
  suburb: string;
  address: string;
  phone: string;
}

interface ContactInfoProps {
  locations: LocationInfo[];
  email: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ locations, email }) => {

    const parsePhoneNumber = (phoneNum : string) => {
        const whiteSpace = /\s/;
        phoneNum = phoneNum.replace(whiteSpace,"");
        return "tel:" + phoneNum;
    }

  return (
    <div id="contact-info" className="w-screen lg:w-1/2 overflow-hidden">
      <h2 className="text-3xl font-bold mt-32 lg:mt-0 text-slate-50 md:text-center text-center">Contact Details for each Location</h2>
      
      <div className="flex flex-col items-center justify-center mt-4 w-screen ">
        {locations.map((location, index) => (
          <div key={index} className="location-card p-4 mb-4 w-72 lg:w-screen border-4 border-double border-slate-500 rounded-lg shadow-lg bg-slate-300">
            <h3 className="text-xl font-semibold">{location.suburb}</h3>
            <p className="text-gray-700">{location.address}</p>
            <p className="text-gray-700">
              <strong>Phone:</strong> <a href={parsePhoneNumber(location.phone)} className="hover:underline hover:underline-offset-4">{location.phone}</a>
            </p>
          </div>
        ))}
      </div>

      <div id="email-contact" className="mt-4 flex justify-center items-center">
        <h3 className="text-lg text-slate-50 hidden lg:block font-semibold"></h3>
        <p className="text-slate-50 text-center mx-4">
          For any inquiries, feel free to reach out to us at:{" "}
          <a href={`mailto:${email}`} className="text-blue-800 hover:text-slate-100 hover:underline hover:underline-offset-4">
            {email}
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
