import React, { useRef } from 'react'
import Button from '../components/Button'
import { toast, ToastContainer } from 'react-toastify';

function Contact() {
    const formRef = useRef();

    const validateData = (data) => {
        if(!data.name || !data.contact || !data.message) {
            toast.error("All fields are required!");
            return false;
        }
        return true;
    }
    
    const handleSubmit = () => {
        const formData = new FormData(formRef.current);
        const data = Object.fromEntries(formData);
        if(!validateData(data)) return;

        fetch(import.meta.env.VITE_ENQUIRY_API_LINK, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => {
            if (response.status !== 200) throw new Error("Something went wrong!");
            toast.success("Message sent successfully!");
        })
        .catch(error => {
            console.error(error);
            toast.error("Something went wrong!");
        })
    }

    return (
        <section id="contact" className="py-24"> 
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
                <p className="text-lg mb-8">
                I'd love to hear from you! Feel free to contact me for any inquiries or collaborations.
                </p>

                <form ref={formRef} onSubmit={handleSubmit} className="max-w-md mx-auto" autoComplete="on">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-start">
                    Name
                    </label>
                    <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    className="mt-1 p-2 w-full bg-primary-50 border border-primary-300 rounded-md focus:ring-primary-800 focus:border-primary-800 text-primary-950" 
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="contact" className="block text-sm font-medium text-start">
                    Phone ( or ) Email
                    </label>
                    <input 
                    type="tel" 
                    id="contact" 
                    name="contact" 
                    required 
                    className="mt-1 p-2 w-full bg-primary-50 border border-primary-300 rounded-md focus:ring-primary-800 focus:border-primary-800 text-primary-950" 
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium text-start">
                    Message
                    </label>
                    <textarea 
                    id="message" 
                    name="message" 
                    rows="4" 
                    required 
                    className="mt-1 p-2 w-full bg-primary-50 border border-primary-300 rounded-md focus:ring-primary-800 focus:border-primary-800 text-primary-950" 
                    ></textarea>
                </div>
                <Button onClick={handleSubmit}>
                    Send Message
                </Button>
                </form>

                <div className="mt-8 text-center font-semibold">
                <a href={import.meta.env.VITE_LINKEDIN_PROFILE_LINK} target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-500 hover:underline">
                    LinkedIn
                </a>
                <span className="mx-4">|</span>
                <a href={import.meta.env.VITE_FACEBOOK_PROFILE_LINK} target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-500 hover:underline">
                    Facebook
                </a>
                </div>
            </div>
            <ToastContainer theme="dark" />
        </section>
    )
}

export default Contact