import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

type FormDataEntryValue = string | File | null;

interface CustomFormData {
  [key: string]: FormDataEntryValue;
}

const ContactForm = () => {
    const form = useRef<HTMLFormElement | null>(null); 
    const [status, setStatus] = useState<string | null>(null);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        if (name === "name") {
            setName(value);
        } else if (name === "phone") {
            setPhone(value);
        } else if (name === "email") {
            setEmail(value);
        } else if (name === "message") {
            setMessage(value);
        }
    };

    

    const handleFormSubmission = (e: React.FormEvent) => {
        e.preventDefault();

        if (!form.current) {
            setStatus("Form not found");
            return;
        }

        const formData = new FormData(form.current);
        const name = formData.get("user_name");
        const email = formData.get("user_email");
        const message = formData.get("message");
        const phone = formData.get("phone");

        const combinedValues = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`

        const emailContent: Record<string, unknown> = {};

        emailContent["message"] = combinedValues;

        if (!name || !email || !message || !phone) {
            setStatus("Please fill in all fields.");
            return;
        }

        setStatus("Sending...");

        // Validate if environment variables are available
        if (!import.meta.env.VITE_SERVICE_ID_TEST || !import.meta.env.VITE_TEMPLATE_ID || !import.meta.env.VITE_PUBLIC_KEY) {
            setStatus("Missing environment variables for email service.");
            return;
        }

        console.log(emailContent);

        // Send email with emailjs
        emailjs
            .send(import.meta.env.VITE_SERVICE_ID_TEST, import.meta.env.VITE_TEMPLATE_ID, emailContent, {
                publicKey: import.meta.env.VITE_PUBLIC_KEY,
            })
            .then(
                () => {
                    setStatus("SUCCESS! Your message has been sent.");
                },
                (error) => {
                    setStatus(`FAILED... ${error.text}`);
                }
            );
    };

    return (
        <form ref={form} onSubmit={handleFormSubmission} id="contact-form" className="h-96 sm:w-96 w-72 flex-col justify-items-center items-center lg:m-0 mx-auto ">
            <h1 className="text-center text-3xl font-bold text-slate-100 p-3">Contact Us</h1>
            <input
                type="text"
                name="user_name"
                placeholder="Name"
                onChange={handleInputChange}
                className="bg-slate-50 text-gray-700 p-3 box-border rounded-lg block outline-none focus:border-2 focus:border-blue-700 hover:bg-white mt-2 w-full"
                required
            />
            <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                onChange={handleInputChange}
                className="bg-slate-50 text-gray-700 p-3 rounded-lg block outline-none focus:border-2 focus:border-blue-700 hover:bg-white mt-2 w-full"
                required
            />
            <input
                type="email"
                name="user_email"
                placeholder="Email"
                onChange={handleInputChange}
                className="bg-slate-50 text-gray-700 p-3 rounded-lg block outline-none focus:border-2 focus:border-blue-700 hover:bg-white mt-2 w-full"
                required
            />
            <textarea
                name="message"
                placeholder="Enter your message for us here"
                onChange={handleInputChange}
                className="bg-slate-50 text-gray-700 p-3 rounded-lg block outline-none focus:border-2 focus:border-blue-700 hover:bg-white mt-2 w-full h-32"
                required
            />
            <div className="flex justify-center items-center mt-2 mb-8">
                <button type="submit" className="mt-2  bg-slate-300 hover:bg-slate-400 hover:border-gray-700 border-2 active:scale-95">
                    Enquire Now
                </button>
            </div>
            {status && <p>{status}</p>}
        </form>
    );
};

export default ContactForm;
