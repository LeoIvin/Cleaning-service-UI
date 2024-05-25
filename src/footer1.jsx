

import React from 'react';

function Footer() {
  return (
    <footer className="bg-white text-gray-700 py-10 pt-28 bg-washed-white">
      <div className="container mx-auto flex flex-wrap justify-between">
        
        {/* Logo and Description */}
        <div className="w-full md:w-1/4 px-4 ml-[-20px]">
          <a href="#"><img className=' w-80 h-30 mb-4 inline-block pb-7' src="src/assets/logo-dark.svg" alt="Logo" /></a>
          <p className='text-xl pb-6 font-segoe-ui ml-[-20px]'>Egestas purus viverra accumsan in nis in metus dictum at tempor commodo.</p>
          <p className='text-xl font-segoe-ui ml-[-20px]'>Sagittis nisl rhoncus mattis rhoncus urna neque viverra eleifend pulvinar.</p>
        </div>
        
        {/* Sections */}
        <div className="w-full md:w-1/4 px-4">
          <h3 className="font-semibold mb-6 font-segoe-ui text-2xl">Quick Link</h3>
          <ul className='space-y-2'>
            <li><a href="#home" className="text-default-gray hover:text-hover-yellow text-xl font-segoe-ui">Home</a></li>
            <li><a href="#services" className="text-default-gray hover:text-hover-yellow text-xl font-segoe-ui">Services</a></li>
            <li><a href="#about" className="text-default-gray hover:text-hover-yellow text-xl font-segoe-ui">About</a></li>
            <li><a href="#contact" className="text-default-gray hover:text-hover-yellow text-xl font-segoe-ui">Contact</a></li>
          </ul>
        </div>

        <div className="w-full md:w-1/4 px-4">
          <h3 className="font-semibold mb-6 font-segoe-ui text-2xl">Services</h3>
          <ul className='space-y-2'>
            <li><a href="#" className="text-default-gray hover:text-hover-yellow text-xl font-segoe-ui">House cleaning</a></li>
            <li><a href="#" className="text-default-gray hover:text-hover-yellow text-xl font-segoe-ui">Office cleaning</a></li>
            <li><a href="#" className="text-default-gray hover:text-hover-yellow text-xl font-segoe-ui">Laundry service</a></li>
            <li><a href="#" className="text-default-gray hover:text-hover-yellow text-xl font-segoe-ui">Window Cleaning</a></li>
            <li><a href="#" className="text-default-gray hover:text-hover-yellow text-xl font-segoe-ui">Carpet Cleaning</a></li>
            <li><a href="#" className="text-default-gray hover:text-hover-yellow text-xl font-segoe-ui">Pool cleaning</a></li>
          </ul>
        </div>

        <div className="w-full md:w-1/4 px-4">
          <h3 className="font-semibold mb-6 font-segoe-ui text-2xl">Contact Info</h3>
          <p className='text-xl'><strong>Location</strong></p>
          <p className='mb-8 font-segoe-ui text-lg'>304 North Cardinal St. Dorchester</p>
          <p className='text-xl'><strong>Opening Hours</strong></p>
          <p className='mb-8 font-segoe-ui text-lg'>8:00 AM - 18:00 PM</p>
          <p className='text-xl'><strong>Phone Number</strong></p>
          <p className='mb-8 font-segoe-ui text-lg'>(123) 4567 890</p>
        </div>
      </div>
      <div className="text-center py-4 mt-4 pt-24">
        <p className='text-lg font-segoe-ui'>Copyright © 2024 - Designed by Dyson Digital Solutions</p>
      </div>
    </footer>
  );
}

export default Footer;
