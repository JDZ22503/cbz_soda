import React from 'react';
import {
    FaInstagram,
    FaPhone,
} from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import logo from "../../assets/cbz.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Corrected import

const Footer = () => {
  return (
    <footer className='bg-[#DFFF50] pt-12 pb-8 text-[#5e6e1a]'>
      <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.6,
            }}
            className='space-y-6'>
            <img src={logo} alt="CBZ Soda Logo" className='max-w-[100px]' />
            <div>
              <p className='flex items-center gap-2'>
                <FaPhone />
                +91 99253 93026
              </p>
              <p className='flex items-center gap-2 mt-2'>
                <FaMapLocation /> Rajkot, Gujarat
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
              duration: 0.6,
            }}
            className='space-y-6'>
            <h1 className='text-3xl font-bold'>Quick Links</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
              <div>
                <ul className='space-y-2'>
                  <li><Link to="/">Home</Link></li> {/* Use Link for navigation */}
                  <li><Link to="/contact">Contact</Link></li> {/* Example for Contact page */}
                  <li><Link to="/about">About</Link></li> {/* Example for About page */}
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.6,
              duration: 0.6,
            }}
            className='space-y-6'>
            <h1 className='text-3xl font-bold'>Follow us</h1>
            <div className='flex items-center gap-3'>
              <a href="https://www.instagram.com/cbz_soda_perfumes/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className='text-3xl hover:scale-105 duration-300' />
              </a>
            </div>
          </motion.div>
        </div>   
        <p className='text-center mt-8 border-t-2 border-green-950 pt-8'>
          Copyright &copy; 2024. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
