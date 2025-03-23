'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Discover from './Discover';
import ContactUs from './ContactUs';
import Newsletter from './Newsletter';
// import StalkUs from './StalkUs';

export default function Globalfooter() {
  return (
    <div>
      <section className='m-auto mt-4 flex w-full max-w-screen-2xl flex-col gap-4 px-3 md:flex-row'>
        <div className='flex w-full flex-col-reverse gap-6 md:w-3/5 md:flex-col'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: '-100px', once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className='w-full rounded-[40px] bg-[#F8F8F8] bg-primary-50 p-6 text-[#313131] md:p-12'
          >
            <Discover />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: '-100px', once: true }}
            transition={{ duration: 0.5, delay: 0.75 }}
            className='h-full w-full rounded-[40px] bg-secondary p-6 text-white md:p-12'
          >
            <ContactUs />
          </motion.div>
        </div>
        <div className='flex w-full flex-col gap-6 md:w-2/5'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: '-100px', once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className='bg-primary h-full w-full rounded-[40px] p-6 text-white md:p-12'
          >
            <Newsletter />
          </motion.div>
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: '-100px', once: true }}
            transition={{ duration: 0.5, delay: 0.85 }}
            className='w-full rounded-[40px] bg-primary-50 p-6 md:p-12'
          >
            <StalkUs />
          </motion.div> */}
        </div>
      </section>
    </div>
  );
}
