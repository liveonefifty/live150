'use client';
import { motion } from 'motion/react';
import React from 'react';
import Image from 'next/image';

export default function SplitGrid() {
  return (
    <div className='grid w-full grid-cols-1 gap-4 md:grid-cols-2'>
      <motion.div
        className='flex aspect-video w-full flex-col justify-center rounded-[40px] bg-[#F6F6F6] px-12'
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ margin: '-100px', once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h4 className='text-5xl font-medium'>
          Frictionless WhatsApp Interface
        </h4>
        <p className='mt-4 max-w-md text-2xl text-[#252525]'>
          Allowing for a frictionless interaction without entering the
          application
        </p>
      </motion.div>
      <motion.div
        className='relative aspect-video w-full overflow-hidden rounded-[40px]'
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ margin: '-100px', once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Image
          src='/Friction.png'
          alt='Friction'
          fill
          className='object-cover object-center'
        />
      </motion.div>

      <motion.div
        className='relative hidden aspect-video w-full overflow-hidden rounded-[40px] md:block'
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ margin: '-100px', once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Image
          src='/Effortless.png'
          alt='Effortless'
          fill
          className='object-cover object-center'
        />
      </motion.div>
      <motion.div
        className='flex aspect-video w-full flex-col justify-center rounded-[40px] bg-[#F6F6F6] px-12'
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ margin: '-100px', once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h4 className='text-5xl font-medium'>
          Effortless Lifestyle Integration
        </h4>
        <p className='mt-4 max-w-md text-2xl text-[#252525]'>
          No laborious inputs, just snap a picture of your meal and we'll take
          it from there
        </p>
      </motion.div>
      <motion.div
        className='relative aspect-video w-full overflow-hidden rounded-[40px] md:hidden'
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ margin: '-100px', once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Image
          src='/Effortless.png'
          alt='Effortless'
          fill
          className='object-cover object-center'
        />
      </motion.div>
      <motion.div
        className='flex aspect-video w-full flex-col justify-center rounded-[40px] bg-[#F6F6F6] px-12'
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ margin: '-100px', once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h4 className='text-5xl font-medium'>
          Smart Daily Recaps, Uniquely Yours
        </h4>
        <p className='mt-4 max-w-md text-2xl text-[#252525]'>
          Get a quick, AI-powered snapshot of your day—insights, progress, and
          tailored recommendations, all in one place
        </p>
      </motion.div>
      <motion.div
        className='relative aspect-video w-full overflow-hidden rounded-[40px]'
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ margin: '-100px', once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Image
          src='/Smart.png'
          alt='Smart'
          fill
          className='object-cover object-center'
        />
      </motion.div>
    </div>
  );
}
