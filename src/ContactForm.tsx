import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';



const ContactForm = () => {
    const form = useRef<HTMLFormElement | null>(null); 
    const [status, setStatus] = useState<string | null>(null);

    const validatePhoneNumber = (phone : FormDataEntryValue | null) => {
        if (typeof phone != 'string') return false;
        console.log("phone", phone);
        const auPhoneRegex : RegExp = /^(?:\+61|0)[2-478](?: ?\d){8}$/;
        return auPhoneRegex.test(phone);
    }

    const validateEmail = (email : FormDataEntryValue | null) => {
        if (typeof email != 'string') return false;
        console.log("email",email);
        const emailRegex : RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }

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

        // Check for missing/empty fields
        if (
            typeof name !== 'string' || name.trim() === '' ||
            typeof email !== 'string' || email.trim() === '' ||
            typeof phone !== 'string' || phone.trim() === '' ||
            typeof message !== 'string' || message.trim() === ''
        ) {
            setStatus("Please fill in all fields.");
            return;
        }

        const phoneStr = phone as string;
        const emailStr = email as string;
        // Validate phone and email
        if (!validatePhoneNumber(phoneStr) || !validateEmail(emailStr)) {
            setStatus("Invalid Email or Phone Number");
            return;
        }

        const combinedValues = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;
        const emailContent = { message: combinedValues };

        // Validate environment vars
        if (!import.meta.env.VITE_SERVICE_ID_TEST || !import.meta.env.VITE_TEMPLATE_ID || !import.meta.env.VITE_PUBLIC_KEY) {
            setStatus("Missing environment variables for email service.");
            return;
        }

        setStatus("Sending...");

        emailjs
            .send(import.meta.env.VITE_SERVICE_ID_TEST, import.meta.env.VITE_TEMPLATE_ID, emailContent, {
            publicKey: import.meta.env.VITE_PUBLIC_KEY,
            })
            .then(
            () => setStatus("SUCCESS! Your message has been sent."),
            (error) => setStatus(`FAILED... ${error.text}`)
            );
        };


    return (
        <form ref={form} onSubmit={handleFormSubmission} id="contact-form" className="h-96 sm:w-96 w-72 flex-col justify-items-center items-center lg:m-0 mx-auto mb-2 sm:mb-0">
            <h1 className="text-center text-3xl font-bold text-slate-100 p-3">Contact Us</h1>
            <input
                type="text"
                name="user_name"
                autoComplete="name"
                placeholder="Name"
                className="bg-slate-50 text-gray-700 p-3 box-border rounded-lg block outline-none focus:border-2 focus:border-blue-700 hover:bg-white mt-2 w-full"
                required
            />
            <input
                type="text"
                name="phone"
                autoComplete="tel"
                placeholder="Phone Number"
                className="bg-slate-50 text-gray-700 p-3 rounded-lg block outline-none focus:border-2 focus:border-blue-700 hover:bg-white mt-2 w-full"
                required
            />
            <input
                type="email"
                name="user_email"
                autoComplete="email"
                placeholder="Email"
                className="bg-slate-50 text-gray-700 p-3 rounded-lg block outline-none focus:border-2 focus:border-blue-700 hover:bg-white mt-2 w-full"
                required
            />
            <textarea
                name="message"
                id="message"
                placeholder="Enter your message for us here"
                className="bg-slate-50 text-gray-700 p-3 rounded-lg block outline-none focus:border-2 focus:border-blue-700 hover:bg-white mt-2 w-full h-32"
                required
            />
            {status && <p className="mt-4 text-slate-100 text-center font-bold">{status}</p>}
            <div className="flex justify-center items-center mt-2 mb-8">
                <button type="submit" className="mt-2 bg-slate-300 hover:bg-slate-400 hover:border-gray-700 border-2 active:scale-95">
                    Enquire Now
                </button>
            </div>
            
        </form>
    );
};

export default ContactForm;
