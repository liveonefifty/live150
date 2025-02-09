import React from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';

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
          <div className='flex items-center gap-1'>
            <Link
              className=''
              href='https://play.google.com/store/search?q=live150&c=apps&pli=1'
              target='_blank'
            >
              <button
                className={`border_gradient flex items-center gap-0.5 px-3 py-1 font-cta text-sm font-medium md:text-lg`}
              >
                <Icon icon='mage:playstore' />
                Download Android
              </button>
            </Link>
            <Link
              className=''
              href='https://apps.apple.com/in/app/live-150/id6476695303'
              target='_blank'
            >
              <button
                className={`border_gradient flex items-center gap-0.5 px-3 py-1 font-cta text-sm font-medium md:text-lg`}
              >
                <Icon icon='simple-icons:appstore' />
                Download Ios
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
