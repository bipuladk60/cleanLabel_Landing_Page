import React, { useState } from 'react';
import { motion } from 'framer-motion';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import receipt from './assets/receipt.png';
import graph from './assets/Graph.png';

const DemoComponent = () => {
  const [activeTab, setActiveTab] = useState('raw');
  const slideInLeft = {
    hidden: { x: -300, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 120 } }
  };
  return (
    <div>
    <motion.div
          initial="hidden"
          animate="visible"
          variants={slideInLeft} 
        >
     <div className="px-4 lg:px-[6rem] text-5xl text-gray-800 font-jaldi pt-20">
        Demo:
      </div>
      </motion.div>
    <div className=" mt-20 pt-10 lg:mx-[15rem] mx-[2rem] bg-gray-100 flex flex-col px-4 rounded-[3rem] mb-[4rem]"> 
      <div className="flex flex-col justify-center items-center"> 
    
        <div className="flex justify-center mb-8 bg-gray-200 rounded-[3rem]"> 
          <button
            className={`px-8 py-4 text-sm md:text-md font-semibold ${activeTab === 'raw' ? 'bg-yellow-400' : 'bg-gray-200'} rounded-[3rem] transition duration-300`}
            onClick={() => setActiveTab('raw')}
          >
            What you see
          </button>
          <button
            className={`px-6 py-2 text-sm md:text-md font-semibold ${activeTab === 'processed' ? 'bg-yellow-400' : 'bg-gray-200'} rounded-[3rem] transition duration-300`} 
            onClick={() => setActiveTab('processed')}
          >
            What we see
          </button>
        </div>

        <div className="w-full max-w-4xl pt-[4rem] pb-[6rem]">
        
        <div>
        {activeTab === 'raw' ? (
          <img src={receipt} alt="Raw Data" className="mx-auto h-auto max-w-[90%] sm:max-w-[70%] md:max-w-[60%] lg:max-w-[70%] xl:max-w-[40%] rounded-lg" />
        ) : (
          <div className='flex flex-col lg:flex-row justify-center gap-4'>
            <div className='w-full lg:w-1/2 bg-gray-100 p-2 rounded-lg'>
              <Graph />
            </div>
            <div className='w-full lg:w-1/2'>
              <div className='bg-gray-100 p-2 rounded-lg mb-4'>
                <Items />
              </div>
              <div className='bg-gray-100 px-2 rounded-lg'>
                <BetterOptionsComponent />
              </div>
            </div>
          </div>
        )}
        </div>
      </div>
    </div>
      </div>
    </div>
  );
};


const BetterOptions = [
  { name: "Fruit Stripes", description: "Contains natural sugar. Contains no artificial colors or flavour. Lower Calorie", benefits: "Safe for diabetics" },
];

const BetterProductBox = ({ name, description, benefits }) => {
  return (
    <div className="group bg-green-100 rounded-lg py-2 px-2 md:px-2 mb-2 cursor-pointer overflow-hidden font-jaldi w-[80%] mt-4 mb-4">
      <div className="flex flex-row"><div className=' text-lg text-green-800 '>{name}</div> <div className='bg-gray-300 text-sm text-white px-1 rounded h-full ml-2'><p>Sponsored</p></div></div>
      
      <div className="text-sm text-gray-700 max-h-100 overflow-hiddenx">
       {description}
      </div>
      <div className="text-sm text-gray-700">
       Benefits: {benefits} </div>
    </div>
  );
};

const BetterOptionsComponent = () => {
  return (
    <div className="w-full flex flex-col items-center bg-white rounded-lg pt-2">
    <div className=''><h1 className='font-jaldi font-bold'>A better option for you</h1></div>
      {BetterOptions.map((option, index) => (
        <BetterProductBox key={index} name={option.name} description={option.description} benefits={option.benefits} />
      ))}
    </div>
  );
};

const Graph = () => {
  return(
    <div><img src={graph} alt='graph' className='rounded-lg'></img></div>
  )
}

const items = [
  { name: "Skittles", description: "Linked to obesity, type 2 diabetes, and heart disease" },
  { name: "Milk", description: "A possible allergen" },
  { name: "Sour Patch Kids", description: " Linked to diabetes, obesity, high blood pressure, and many other diseases" },
];

const ItemsBox = ({ name, description }) => {
  return (
    <div className="group bg-white rounded-lg py-4 px-10 mb-4 cursor-pointer overflow-hidden font-jaldi w-full">
      <div className="text-lg"> <WarningAmberIcon sx={{color: 'red'}}/>{name}</div>
      <div className="text-sm text-gray-700 max-h-0 group-hover:max-h-96 overflow-hidden transition-max-height duration-500 ease-in-out">
       {description}
      </div>
     
    </div>
  );
};


const Items = () => {
    return (
      <div className="w-full flex flex-col items-center">
        {items.map((item, index) => (
          <ItemsBox key={index} name={item.name} description={item.description} />
        ))}
      </div>
    );
  };
export default DemoComponent;
