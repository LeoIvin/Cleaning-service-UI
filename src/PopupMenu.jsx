// src/components/PopupMenu.js
import React from 'react';
import './App.css'
import Logo from './Logo';

function PopupMenu({ isOpen, onClose }) {
    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
      };


    return (
        <div className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 ${isOpen ? 'flex' : 'hidden'} items-center justify-center`}>
            <div className="bg-clean text-white p-8 rounded-md w-screen h-screen relative bg-cover bg-center">
                <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-200" onClick={onClose}>
                    <svg className="w-6 h-6 fill-default-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
                <div className="flex flex-col items-center text-center">
                    <img src='\logo-light.svg' className='w-64 mb-16 pt-28'/>
                    <nav className="flex flex-col items-center w-full">
                        <a href="#home" className="text-default mb-4 font-bold text-2xl hover:text-hover-yellow2 font-segoe-ui">Home</a>
                        <a href="#services" className="mb-8 font-segoe-ui font-bold text-2xl hover:text-hover-yellow2 text-default">Services</a>
                        <a href="#about" className="mb-8 font-segoe-ui font-bold text-2xl hover:text-hover-yellow2 text-default">About</a>
                        <a href="#blog" className="mb-8 font-segoe-ui font-bold text-2xl hover:text-hover-yellow2 text-default">Blog</a>
                        <a href="#contact" className="mb-8 font-segoe-ui font-bold text-2xl hover:text-hover-yellow2 text-default">Contact</a>
                        <button className='mt-8 w-1/2 sm:w-1/3 md:w-1/2 lg:w-64 h-16 bg-default-black text-default font-bold hover:bg-hover-yellow hover:text-default-black rounded-lg text-lg'>
                            Book Appointment
                        </button>
                    </nav>
                </div>

            </div>
        </div>
    );
}

export default PopupMenu;
