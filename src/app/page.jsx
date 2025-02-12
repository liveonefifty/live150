'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { Icon } from '@iconify/react';
import { motion } from 'motion/react';
import MockupSlider from './MockupSlider';
import Reviews from './Reviews';
import ContactUs from './ContactUs';
import Discover from './Discover';
import StalkUs from './StalkUs';
import Newsletter from './Newsletter';

export default function Home() {
  return (
    <>
      <section className='m-auto mt-4 w-full max-w-screen-2xl'>
        <div className='relative flex h-full w-full flex-col justify-end gap-4 md:gap-10'>
          <div className='z-0 mt-[90px] aspect-video w-full'>
            <video
              className='h-full w-full rounded-md object-cover'
              src='/hero.mp4'
              playsInline
              autoPlay
              muted
              loop
            ></video>
          </div>
          <div className='mt-10 rounded-[40px] bg-primary-50 pt-10'>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='text_gradient relative z-10 mb-2 ml-4 px-3 pb-4 font-title text-5xl font-bold md:text-8xl'
            >
              Live Healthier & Live Longer.
            </motion.h1>
            <div className='mb-10 w-full px-3'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className='shadowG flex w-full flex-col gap-4 rounded-[30px] bg-white/40 p-4 backdrop-blur-md md:flex-row'
              >
                <div className='w-full'>
                  <p className='mt-2 text-sm md:text-xl'>
                    Whether you're managing a specific health condition or
                    focusing on general wellness, Live150 helps you achieve your
                    goals through personalized interventions in Nutrition,
                    Activity, Mindfulness, and Sleep.
                  </p>
                  <div className='mt-4 flex gap-2'>
                    <button className='border_gradient h-11 px-3 py-1 font-cta text-sm font-medium md:text-lg'>
                      <Link
                        className='flex items-center'
                        href='https://wa.me/+17322735077'
                        target='_blank'
                      >
                        Get Started{' '}
                        <ChevronRightIcon className='aspect-square w-8' />
                      </Link>
                    </button>
                    <button className='border_gradient flex size-11 items-center justify-center'>
                      <Link
                        className='flex items-center'
                        href='https://apps.apple.com/in/app/live-150/id6476695303'
                        target='_blank'
                      >
                        <Icon icon='simple-icons:appstore' className='w-8' />
                      </Link>
                    </button>
                    <button className='border_gradient flex size-11 items-center justify-center'>
                      <Link
                        className='flex items-center'
                        href='https://play.google.com/store/search?q=live150&c=apps&pli=1'
                        target='_blank'
                      >
                        <Icon icon='mage:playstore' className='w-8' />
                      </Link>
                    </button>
                  </div>
                </div>
                <div className='grid w-full gap-4 md:grid-cols-2'>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className='shadowG flex min-h-28 w-full flex-wrap items-center gap-3 rounded-2xl p-4'
                  >
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
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className='shadowG flex min-h-28 w-full flex-wrap items-center gap-3 rounded-2xl p-4'
                  >
                    <div className='relative aspect-square h-16'>
                      <Image
                        src={'/heart.png'}
                        alt='heart'
                        className='object-contain object-center'
                        fill
                      />
                    </div>
                    <span className='text_gradient font-title text-xl font-bold'>
                      Heart Health
                    </span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.85 }}
                    className='shadowG flex min-h-28 w-full flex-wrap items-center gap-3 rounded-2xl p-4'
                  >
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
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    className='shadowG flex min-h-28 w-full flex-wrap items-center gap-3 rounded-2xl p-4'
                  >
                    <div className='relative aspect-square h-16'>
                      <Image
                        src={'/brain.png'}
                        alt='brain'
                        className='object-contain object-center'
                        fill
                      />
                    </div>
                    <span className='text_gradient font-title text-xl font-bold'>
                      Brain Health
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className='m-auto mt-4 grid w-full max-w-screen-2xl grid-cols-2 gap-4 rounded-[40px] bg-primary-100 p-6 md:grid-cols-4 md:p-12'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className='flex flex-wrap items-center gap-2'
        >
          <span className='text_gradient font-title text-5xl font-bold'>
            30M+
          </span>
          <span className='text-lg font-medium leading-5'>
            Research Papers <br /> Analyzed
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className='flex flex-wrap items-center gap-2'
        >
          <span className='text_gradient font-title text-5xl font-bold'>
            95%
          </span>
          <span className='text-lg font-medium leading-5'>
            success <br /> Rate
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className='flex flex-wrap items-center gap-2'
        >
          <span className='text_gradient font-title text-5xl font-bold'>
            50+
          </span>
          <span className='text-lg font-medium leading-5'>
            Health Parameters <br /> Tracked
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className='flex flex-wrap items-center gap-2'
        >
          <span className='text_gradient font-title text-5xl font-bold'>
            24/7
          </span>
          <span className='text-lg font-medium leading-5'>
            Ai-Powered <br /> Monitoring
          </span>
        </motion.div>
      </section>

      <section className='m-auto mt-4 w-full max-w-screen-2xl rounded-[40px] bg-gradient-to-br from-primary-200 to-primary-250 px-6 py-10 md:px-12'>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: '-100px', once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className='font-title text-3xl font-bold text-primary-100 md:text-5xl'
        >
          The Science Behind Live150
        </motion.h2>
        <div className='mt-8 flex flex-col gap-4 md:flex-row'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0.3, y: 0 }}
            viewport={{ margin: '-200px', once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className='flex w-full gap-10'
          >
            <div className='shadowG flex flex-col gap-4 rounded-[30px] bg-primary-50 p-4 pb-10 duration-300 hover:scale-[1.025] hover:shadow-2xl'>
              <div className='relative aspect-video w-full overflow-hidden rounded-3xl bg-primary-150'>
                <Image
                  src={'/science/epi.png'}
                  alt='blood'
                  className='object-contain object-center'
                  fill
                />
              </div>
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
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: '-200px', once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className='flex w-full gap-10'
          >
            <div className='shadowG flex flex-col gap-4 rounded-[30px] bg-primary-50 p-4 pb-10 duration-300 hover:scale-[1.025] hover:shadow-2xl'>
              <div className='relative aspect-video w-full overflow-hidden rounded-3xl bg-primary-150'>
                <Image
                  src={'/science/aipower.png'}
                  alt='blood'
                  className='object-contain object-center'
                  fill
                />
              </div>
              <div>
                <h3 className='text-2xl font-bold'>AI-Powered Analysis</h3>
                <p>
                  Our systems analyze millions of peer-reviewed studies to
                  provide personalized recommendations based on your unique
                  health profile.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: '-200px', once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className='flex w-full gap-10'
          >
            <div className='shadowG flex flex-col gap-4 rounded-[30px] bg-primary-50 p-4 pb-10 duration-300 hover:scale-[1.025] hover:shadow-2xl'>
              <div className='relative aspect-video w-full overflow-hidden rounded-3xl bg-primary-150'>
                <Image
                  src={'/science/adapt.png'}
                  alt='blood'
                  className='object-contain object-center'
                  fill
                />
              </div>
              <div>
                <h3 className='text-2xl font-bold'>Continuous Adaptation</h3>
                <p>
                  Machine learning algorithms continuously refine
                  recommendations based on your progress and response to
                  interventions.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className='m-auto mt-4 w-full max-w-screen-2xl rounded-[40px] bg-primary-50 px-3 py-10 md:px-5'>
        <MockupSlider />
      </section>

      <section className='m-auto mt-4 flex w-full max-w-screen-2xl flex-col gap-4 md:flex-row'>
        <div className='flex w-full flex-col gap-4 rounded-[40px] bg-primary-50 p-6 md:gap-20 md:p-12'>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: '-100px', once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className='text_gradient mt-10 font-title text-3xl font-bold md:text-5xl'
          >
            Our Unique Approach
          </motion.h3>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: '-100px', once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h4 className='text-3xl font-medium'>Multi-Agent AI Model</h4>
            <p className='mt-4 text-xl'>
              Combines expertise from nutritionists, fitness experts, and
              mindfulness coaches for comprehensive care.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: '-100px', once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h4 className='text-3xl font-medium'>Digital Health Twin</h4>
            <p className='mt-4 text-xl'>
              Creates your virtual health profile for hyper-personalized
              recommendations that evolve with you.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: '-100px', once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <h4 className='text-3xl font-medium'>Habit-Building Module</h4>
            <p className='mt-4 text-xl'>
              Guides you in developing sustainable wellness routines through
              personalized, actionable insights.
            </p>
          </motion.div>
        </div>
        <div className='w-full rounded-[40px] bg-gradient-to-br from-primary-200 to-primary-250 p-6 md:p-12'>
          <Reviews />
        </div>
      </section>

      <section className='m-auto mt-4 w-full max-w-screen-2xl rounded-[40px] bg-gradient-to-br from-primary-100 to-primary-150 py-10'>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: '-100px', once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className='text_gradient mt-10 w-full px-6 text-center font-title text-3xl font-bold md:px-12 md:text-5xl'
        >
          Holistic Health Management
        </motion.h3>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: '-100px', once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className='relative aspect-[393/852] w-full md:mt-20 md:aspect-[1402/401]'
        >
          <Image
            src={'/chart.png'}
            alt='blood'
            className='hidden object-contain object-center md:block'
            fill
          />
          <Image
            src={'/chartm.png'}
            alt='blood'
            className='object-contain object-center md:hidden'
            fill
          />
        </motion.div>
      </section>

      <section className='m-auto mt-4 w-full max-w-screen-2xl rounded-[40px] bg-primary-50 px-6 py-10 md:px-12'>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: '-100px', once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className='text_gradient mt-10 font-title text-3xl font-bold md:text-5xl'
        >
          Frequently Asked Questions
        </motion.h3>
        <div className='mt-10 flex flex-col gap-4 md:flex-row md:gap-20'>
          <div className='flex w-full flex-col gap-4 md:gap-20'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: '-100px', once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              <h4 className='text-3xl font-medium'>What is Live150?</h4>
              <p className='mt-4 text-xl'>
                Live150 is a holistic healthcare platform that helps you extend
                your healthspan and lifespan through personalized guidance on
                nutrition, fitness, mindfulness, and sleep.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: '-100px', once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h4 className='text-3xl font-medium'>Who can use Live150?</h4>
              <p className='mt-4 text-xl'>
                Live150 is designed for anyone looking to improve their health
                and wellness, regardless of age or fitness level.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: '-100px', once: true }}
              transition={{ duration: 0.5, delay: 0.45 }}
            >
              <h4 className='text-3xl font-medium'>
                Does Live150 support multiple languages?
              </h4>
              <p className='mt-4 text-xl'>
                Currently, Live150 is available in English, with plans to expand
                to other languages in the near future.
              </p>
            </motion.div>
          </div>
          <div className='flex w-full flex-col gap-4 md:gap-20'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: '-100px', once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h4 className='text-3xl font-medium'>How does Live150 work?</h4>
              <p className='mt-4 text-xl'>
                Live150 uses advanced AI to learn from your habits and provide
                tailored recommendations for your wellness journey.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: '-100px', once: true }}
              transition={{ duration: 0.5, delay: 0.55 }}
            >
              <h4 className='text-3xl font-medium'>
                Is Live150 available globally?
              </h4>
              <p className='mt-4 text-xl'>
                Yes, Live150 is accessible worldwide, offering personalized
                advice and services based on local preferences.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
