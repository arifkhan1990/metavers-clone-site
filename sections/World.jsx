'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';
import { TypingText, TitleText } from '../components';
import { newFeatures } from '@/constants';
const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title='| People on the World' textStyles='text-center' />
      <TitleText
        title={
          <>
            Track friends around you and invite them to play together in the
            same world
          </>
        }
        textStyles='text-center'
      />
      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className='relative mt-[68px] flex w-full h-[550px]'
      >
        <img src='/map.png' alt='map' className='w-full h-full object-cover' />
        <div className='absolute bottom-20 right-20 w-[70px] p-[6px] rounded-full bg-[#5d6680]'>
          <img src='/people-01.png' alt='people-01' className='w-full h-full' />
        </div>
        <div className='absolute top-10 left-20 w-[70px] p-[6px] rounded-full bg-[#5d6680]'>
          <img src='/people-02.png' alt='people-02' className='w-full h-full' />
        </div>
        <div className='absolute top-1/2 left-[45%] w-[70px] p-[6px] rounded-full bg-[#5d6680]'>
          <img src='/people-03.png' alt='people-03' className='w-full h-full' />
        </div>
        <div className='absolute top-[45%] left-[20%] w-[130px] h-[90px] p-[6px] drop-shadow-2xl filter-none bg-transparent'>
          <img
            src='/planet-01.png'
            alt='planet-01'
            className='w-full h-full rounded-[15px] bg-gradient-to-l md:bg-gradient-to-r from-violet-500 to-fuchsia-500'
          />
          <p className='font-normal text-[12px] leading-[20px] text-white uppercase absolute bottom-0 p-2 justify-start w-full flex-col'>
            Rio
            <br />
            Brazil
          </p>
        </div>
        <div className='absolute top-[25%] right-[25%] w-[130px] h-[90px] p-[6px] drop-shadow-2xl filter-none bg-transparent'>
          <img
            src='/planet-06.png'
            alt='people-06'
            className='w-full h-full rounded-[15px] bg-gradient-to-l md:bg-gradient-to-r from-violet-500 to-fuchsia-500'
          />
          <p className='font-normal text-[12px] leading-[20px] text-white uppercase absolute bottom-0 p-2 justify-start w-full flex-col'>
            Dhaka
            <br />
            Bangladesh
          </p>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
