import React from 'react';
import Navbar from './Navbar';
import lemonImage from "../assets/sodas.png"; 
import { motion, AnimatePresence, easeInOut } from "framer-motion";

const SlideRight = (delay = 0) => ({
  hidden: { opacity: 0, x: 100 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, delay, ease: easeInOut }},
  exit: { opacity: 0, x: -100, transition: { duration: 0.3, ease: easeInOut }}
});

const About = () => {
  return (
    <>
      <Navbar />
      <AnimatePresence mode='wait'>
        <motion.div 
          key="about-page"
          initial="hidden"
          animate="show"
          exit="exit"
          variants={SlideRight(0.2)}
          className="bg-gray-100 py-10 px-5 lg:px-20"
        >
          {/* Header Section */}
          <div className="text-center mb-10">
            <motion.h1 
              className="text-4xl font-bold text-[#355E3B] mb-2" 
              variants={SlideRight(0.2)} // delay increased by 0.2 seconds
            >
              About Us
            </motion.h1>
            <motion.p 
              className="text-gray-600 max-w-2xl mx-auto" 
              variants={SlideRight(0.4)} // delay increased by 0.2 more seconds
            >
              We are dedicated to bringing you the refreshing taste of natural lemon soda. Our commitment is to quality, flavor, and sustainability, ensuring that every sip is as delightful as the last.
            </motion.p>
          </div>

          {/* Company Story Section */}
          <motion.div 
            className="flex flex-col lg:flex-row items-center gap-10 mb-10" 
            variants={SlideRight(0.6)} // delay increased by 0.2 more seconds
          >
            <div className="flex justify-center lg:w-1/2">
              <img src={lemonImage} alt="Natural Lemon Soda" className="w-[250px] h-auto image-sh" />
            </div>
            <div className="lg:w-1/2 text-gray-700">
              <motion.h2 className="text-3xl font-semibold text-[#355E3B] mb-4" variants={SlideRight(0.8)}>Our Story</motion.h2>
              <motion.p className="mb-4" variants={SlideRight(1)}>
                Founded with a passion for natural flavors and refreshing experiences, our company set out to create a lemon soda that captures the authentic zest of lemons without artificial additives.
              </motion.p>
              <motion.p variants={SlideRight(1.2)}>
                From humble beginnings, we have grown thanks to our customers who share our love for pure, natural soda. Today, we continue our journey by constantly refining our process and exploring sustainable practices.
              </motion.p>
            </div>
          </motion.div>

          {/* Mission and Values */}
          <motion.div 
            className="bg-white shadow-lg rounded-lg p-8 mb-10" 
            variants={SlideRight(1.4)} // delay increased by 0.2 more seconds
          >
            <motion.h2 className="text-3xl font-semibold text-[#355E3B] mb-4 text-center" variants={SlideRight(1.6)}>Our Mission</motion.h2>
            <motion.p className="text-gray-600 text-center mb-6" variants={SlideRight(1.8)}>
              To provide a refreshing, natural lemon soda experience that satisfies your thirst and respects the planet.
            </motion.p>
            <div className="flex flex-col lg:flex-row gap-8">
              <motion.div className="lg:w-1/3" variants={SlideRight(2)}>
                <h3 className="text-2xl font-semibold text-[#355E3B] mb-2">Quality</h3>
                <p>
                  We source only the finest, natural lemons and ingredients to create a soda that is as pure as it is refreshing.
                </p>
              </motion.div>
              <motion.div className="lg:w-1/3" variants={SlideRight(2.2)}>
                <h3 className="text-2xl font-semibold text-[#355E3B] mb-2">Sustainability</h3>
                <p>
                  Our commitment extends beyond great taste. We are constantly working to reduce our environmental impact by using eco-friendly packaging and sustainable sourcing practices.
                </p>
              </motion.div>
              <motion.div className="lg:w-1/3" variants={SlideRight(2.4)}>
                <h3 className="text-2xl font-semibold text-[#355E3B] mb-2">Customer Care</h3>
                <p>
                  Our customers are at the heart of everything we do. From sourcing ingredients to crafting each bottle, we aim to bring joy to our customers, one sip at a time.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Ingredients Section */}
          <motion.div 
            className="flex flex-col lg:flex-row items-center gap-10" 
            variants={SlideRight(2.6)} // delay increased by 0.2 more seconds
          >
            <div className="lg:w-1/2 text-gray-700">
              <motion.h2 className="text-3xl font-semibold text-[#355E3B] mb-4" variants={SlideRight(2.8)}>Our Ingredients</motion.h2>
              <motion.p className="mb-4" variants={SlideRight(3)}>
                We believe in simplicity. Our lemon soda is made from fresh, hand-picked lemons, pure water, and a touch of natural sweetness.
              </motion.p>
              <motion.p variants={SlideRight(3.2)}>
                With no artificial flavors, colors, or preservatives, we ensure that each bottle delivers a truly natural lemon soda experience.
              </motion.p>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <img src={lemonImage} alt="Fresh Lemons" className="w-[250px] h-auto" />
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default About;
