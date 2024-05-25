// src/components/Nav.js
import { useState } from 'react';
import Logo from './Logo';
import PopupMenu from './PopupMenu';

function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header>
            <div className='bg-default relative'>
                <nav className="flex items-center justify-between p-6 mb-52 border border-default sticky top-0">
                    <Logo />
                    <div className="lg:hidden">
                        <button onClick={() => setIsOpen(!isOpen)}>
                            <svg className='fill-default-black hover:fill-hover-yellow' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
                            </svg>
                        </button>
                    </div>
                    <ul className="hidden lg:flex space-x-16 mx-auto text-white">
                        <li className="text-default-black hover:text-hover-yellow font-bold text-xl font-segoe-ui ml-9"><a href="#home">Home</a></li>
                        <li className="text-default-black hover:text-hover-yellow font-bold text-xl font-segoe-ui ml-9"><a href="#services">Services</a></li>
                        <li className="text-default-black hover:text-hover-yellow font-bold text-xl font-segoe-ui ml-9"><a href="#about">About</a></li>
                        <li className="text-default-black hover:text-hover-yellow font-bold text-xl font-segoe-ui ml-9"><a href="#contact">Contact</a></li>
                    </ul>
                    <div className="hidden lg:flex space-x-10 pr-9 mr-2">
                        <button className="font-helvetica text-default-black font-bold hover:text-hover-yellow p-3 text-lg">Call us: (123) 4567 890</button>
                        <a href="#">
                            <svg className='fill-default-gray stroke-gray-300 w-7 h-7 hover:fill-hover-yellow mt-3' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                                <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/>
                            </svg>
                        </a>
                    </div>
                </nav>
                <PopupMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
            </div>
        </header>
    );
}

export default Nav;
