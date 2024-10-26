// Navbar.js
import React, { useState } from 'react';
import { MdMenu, MdClose } from 'react-icons/md';  // Added MdClose for a close icon
import logo from "../assets/cbz.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NavbarMenu = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "Contact", link: "/contact" },
    { id: 3, title: "About", link: "/about" },
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='text-[#355E3B] bg-inherit py-8 px-8 md:py-6'>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="container flex justify-between items-center"
            >
                {/* Logo */}
                <div>
                    <img src={logo} alt="logo" className='max-w-[100px]' />
                </div>

                {/* Desktop Menu */}
                <div className='hidden md:block'>
                    <ul className='flex items-center gap-4 relative z-40 text-[#355E3B]'>
                        {NavbarMenu.map((item) => (
                            <li key={item.id}>
                                <Link to={item.link} className='inline-block text-base font-semibold py-2 px-3 uppercase'>
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Mobile Menu Icon */}
                <div className='md:hidden'>
                    {isMenuOpen ? (
                        <MdClose className='text-3xl cursor-pointer' onClick={toggleMenu} />
                    ) : (
                        <MdMenu className='text-3xl cursor-pointer' onClick={toggleMenu} />
                    )}
                </div>
            </motion.div>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white shadow-lg rounded-lg mt-2 py-4">
                    <ul className="flex flex-col items-right gap-4 text-[#355E3B]">
                        {NavbarMenu.map((item) => (
                            <li key={item.id} onClick={() => setIsMenuOpen(false)}>
                                <Link to={item.link} className="text-base font-semibold py-2 px-3 uppercase block">
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;
