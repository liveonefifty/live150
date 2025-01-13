'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';

export default function MockupSlider() {
  return (
    <>
      <h3 className='text_gradient text-center font-title text-3xl font-bold md:text-5xl'>
        Your Personalized Health <br className='hidden md:block' /> Journey Made
        Simple
      </h3>
      <div className='mt-10 flex h-[550px] w-full flex-col items-center justify-center gap-4 md:flex-row md:gap-10'>
        <div className='w-full md:w-[350px]'>
          <p className='text_gradient w-full text-center font-title text-2xl font-bold md:text-left md:text-4xl'>
            Holistic <br />
            Forward-Looking <br /> Plans
          </p>
        </div>
        <div className='relative aspect-[382/669] h-full'>
          <Image
            src={'/Frame1.jpg'}
            alt='blood'
            className='object-contain object-center'
            fill
          />
        </div>
        <div className='w-full md:w-[350px]'>
          <p className='w-full text-center font-body text-lg md:text-left md:text-xl'>
            Log your meals, activities, mindfulness, and sleep for holistic
            forward-looking plans.
          </p>
        </div>
      </div>
      <div className='mb-10 mt-5 flex w-full items-center justify-center gap-4 md:gap-10'>
        <div className='relative h-10 w-10'>
          <Image
            src={'/leftarrow.png'}
            alt='blood'
            className='object-contain object-center'
            fill
          />
        </div>
        <div className='flex items-center justify-center gap-2 md:gap-4'>
          <span className='h-2 w-12 rounded-full bg-primary-200'></span>
          <span className='h-2 w-12 rounded-full bg-neutral-300'></span>
          <span className='h-2 w-12 rounded-full bg-neutral-300'></span>
        </div>
        <div className='relative h-10 w-10'>
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
