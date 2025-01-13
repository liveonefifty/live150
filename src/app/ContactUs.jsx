import React from 'react';
import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/20/solid';

export default function ContactUs() {
  return (
    <div>
      <h3 className='text_gradient font-title text-3xl font-bold md:text-5xl'>
        Let&apos;s Build a Relationship That Matters
      </h3>
      <p className='mt-5 text-xl'>
        Welcome to our Newsletter! Track our progress and keep in touch with our
        development.
      </p>
      <div className='mt-4 grid w-full grid-cols-2 gap-2'>
        <input
          type='text'
          placeholder='Your email'
          className='w-full rounded-full border-primary-50 bg-white px-4 py-2 text-xl text-secondary outline-none placeholder:text-xl'
        />
        <input
          type='text'
          placeholder='Your email'
          className='w-full rounded-full border-primary-100 bg-white px-4 py-2 text-xl text-secondary outline-none placeholder:text-xl'
        />
        <input
          type='text'
          placeholder='Your email'
          className='w-full rounded-full border-primary-100 bg-white px-4 py-2 text-xl text-secondary outline-none placeholder:text-xl'
        />
        <input
          type='text'
          placeholder='Your email'
          className='w-full rounded-full border-primary-100 bg-white px-4 py-2 text-xl text-secondary outline-none placeholder:text-xl'
        />
      </div>
      <button className='border_gradient mt-4 h-11 px-3 py-1 font-cta text-sm font-medium md:text-lg'>
        <Link className='flex items-center' href='/'>
          Submit <ChevronRightIcon className='aspect-square w-8' />
        </Link>
      </button>
    </div>
  );
}
