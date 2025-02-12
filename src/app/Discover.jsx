'use client';
import React from 'react';
import Link from 'next/link';

export default function Discover() {
  return (
    <div className='flex w-full flex-col gap-4 md:flex-row md:justify-start'>
      <div className='w-full'>
        <h4 className='text-4xl font-bold'>Discover</h4>
        <div className='mt-4 grid grid-cols-2 gap-2 font-medium'>
          <Link href='/'>Home</Link>
          <Link
            target='_blank'
            href='https://apps.apple.com/in/app/live-150/id6476695303'
          >
            Appstore
          </Link>
          <Link target='_blank' href='https://wa.me/+17322735077'>
            Contact Us
          </Link>
          <Link
            target='_blank'
            href='https://play.google.com/store/search?q=live150&c=apps&pli=1'
          >
            Playstore
          </Link>
        </div>
      </div>
      <div className='w-full'>
        <h4 className='text-4xl font-bold'>Legal</h4>
        <div className='mt-4 grid grid-cols-2 gap-2 font-medium'>
          <Link href='/privacy-policy'>Privacy Policy</Link>
          <Link href='/service-terms'>Terms of Service</Link>
        </div>
      </div>
    </div>
  );
}
