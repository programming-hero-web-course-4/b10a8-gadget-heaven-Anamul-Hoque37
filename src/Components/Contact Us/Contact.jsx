import React, { useState } from 'react';
import { toast } from 'react-toastify';


const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        toast('message sent')
    };
    return (
        <div className='bg-green-300 flex flex-row justify-around text-center items-center p-6'>
            <div className='flex flex-row justify-between items-center gap-20'>
                <div className='flex flex-col'>
                    <h2 className='text-2xl font-bold underline'>Contact Us</h2>
                    <div className='mb-4'>
                        <p><strong>Address:</strong> <br /> 1404, Rupshi, Rupganj, Narayanganj, Bangladesh.</p>
                        <p><strong>Phone:</strong> <br /> (880) 01737712037 </p>
                        <p><strong>Email:</strong> <br /> anamul@gmail.com</p>
                    </div>
                </div>
                <form onSubmit={handleSubmit} className='flex flex-col'>
                    <div className='mb-4'>
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className='w-full'
                            placeholder="Your Name"
                        />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className='w-full'
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                        />
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            className='w-full'
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your Message"
                        />
                    </div>
                    <button className='btn bg-slate-300' type="submit">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;