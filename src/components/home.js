import React from 'react';
import { motion } from 'framer-motion';

const HomePage = () => {

  const slideInLeft = {
    hidden: { x: -300, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 120 } }
  };



  return (
    <div className="container mx-auto px-4 py-10">
      <div className="md:flex md:items-center md:justify-between md:mt-[15rem] sm:mt-[2rem]">
        <div className="md:w-1/2 lg:mr-8">
        <motion.div 
         
          initial="hidden"
          animate="visible"
          variants={slideInLeft} 
        >
          <h1 className="text-6xl font-bold text-gray-800 mb-12">
            Scan your food ingredients
          </h1>
          <p className="text-2xl text-gray-600 mb-8">
            We make sure that you are eating healthy food by scanning the ingredients of the food you are eating.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <a href='#joinUs'><button className="bg-black text-white px-6 py-3 rounded-full font-semibold">
              Join Us!
            </button></a>
          </div>
          </motion.div>
        </div>
        
     
      
      </div>
    </div>
  );
};

export default HomePage;
