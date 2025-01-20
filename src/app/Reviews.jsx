import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';

export default function Reviews() {
  return (
    <div>
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ margin: '-100px', once: true }}
        transition={{ duration: 0.5, delay: 0.45 }}
        className='mt-10 font-title text-3xl font-bold text-primary-100 md:text-5xl'
      >
        Your Personalized Health <br className='hidden md:block' /> Journey Made
        Simple
      </motion.h3>
      <div className='mt-4 aspect-video w-full rounded-2xl bg-primary-150'></div>
      <div className='mt-4 text-xl font-medium text-primary-100'>
        <p>
          The Digital Health Twin feature has been a game-changer for me. It's
          like having a personal health coach that understands my body and
          evolves with me. I've never felt more in control of my wellness!
        </p>
        <p className='mt-2 text-2xl'>— Anita S., 38</p>
      </div>

      <div className='mb-10 mt-5 flex w-full items-center justify-center gap-4 md:gap-10'>
        <div className='relative h-10 w-10'>
          <Image
            src={'/whiteleft.png'}
            alt='blood'
            className='object-contain object-center'
            fill
          />
        </div>
        <div className='flex items-center justify-center gap-2 md:gap-4'>
          <span className='h-2 w-12 rounded-full bg-primary-100'></span>
          <span className='h-2 w-12 rounded-full bg-neutral-300/40'></span>
          <span className='h-2 w-12 rounded-full bg-neutral-300/40'></span>
        </div>
        <div className='relative h-10 w-10'>
          <Image
            src={'/whiteright.png'}
            alt='blood'
            className='object-contain object-center'
            fill
          />
        </div>
      </div>
    </div>
  );
}
