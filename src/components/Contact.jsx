import React from 'react'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'
import Lottie from 'lottie-react'
import contact from '../assets/Contact.json'

const Contact = () => {
    return (
        <section id='contact' className='z-50 relative py-10' style={{ background: '#0C0C14' }}>
            <div className='mb-16 max-w-7xl mx-auto'>
                <div className='flex flex-col md:flex-row justify-between items-center'>
                    <div className='md:w-1/2 mb-8 ml-2 md:mb-0'>
                        <h2 className='text-3xl font-bold mb-3 text-pink-500'>Get in Touch</h2>
                        <p className='mb-4 text-white'>Lorem ipsum dolor sit amet consectetur 
                            adipisicing elit. Veritatis, corporis?</p>
                            <div className='flex space-x-4'>
                                <a href="#" className='text-primary/70 hover:text-primary'>
                                <img src={facebook} alt="" className='h-6 w-6 filter invert'/></a>
                                <a href="#" className='text-primary/70 hover:text-primary'>
                                <img src={instagram} alt="" className='h-6 w-6 filter invert'/></a>
                                <a href="#" className='text-primary/70 hover:text-primary'>
                                <img src={linkedin} alt="" className='h-6 w-6 filter invert'/></a>
                            </div>
                            <Lottie animationData={contact} className='w-[350px] mx-auto lg:w-[500px]'/>
                    </div>
                    <form className='w-full md:w-1/2 bg-[#181824] rounded-lg border border-pink-300 shadow-lg shadow-pink-500 p-10'>
                        <h1 className='text-4xl font-bold mb-7 text-white'>Contact Me</h1>
                        <div className='mb-4'>
                            <label htmlFor="name" className='block text-sm font-medium text-white/80'>Name</label>
                            <input type="text" id="name" placeholder='Full Name' className='mt-1 p-2 block w-full rounded-md 
                            border-gray-400 shadow-sm focus:border-indigo-300 focus:ring
                            focus:ring-indigo-200 focus:ring-opacity-50 bg-[#232336] text-white'/>
                        </div>
                        <div className='mb-4'>
                            <label htmlFor="email" className='block text-sm font-medium text-white/80'>Email</label>
                            <input type="text" id="email" placeholder='Email' className='mt-1 p-2 block w-full rounded-md 
                            border-gray-400 shadow-sm focus:border-indigo-300 focus:ring
                            focus:ring-indigo-200 focus:ring-opacity-50 bg-[#232336] text-white'/>
                        </div>
                        <div className='mb-4'>
                            <label htmlFor="message" className='block text-sm font-medium text-white/80'>Message</label>
                            <textarea id="message" placeholder='Enter Your Message' className='mt-1 p-2 block w-full rounded-md 
                            border-gray-400 shadow-sm focus:border-indigo-300 focus:ring
                            focus:ring-indigo-200 focus:ring-opacity-50 bg-[#232336] text-white'/>
                        </div>
                        <button className='bg-pink-600 px-3 py-2 rounded-lg text-white'>Send Message</button>
                    </form>
                </div>
            </div>
        </section>
        )
}

export default Contact