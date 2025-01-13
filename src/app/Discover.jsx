import React from 'react';

export default function Discover() {
  return (
    <div className='flex w-full flex-col gap-4 md:flex-row md:items-center md:justify-start'>
      <div className='w-full'>
        <h4 className='text-4xl font-bold'>Discover</h4>
        <div className='mt-4 grid grid-cols-2 gap-2 font-medium'>
          <span>Home</span>
          <span>Appstore</span>
          <span>Contact Us</span>
          <span>Playstore</span>
        </div>
      </div>
      <div className='w-full'>
        <h4 className='text-4xl font-bold'>About Us</h4>
        <div className='mt-4 grid grid-cols-2 gap-2 font-medium'>
          <span>Who are we</span>
          <span>Our App</span>
          <span>Newsletter</span>
        </div>
      </div>
    </div>
  );
}
