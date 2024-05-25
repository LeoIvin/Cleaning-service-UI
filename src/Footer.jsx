import React from 'react';

function Footer() {
  return (
    <footer className="bg-washed-white py-12 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start">
          <a href="#"><img className='w-80 h-30 mb-4 inline-block pb-7' src="src/assets/logo-dark.svg" alt="Logo" /></a>
          <p className='text-xl pb-8 font-segoe-ui text-default-gray max-w-xs md:max-w-none mx-auto md:mx-0'>
            Egestas purus viverra accumsan in nis in metus dictum at tempor commodo.
          </p>
          <p className='text-xl font-segoe-ui text-default-gray max-w-xs md:max-w-none mx-auto md:mx-0'>
            Sagittis nisl rhoncus mattis rhoncus urna neque viverra eleifend pulvinar.
          </p>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-semibold mb-6 font-segoe-ui text-2xl">Quick Link</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#home" className="text-default-gray hover:text-hover-yellow text-xl font-segoe-ui">Home</a></li>
            <li><a href="#services" className="text-default-gray hover:text-hover-yellow text-xl font-segoe-ui">Services</a></li>
            <li><a href="#about" className="text-default-gray hover:text-hover-yellow text-xl font-segoe-ui">About</a></li>
            <li><a href="#contact" className="text-default-gray hover:text-hover-yellow text-xl font-segoe-ui">Contact</a></li>
          </ul>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-semibold mb-6 font-segoe-ui text-2xl">Services</h3>
          <ul className="mt-4 space-y-2">
            <li className="text-default-gray hover:text-hover-yellow text-xl font-segoe-ui">House cleaning</li>
            <li className="text-default-gray hover:text-hover-yellow text-xl font-segoe-ui">Office cleaning</li>
            <li className="text-default-gray hover:text-hover-yellow text-xl font-segoe-ui">Laundry service</li>
            <li className="text-default-gray hover:text-hover-yellow text-xl font-segoe-ui">Window Cleaning</li>
            <li className="text-default-gray hover:text-hover-yellow text-xl font-segoe-ui">Carpet Cleaning</li>
            <li className="text-default-gray hover:text-hover-yellow text-xl font-segoe-ui">Pool cleaning</li>
          </ul>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-semibold mb-6 font-segoe-ui text-2xl">Contact Info</h3>
          <p className='text-xl'><strong>Location</strong></p>
          <p className='mb-8 font-segoe-ui text-lg text-default-gray'>304 North Cardinal St. Dorchester</p>
          <p className='text-xl'><strong>Opening Hours</strong></p>
          <p className='mb-8 font-segoe-ui text-lg text-default-gray'>8:00 AM - 18:00 PM</p>
          <p className='text-xl'><strong>Phone Number</strong></p>
          <p className='mb-8 font-segoe-ui text-lg text-default-gray'>(123) 4567 890</p>
        </div>
      </div>
      <div className="text-center py-4 mt-4 pt-24">
        <p className='text-lg font-segoe-ui text-default-gray'>Copyright © 2024 - Designed by Dyson Digital Solutions</p>
      </div>
    </footer>
  );
}

export default Footer;
