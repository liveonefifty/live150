import React from 'react';
import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/20/solid';

export default function Newsletter() {
  return (
    <div>
      <h3 className='font-title text-3xl text-primary-100 md:text-5xl'>
        Our Unique Approach
      </h3>
      <p className='mt-5 text-xl text-primary-100 md:mt-12'>
        Welcome to our Newsletter! Track our progress and keep in touch with our
        development.
      </p>
      <div className='mt-10 w-[80%]'>
        <input
          type='text'
          placeholder='Your email'
          className='w-full rounded-full border-primary-100 bg-primary-100 px-4 py-2 text-xl text-secondary outline-none placeholder:text-xl'
        />
      </div>
      <button
        className={`mt-2 rounded-full border border-white px-3 py-1 font-cta text-sm font-medium text-white md:text-lg`}
      >
        <Link className='flex items-center' href='/'>
          Download For Free <ChevronRightIcon className='aspect-square w-8' />
        </Link>
      </button>
    </div>
  );
}
