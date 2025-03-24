'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowPathIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

export default function ContactUs() {
  const [data, setData] = useState({
    name: '',
    userEmail: '',
    phone: '',
    // message: '',
  });

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  // const [messageError, setMessageError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!data.name || data.name.length < 3) {
      setNameError(true);
      return;
    }
    if (!data.userEmail || !data.userEmail.includes('@')) {
      setEmailError(true);
      return;
    }
    if (!data.phone) {
      setPhoneError(true);
      return;
    }
    // if (!data.message) {
    //   setMessageError(true);
    //   return;
    // }

    if (!nameError && !emailError && !phoneError) {
      setLoading(true);
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: data.name,
            userEmail: data.userEmail,
            phone: data.phone,
            // message: data.message,
          }),
        });

        if (response.ok) {
          console.log('Email sent successfully');
          setData({
            name: '',
            userEmail: '',
            phone: '',
            // message: '',
          });
          setLoading(false);
          // timeout to show success message
          setTimeout(() => {
            setSuccess(true);
            setTimeout(() => {
              setSuccess(false);
            }, 5000);
          }, 700);
        } else {
          console.error('Error sending email');
          setLoading(false);
        }
      } catch (error) {
        console.error('Error:', error);
        setLoading(false);
      }
    }
  };

  return (
    <div>
      <h3 className='font-title text-3xl md:text-5xl'>
        Let&apos;s Build a Relationship That Matters
      </h3>
      <p className='mt-5'>
        Welcome to our Newsletter! Track our progress and keep in touch with our
        development.
      </p>
      <div className='mt-4 grid w-full grid-cols-2 gap-2'>
        <input
          type='text'
          placeholder='Your full name'
          onClick={() => {
            setNameError(false), setEmailError(false), setPhoneError(false);
          }}
          onChange={(e) => setData({ ...data, name: e.target.value })}
          className='border-primary-100 w-full rounded-full bg-white px-4 py-2 text-sm text-secondary outline-none placeholder:text-xs md:text-xl md:placeholder:text-xl'
        />
        <input
          type='text'
          onClick={() => {
            setNameError(false), setEmailError(false), setPhoneError(false);
          }}
          onChange={(e) => setData({ ...data, userEmail: e.target.value })}
          placeholder='Your email'
          className='border-primary-100 w-full rounded-full bg-white px-4 py-2 text-sm text-secondary outline-none placeholder:text-xs md:text-xl md:placeholder:text-xl'
        />
        <input
          type='number'
          onClick={() => {
            setNameError(false), setEmailError(false), setPhoneError(false);
          }}
          placeholder='Your Phone Number'
          onChange={(e) => setData({ ...data, phone: e.target.value })}
          className='border-primary-100 w-full rounded-full bg-white px-4 py-2 text-sm text-secondary outline-none placeholder:text-xs md:text-xl md:placeholder:text-xl'
        />
        <div className='text-md mt-2 flex w-full items-center px-4 text-red-600'>
          {emailError && 'Enter a valid email'}
          {nameError && 'Name is required'}
          {phoneError && 'Phone is required'}
        </div>
      </div>

      {/* {messageError && ( "Message is required" )} */}
      <div className='mt-4 flex w-full flex-col items-center gap-2 md:flex-row'>
        {loading ? (
          <button className='flex h-11 items-center justify-center gap-0 rounded-full border border-white px-3 py-1 font-cta text-sm font-medium hover:border-primary hover:bg-primary max-md:w-full md:text-lg'>
            Loading...
            <ArrowPathIcon className='aspect-square w-6 animate-spin' />
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            className='flex h-11 items-center justify-center gap-0 rounded-full border border-white px-3 py-1 font-cta text-sm font-medium hover:border-primary hover:bg-primary max-md:w-full md:text-lg'
          >
            Submit
            <ChevronRightIcon className='aspect-square w-8' />
          </button>
        )}

        {success && (
          <div className='text-white'>
            Thank you for reaching out. We will get back to you soon.
          </div>
        )}
      </div>
    </div>
  );
}
