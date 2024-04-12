import React from 'react';
import { motion } from 'framer-motion';


const HomePage = () => {

  const slideInLeft = {
    hidden: { x: -300, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 120 } }
  };



  return (
    <div className="container mx-auto px-4 py-10 ">
      <div className="md:flex md:items-center md:justify-between mt-[10rem] lg:mt-[15rem]">
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
          <div className="flex flex-col gap-1">
           <a href='https://form.jotform.com/241020939403044' target='_blank' rel="noopener noreferrer"> <button className="bg-black text-white py-3 rounded-full font-semibold mt-2 w-[60%] lg:w-[40%]">
            Join Beta Waitlist
            </button>
            </a>
          </div>
          
        
          </motion.div>
        </div>
        
     
      
      </div>
    </div>
  );
};

export default HomePage;
