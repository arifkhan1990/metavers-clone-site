'use client';
import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, staggerContainer, planetVariants } from '../utils/motion';
import { InsightCard, TypingText, TitleText } from '../components';
import { insights } from '@/constants';
const Insights = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title='| Insights' textStyles='text-center' />
      <TitleText title='Insights About Metaversus' textStyles='text-center' />
      <div className='mt-[50px] flex flex-col gap-[30px]'>
        {insights.map((item, index) => (
          <InsightCard key={`insight-${index}`} {...item} index={index + 1} />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Insights;
