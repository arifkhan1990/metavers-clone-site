'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className='gradient-02 z-0' />
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText
        title='| About Metaversus'
        textStyles='text-center'
        className=''
      />
      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className='mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white'
      >
        <span className='font-extrabold text-white'>
          The metaverse economy{' '}
        </span>
        could be an $8-13 trillion total addressable market by 2030 with a wide
        array of use cases across sectors,
        <span className='font-extrabold text-white'> according </span>
        to a 2020 report by Citibank. Most of the applications of metaverse
        <span className='font-extrabold text-white'> experiences </span>
        have been largely oriented around leisure, such as
        <span className='font-extrabold text-white'> virtual </span>
        parties or concerts, but several leading academic institutions have been
        <span className='font-extrabold text-white'> experimenting </span>
        too, including Arizona State University’s
        <span className='font-extrabold text-white'> Dreamscape </span>,
        <span className='font-extrabold text-white'> Immersive </span>
        and University of Nicosia’s
        <span className='font-extrabold text-white'>
          {' '}
          Open Metaverse Initiative
        </span>
      </motion.p>
      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src='/arrow-down.svg'
        alt='arrow down'
        className='w-[18px] h-[28px] object-contain mt-[28px]'
      />
    </motion.div>
  </section>
);

export default About;
