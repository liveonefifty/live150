'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';

export default function MockupSlider() {
  const [currentSlide, setCurrentSlide] = useState(2);

  const slides = [
    {
      contentLeft: 'Holistic Forward-Looking Plans',
      ContentRight:
        'Simply upload a photo of your meal for real-time advice-no extra steps needed.',
      image: '/Frame1.png',
    },
    {
      contentLeft: 'Frictionless Guidance',
      ContentRight:
        'Log your meals, activities, mindfulness, and sleep for holistic forward-looking plans.',
      image: '/Frame2.png',
    },
    {
      contentLeft: 'Hyper-Personalized Support',
      ContentRight:
        'Get advice tailored to your demographics and preferences, making your health journey uniquely yours.',
      image: '/Frame3.png',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <>
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ margin: '-200px', once: true }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className='text_gradient text-center font-title text-3xl font-bold md:text-5xl'
      >
        Your Personalized Health <br className='hidden md:block' /> Journey Made
        Simple
      </motion.h3>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: '-200px', once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className='mt-10 flex h-[550px] w-full flex-col items-center justify-center gap-4 md:flex-row md:gap-10'
        >
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className='flex h-full flex-col items-center justify-center gap-4 md:flex-row md:gap-10'
          >
            <motion.div className='w-full md:w-[350px]'>
              <motion.p
                key={currentSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7 }}
                className='text_gradient w-full text-center font-title text-2xl font-bold md:text-left md:text-4xl'
              >
                {slides[currentSlide].contentLeft}
              </motion.p>
            </motion.div>
            <motion.div className='relative aspect-[267.92/569.21] h-full'>
              <Image
                src={slides[currentSlide].image}
                alt='blood'
                className='object-contain object-center'
                fill
              />
            </motion.div>
            <motion.div className='w-full md:w-[350px]'>
              <motion.p
                key={currentSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7 }}
                className='w-full text-center font-body text-lg md:text-left md:text-xl'
              >
                {slides[currentSlide].ContentRight}
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
      <div className='mb-10 mt-5 flex w-full items-center justify-center gap-4 md:gap-10'>
        <div
          onClick={() =>
            setCurrentSlide((prev) =>
              prev === 0 ? slides.length - 1 : prev - 1
            )
          }
          className='relative h-10 w-10 cursor-pointer'
        >
          <Image
            src={'/leftarrow.png'}
            alt='blood'
            className='object-contain object-center'
            fill
          />
        </div>
        <div className='flex items-center justify-center gap-2 md:gap-4'>
          {slides.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-12 rounded-full ${
                index === currentSlide ? 'bg-primary-200' : 'bg-neutral-300'
              }`}
            />
          ))}
        </div>

        <div
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          className='relative h-10 w-10 cursor-pointer'
        >
          <Image
            src={'/rightarrow.png'}
            alt='blood'
            className='object-contain object-center'
            fill
          />
        </div>
      </div>
    </>
  );
}
