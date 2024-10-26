import React from 'react'
import Navbar from './Navbar';
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import soda from "../assets/limbu_soda.png"
import sodas from "../assets/sodas.png"

const SlideRight = (delay) => {
  return {
    hidden: {
      opacity: 0,
      x: 100,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: easeInOut,
      },
    },
    exit: {
      opacity: 0,
      x: -50,
      transition: {
        duration: 0.2,
        ease: easeInOut,
      },
    }
  };
}

const HeroData = [
  {
    id: '0',
    title: "Limbu soda",
    price: "20Rs",
    model: "Natural",
    pcs: "1 Bottle",
    image: soda,
    subtitle: "Natural limbu soda",
    bgColor: "#DFFF50",
  },
  {
    id: '2',
    title: "Limbu soda",
    price: "320Rs",
    pcs: "24 Bottels",
    model: "Natural",
    image: sodas,
    subtitle: "Natural limbu soda",
    bgColor: "#DFF509",
  }
]

const MainBody = () => {
  const [activeData, setActiveData] = React.useState(HeroData[0]);

  const handleActivityData = (data) => {
    setActiveData(data);
  };

  const handleRedirect = () => {
    // Redirect to the contact page
    window.location.href = '/contact'; // Replace '/contact' with the actual path to your contact page
  };

  return (
    <>
      <motion.div
        initial={{ backgroundColor: activeData.bgColor }}
        animate={{ backgroundColor: activeData.bgColor }}
        transition={{ duration: 0.8 }}
      >
        {/* navbar */}
        <Navbar />
        <div className='container grid grid-cols-1 md:grid-cols-2 min-h-[674px]'>

          {/* data info */}
          <div className='flex flex-col justify-center py-1 md:py-0 xl:max-w-[510px] py-1 order-2 md:order-1 py-1 md text-[#355E3B]'>
            <div className='space-y-5 text-center md:text-center items-center justify-center'>
              <AnimatePresence mode='wait'>
                <motion.h1
                  key={activeData.id}
                  variants={SlideRight(0.2)}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className='text-3xl lg:text-6xl xl:text-7xl font-bold font-mono text-shadow'
                >
                  {activeData.title}
                </motion.h1>
              </AnimatePresence>

              <AnimatePresence mode='wait'>
                <motion.p
                  key={activeData.id}
                  variants={SlideRight(0.2)}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className='text-[17px] text-[#355E3B]/80'
                >
                  {activeData.subtitle}
                </motion.p>
              </AnimatePresence>

              <AnimatePresence mode='wait'>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
                  className='flex items-center justify-center md:justify-center gap-4'
                >
                  <div className='w-20 h-[1px] bg-white'></div>
                  <p>TOP RECOMMENDATION</p>
                  <div className='w-20 h-[1px] bg-white'></div>
                </motion.div>
              </AnimatePresence>

              {/* image switcher */}
              <AnimatePresence mode="wait">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
                  className="grid grid-cols-2 gap-0"
                >
                  {HeroData.map((data) => {
                    return (
                      <div
                        key={data.id}
                        onClick={() => handleActivityData(data)}
                        className="flex flex-col items-center justify-center cursor-pointer space-y-3 hover:scale-105 transition-all duration-200"
                      >
                        <div className="flex flex-col items-center">
                          <img
                            src={data.image}
                            alt=""
                            className={`w-[170px] h-auto img-shadow ${activeData.id === data.id ? "opacity-100 scale-110" : "opacity-50"}`}
                          />
                        </div>
                        <div className="flex flex-col text-center !mt-6 space-y-1">
                          <p className="text-[12px] font-bold md:text-[20px]">{data.pcs}</p>
                          <p className="text-[20px] font-bold md:text-[50px]">{data.price}</p>
                        </div>
                      </div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Main image */}
          <div className='flex flex-col justify-end items-center relative order-1 md:order-2 justify-center'>
            <AnimatePresence mode='wait'>
              <motion.img
                key={activeData.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0, ease: easeInOut }}
                exit={{
                  opacity: 0,
                  x: 100,
                  transition: { duration: 0.4 },
                }}
                src={activeData.image}
                alt=""
                className='w-[200px] sm:w-[200px] md:w-[4000px] xl:w-[350px] img-shadow relative z-10'
              />
              {/* Button to redirect to contact page */}
              <div className="flex justify-center my-5">
                <button
                  onClick={handleRedirect}
                  className="px-6 py-3 bg-[#355E3B] text-white font-semibold rounded-lg hover:bg-green-700 transition duration-300"
                >
                  Contact / Book Order Now
                </button>
              </div>
            </AnimatePresence>
          </div>
        </div>


      </motion.div>
    </>
  )
}

export default MainBody
