'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Discover from './Discover';
import ContactUs from './ContactUs';
import Newsletter from './Newsletter';
import Link from 'next/link';
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
            className='bg-primary-50 w-full rounded-[40px] bg-[#F8F8F8] p-6 text-[#313131] md:p-12'
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
            className='h-full w-full rounded-[40px] bg-primary p-6 text-white md:p-12'
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
      <div className='mx-auto flex w-full max-w-screen-2xl flex-col-reverse px-4 py-8 md:flex-row md:items-center md:justify-between'>
        <div className='text-[10px] text-black/65'>
          Website Designed and Developed by{' '}
          <Link
            href='https://angle.services/'
            className='font-semibold text-black/90 underline'
            target='_blank'
          >
            Angle
          </Link>
        </div>
        <div className='text-md font-title font-bold text-black'>
          All right reserved.
        </div>
        <div className='flex aspect-[397/88] h-10 justify-start'>
          <LogoMark />
        </div>
      </div>
    </div>
  );
}

const LogoMark = () => {
  return (
    <svg
      className='h-full'
      viewBox='0 0 397 88'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0_162_142)'>
        <path
          d='M369.57 19.2799C390.69 15.6499 397.57 33.5299 395.77 51.4199C394.28 66.1699 384.85 75.2499 369.57 72.6199C347.92 68.8899 347.67 23.0499 369.57 19.2799ZM380.46 61.5599C386.65 55.4499 386.69 29.3599 376.22 28.0399C362.88 26.3599 362.9 50.7599 367.27 58.9699C370.09 64.2599 376 65.9499 380.46 61.5599Z'
          fill='#342C6F'
        />
        <path
          d='M343.88 19.04V29.01H320.93L319.94 40.97C336.81 27.2 356.15 51.33 342.28 66.78C332.27 77.93 307.79 73.72 307.95 56.91C310.95 57.4 315.61 56.23 318.27 56.87C319.36 57.13 319.94 64.15 327.33 63.83C339.5 63.3 338.1 42.71 323.62 46.16C321.37 46.7 320.29 48.88 317.44 49.03C314.8 49.17 311.82 47.45 308.96 47.93C309.93 39.6 309.53 29.63 310.94 21.53C311.09 20.7 311.74 19.04 312.44 19.04H343.88Z'
          fill='#383072'
        />
        <path
          d='M266.041 54.9297H239.091C239.331 62.2897 243.471 64.7297 250.511 63.8197C254.721 63.2697 254.091 60.5997 255.691 60.0797C258.121 59.2897 261.821 60.2697 264.491 59.8997C266.521 64.5597 261.171 68.9297 257.431 70.7497C244.631 76.9797 229.191 70.2997 228.081 55.4697C225.681 23.4997 268.881 24.3597 266.041 54.9297ZM255.061 47.9497C254.531 37.1697 240.711 38.1497 239.091 47.9497H255.061Z'
          fill='#372F72'
        />
        <path
          d='M46.4708 0.10964V40.4796C46.4708 40.5896 47.8608 41.9796 47.9708 41.9796H88.3908C89.2908 49.2896 84.6708 49.8696 78.7908 50.8296C69.8108 52.2896 55.1108 53.7196 46.0308 53.9896C34.8308 54.3096 34.0908 50.8496 34.5108 40.4996C37.4608 30.3296 35.2908 14.1296 38.5608 4.68964C39.9708 0.609641 42.2908 -0.36036 46.4708 0.10964Z'
          fill='#332B6F'
        />
        <path
          d='M140.291 19.04V62.9H162.241V71.87H128.311V19.04H140.291Z'
          fill='#3A3374'
        />
        <path
          d='M198.131 33.0394L205.661 59.9194L213.191 33.0394L225.121 32.9994C223.511 37.7594 213.731 70.6194 212.011 71.7294C211.241 72.2294 199.671 72.1394 199.061 71.2694L186.191 34.4794C185.961 32.4294 186.301 33.1794 187.681 32.9894C190.841 32.5394 194.851 33.2494 198.141 33.0394H198.131Z'
          fill='#352D70'
        />
        <path
          d='M295.979 19.0395V71.8595H283.999V31.0095L272.029 36.9895C272.499 34.6095 271.229 28.9295 272.229 27.2295C272.609 26.5895 284.069 19.7695 284.949 19.5095C288.429 18.4695 292.399 19.2995 295.979 19.0595V19.0395Z'
          fill='#3D3576'
        />
        <path
          d='M48.4695 87.82C41.9095 88.79 41.4295 84.99 39.7695 80.06C36.5795 70.59 31.7795 55.9 46.8395 57.05C51.2195 57.38 84.7295 63.71 86.1495 65.13C87.9095 66.89 88.2095 71.9 84.8595 71.92L48.4595 69.88V87.82H48.4695Z'
          fill='#362F71'
        />
        <path
          d='M23.2803 2.33983C24.0603 3.11983 24.8803 6.51983 25.2403 7.85983C27.1603 15.1498 31.5103 36.5598 31.5803 43.4598C31.6203 47.7898 29.5603 51.5398 25.0403 52.0098C21.5703 52.3698 3.1903 47.9498 1.4903 45.5298C-5.9097 35.0498 16.5903 41.9198 18.5303 39.9698L16.5003 3.58983C16.5403 0.239834 21.5803 0.649834 23.2803 2.33983Z'
          fill='#362E71'
        />
        <path
          d='M63.1707 8.30967C83.2407 4.17967 85.7707 30.6297 70.7007 33.7597C51.5307 37.7397 48.3807 11.3497 63.1707 8.30967Z'
          fill='#FE601B'
        />
        <path d='M180.21 33H169.23V71.87H180.21V33Z' fill='#352D70' />
        <path
          d='M25.2294 56.0896C28.3794 55.1496 32.0694 57.2696 32.5294 60.4596C33.3794 66.3396 17.9194 75.3396 14.5094 80.3496C9.17935 81.6296 5.82935 78.8796 8.68935 73.4896C9.50935 71.9496 24.0894 56.4396 25.2394 56.0896H25.2294Z'
          fill='#3A3273'
        />
        <path
          d='M173.951 16.2096C181.171 15.1096 184.581 27.1596 175.621 28.0096C167.811 28.7496 166.011 17.4296 173.951 16.2096Z'
          fill='#3A3374'
        />
      </g>
      <defs>
        <clipPath id='clip0_162_142'>
          <rect width='396.05' height='87.97' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};
