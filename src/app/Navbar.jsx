import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='fixed top-2 z-[9999] flex w-full items-center justify-between'>
      <div className='mx-auto w-full max-w-screen-2xl px-4'>
        <div className='m-auto mt-10 flex w-full items-center justify-between rounded-full border-2 border-white bg-white/60 px-6 py-3 shadow-sm backdrop-blur-md'>
          <Link
            className='text-2xl font-bold text-secondary md:text-4xl'
            href='/'
          >
            Live <span className='text-primary-200'>150</span>
          </Link>
          <button
            className={`border_gradient px-3 py-1 font-cta text-sm font-medium md:text-lg`}
          >
            <Link href='/'>Download For Free</Link>
          </button>
        </div>
      </div>
    </nav>
  );
}
