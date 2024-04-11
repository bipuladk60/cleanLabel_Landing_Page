import React from 'react';

import { motion } from 'framer-motion';
import { SvgFirst, SvgSecond, SvgThird, SvgFourth } from './svgs';


const features = [
  {
    number: '01',
    title: 'Scan Food Ingredient Label',
    description: 'Quickly understand what\'s in your food with a simple scan.',
    bgColor: 'bg-[#FCFCFC]', 
    textColor: 'text-black',
    svg: SvgFirst
  },
  {
    number: '02',
    title: 'Look up for food products',
    description: 'Access a comprehensive database to find information about food products.',
    bgColor: 'bg-[#D2F898]',
    textColor: 'text-black',
    svg: SvgSecond
    
  },
  {
    number: '03',
    title: 'Find better options',
    description: 'Discover healthier alternatives to your favorite foods.',
    bgColor: 'bg-[#F6F930]',
    textColor: 'text-black',
    svg: SvgThird
  },
  {
    number: '04',
    title: 'Be healthy',
    description: 'Use our tools to maintain a balanced and nutritious diet.',
    bgColor: 'bg-[#2F2F2F]',
    textColor: 'text-white',
    svg: SvgFourth
  }
];

const FeatureBox = ({ number, title, description, bgColor, textColor, SvgIcon, index}) => {
    return (
      <motion.div className={`p-6 rounded-lg shadow-lg ${bgColor} ${textColor} hover:translate-y-2 transition-transform duration-300`}
      whileInView={{opacity: 1, x: 0}}
      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
      transition={{duration: 0.3, ease: 'easeInOut'}}
      viewport={{once: false}}
      >
        <h3 className="text-3xl font-jaldi mb-2">{number}. {title}</h3>
        <p className="mb-4">{description}</p>
        <div className='lg:w-[12rem] w-[6rem] pt-12 flex items-center'>
        <SvgIcon/>
        </div>
      </motion.div>
    );
  };


const ProductPage = () => {

  const slideInBottom = {
    hidden: { y: 300, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 120 } }
  };

  return (
    <div className="min-h-screen py-20 px-5 md:px-20">
    <motion.div 
          initial="hidden"
          animate="visible"
          variants={slideInBottom}>
      <div className="text-center mb-10 pt-10">
        <p className="text-4xl font-regular font-jaldi text-gray-800">
          Every day we are eating things without knowing what they actually contain.
        </p>
        <p className="text-3xl text-gray-400 font-regular font-jaldi">
          Our app makes sure you are well aware of what you are eating.
        </p>
      </div>
      </motion.div>

      <div className="text-5xl text-gray-800 font-jaldi mb-10 pt-20">
        Our Product:
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {features.map((feature, index) => (
          <FeatureBox
            key={index}
            number={feature.number}
            title={feature.title}
            description={feature.description}
            bgColor={feature.bgColor}
            textColor={feature.textColor}
            SvgIcon={feature.svg}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
