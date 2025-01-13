import Image from 'next/image';
import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { Icon } from '@iconify/react';
import MockupSlider from './MockupSlider';
import Reviews from './Reviews';
import ContactUs from './ContactUs';
import Discover from './Discover';
import StalkUs from './StalkUs';
import Newsletter from './Newsletter';

export default function Home() {
  return (
    <>
      <section className='m-auto mt-4 min-h-[80vh] w-full max-w-screen-2xl rounded-[40px] bg-primary-50 pb-5'>
        <div className='flex h-full min-h-[80vh] w-full flex-col justify-end gap-4 px-3 md:gap-10'>
          <div className='h-20 w-full md:h-32'></div>
          <h1 className='text_gradient ml-4 font-title text-5xl font-bold md:text-8xl'>
            Correct & <br /> Reverse Bad <br /> Health.
          </h1>
          <div className='flex w-full flex-col gap-4 rounded-[30px] bg-white p-4 shadow-sm md:flex-row'>
            <div className='w-full'>
              <p className='mt-2 text-sm md:text-xl'>
                Whether you're managing a specific health condition or focusing
                on general wellness, Live150 helps you achieve your goals
                through personalized interventions in Nutrition, Activity,
                Mindfulness, and Sleep.
              </p>
              <div className='mt-4 flex gap-2'>
                <button className='border_gradient h-11 px-3 py-1 font-cta text-sm font-medium md:text-lg'>
                  <Link className='flex items-center' href='/'>
                    Get Started{' '}
                    <ChevronRightIcon className='aspect-square w-8' />
                  </Link>
                </button>
                <button className='border_gradient flex size-11 items-center justify-center'>
                  <Link className='flex items-center' href='/'>
                    <Icon icon='simple-icons:appstore' className='w-8' />
                  </Link>
                </button>
                <button className='border_gradient flex size-11 items-center justify-center'>
                  <Link className='flex items-center' href='/'>
                    <Icon icon='mage:playstore' className='w-8' />
                  </Link>
                </button>
              </div>
            </div>
            <div className='grid w-full gap-4 md:grid-cols-2'>
              <div className='flex min-h-28 w-full flex-wrap items-center gap-3 rounded-2xl p-4 shadow-md'>
                <div className='relative aspect-square h-16'>
                  <Image
                    src={'/blood.png'}
                    alt='blood'
                    className='object-contain object-center'
                    fill
                  />
                </div>
                <span className='text_gradient font-title text-xl font-bold'>
                  Diabetes Care
                </span>
              </div>
              <div className='flex min-h-28 w-full flex-wrap items-center gap-3 rounded-2xl p-4 shadow-md'>
                <div className='relative aspect-square h-16'>
                  <Image
                    src={'/blood.png'}
                    alt='blood'
                    className='object-contain object-center'
                    fill
                  />
                </div>
                <span className='text_gradient font-title text-xl font-bold'>
                  Heart Health
                </span>
              </div>
              <div className='flex min-h-28 w-full flex-wrap items-center gap-3 rounded-2xl p-4 shadow-md'>
                <div className='relative aspect-square h-16'>
                  <Image
                    src={'/meter.png'}
                    alt='blood'
                    className='object-contain object-center'
                    fill
                  />
                </div>
                <span className='text_gradient font-title text-xl font-bold'>
                  Weight Control
                </span>
              </div>
              <div className='flex min-h-28 w-full flex-wrap items-center gap-3 rounded-2xl p-4 shadow-md'>
                <div className='relative aspect-square h-16'>
                  <Image
                    src={'/meter.png'}
                    alt='blood'
                    className='object-contain object-center'
                    fill
                  />
                </div>
                <span className='text_gradient font-title text-xl font-bold'>
                  Brain Health
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='m-auto mt-4 grid w-full max-w-screen-2xl grid-cols-2 gap-4 rounded-[40px] bg-primary-100 p-6 md:grid-cols-4 md:p-12'>
        <div className='flex flex-wrap items-center gap-2'>
          <span className='text_gradient font-title text-5xl font-bold'>
            30M+
          </span>
          <span className='text-lg font-medium leading-5'>
            Research Papers <br /> Analyzed
          </span>
        </div>
        <div className='flex flex-wrap items-center gap-2'>
          <span className='text_gradient font-title text-5xl font-bold'>
            30M+
          </span>
          <span className='text-lg font-medium leading-5'>
            Research Papers <br /> Analyzed
          </span>
        </div>
        <div className='flex flex-wrap items-center gap-2'>
          <span className='text_gradient font-title text-5xl font-bold'>
            30M+
          </span>
          <span className='text-lg font-medium leading-5'>
            Research Papers <br /> Analyzed
          </span>
        </div>
        <div className='flex flex-wrap items-center gap-2'>
          <span className='text_gradient font-title text-5xl font-bold'>
            30M+
          </span>
          <span className='text-lg font-medium leading-5'>
            Research Papers <br /> Analyzed
          </span>
        </div>
      </section>

      <section className='m-auto mt-4 w-full max-w-screen-2xl rounded-[40px] bg-gradient-to-br from-primary-200 to-primary-250 px-6 py-10 md:px-12'>
        <h2 className='font-title text-3xl font-bold text-primary-100 md:text-5xl'>
          The Science Behind Live150
        </h2>
        <div className='mt-8 flex flex-col gap-4 md:flex-row'>
          <div className='flex w-full gap-10'>
            <div className='flex flex-col gap-4 rounded-[30px] bg-primary-50 p-4 shadow-sm'>
              <div className='aspect-video w-full rounded-3xl bg-primary-150'></div>
              <div>
                <h3 className='text-2xl font-bold'>
                  Epigenetics & Health Optimization
                </h3>
                <p>
                  Our approach leverages the latest research in epigenetics,
                  showing how lifestyle factors can influence gene expression
                  and health outcomes.
                </p>
              </div>
            </div>
          </div>
          <div className='flex w-full gap-10'>
            <div className='flex flex-col gap-4 rounded-[30px] bg-primary-50 p-4 shadow-sm'>
              <div className='aspect-video w-full rounded-3xl bg-primary-150'></div>
              <div>
                <h3 className='text-2xl font-bold'>
                  Epigenetics & Health Optimization
                </h3>
                <p>
                  Our approach leverages the latest research in epigenetics,
                  showing how lifestyle factors can influence gene expression
                  and health outcomes.
                </p>
              </div>
            </div>
          </div>
          <div className='flex w-full gap-10'>
            <div className='flex flex-col gap-4 rounded-[30px] bg-primary-50 p-4 shadow-sm'>
              <div className='aspect-video w-full rounded-3xl bg-primary-150'></div>
              <div>
                <h3 className='text-2xl font-bold'>
                  Epigenetics & Health Optimization
                </h3>
                <p>
                  Our approach leverages the latest research in epigenetics,
                  showing how lifestyle factors can influence gene expression
                  and health outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='m-auto mt-4 w-full max-w-screen-2xl rounded-[40px] bg-primary-50 px-3 py-10 md:px-5'>
        <MockupSlider />
      </section>

      <section className='m-auto mt-4 flex w-full max-w-screen-2xl flex-col gap-4 md:flex-row'>
        <div className='flex w-full flex-col gap-4 rounded-[40px] bg-primary-50 p-6 md:gap-20 md:p-12'>
          <h3 className='text_gradient mt-10 font-title text-3xl font-bold md:text-5xl'>
            Our Unique Approach
          </h3>
          <div>
            <h4 className='text-3xl font-medium'>Multi-Agent AI Model</h4>
            <p className='mt-4 text-xl'>
              Combines expertise from nutritionists, fitness experts, and
              mindfulness coaches for comprehensive care.
            </p>
          </div>
          <div>
            <h4 className='text-3xl font-medium'>Digital Health Twin</h4>
            <p className='mt-4 text-xl'>
              Creates your virtual health profile for hyper-personalized
              recommendations that evolve with you.
            </p>
          </div>
          <div>
            <h4 className='text-3xl font-medium'>Habit-Building Module</h4>
            <p className='mt-4 text-xl'>
              Guides you in developing sustainable wellness routines through
              personalized, actionable insights.
            </p>
          </div>
        </div>
        <div className='w-full rounded-[40px] bg-gradient-to-br from-primary-200 to-primary-250 p-6 md:p-12'>
          <Reviews />
        </div>
      </section>

      <section className='m-auto mt-4 w-full max-w-screen-2xl rounded-[40px] bg-gradient-to-br from-primary-100 to-primary-150 py-10'>
        <h3 className='text_gradient mt-10 w-full px-6 text-center font-title text-3xl font-bold md:px-12 md:text-5xl'>
          Holistic Health Management
        </h3>
        <div className='relative mt-20 aspect-[1402/401] w-full'>
          <Image
            src={'/chart.png'}
            alt='blood'
            className='object-contain object-center'
            fill
          />
        </div>
      </section>

      <section className='m-auto mt-4 w-full max-w-screen-2xl rounded-[40px] bg-primary-50 px-6 py-10 md:px-12'>
        <h3 className='text_gradient mt-10 font-title text-3xl font-bold md:text-5xl'>
          Frequently Asked Questions
        </h3>
        <div className='mt-10 flex flex-col gap-4 md:flex-row md:gap-20'>
          <div className='flex w-full flex-col gap-4 md:gap-20'>
            <div>
              <h4 className='text-3xl font-medium'>What is Live150?</h4>
              <p className='mt-4 text-xl'>
                Live150 is a holistic healthcare platform that helps you extend
                your healthspan and lifespan through personalized guidance on
                nutrition, fitness, mindfulness, and sleep.
              </p>
            </div>
            <div>
              <h4 className='text-3xl font-medium'>Who can use Live150?</h4>
              <p className='mt-4 text-xl'>
                Live150 is designed for anyone looking to improve their health
                and wellness, regardless of age or fitness level.
              </p>
            </div>
            <div>
              <h4 className='text-3xl font-medium'>
                Does Live150 support multiple languages?
              </h4>
              <p className='mt-4 text-xl'>
                Currently, Live150 is available in English, with plans to expand
                to other languages in the near future.
              </p>
            </div>
          </div>
          <div className='flex w-full flex-col gap-4 md:gap-20'>
            <div>
              <h4 className='text-3xl font-medium'>How does Live150 work?</h4>
              <p className='mt-4 text-xl'>
                Live150 uses advanced AI to learn from your habits and provide
                tailored recommendations for your wellness journey.
              </p>
            </div>
            <div>
              <h4 className='text-3xl font-medium'>
                Is Live150 available globally?
              </h4>
              <p className='mt-4 text-xl'>
                Yes, Live150 is accessible worldwide, offering personalized
                advice and services based on local preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='m-auto mt-4 flex w-full max-w-screen-2xl flex-col gap-4 md:flex-row'>
        <div className='flex w-full flex-col-reverse gap-6 md:w-3/5 md:flex-col'>
          <div className='w-full rounded-[40px] bg-primary-50 p-6 md:p-12'>
            <Discover />
          </div>
          <div className='h-full w-full rounded-[40px] bg-gradient-to-br from-primary-100 to-primary-150 p-6 md:p-12'>
            <ContactUs />
          </div>
        </div>
        <div className='flex w-full flex-col gap-6 md:w-2/5'>
          <div className='h-full w-full rounded-[40px] bg-gradient-to-br from-primary-200 to-primary-250 p-6 md:p-12'>
            <Newsletter />
          </div>
          <div className='w-full rounded-[40px] bg-primary-50 p-6 md:p-12'>
            <StalkUs />
          </div>
        </div>
      </section>
    </>
  );
}
