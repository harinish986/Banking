import React from 'react';
import { card } from '../assets';
import styles, {layout} from '../style';
import Button from './Button';

const CardDeal = () => (

    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Find a better card deal <br className='sm:block hidden' /> in few easy steps.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Discovering the perfect credit card that suits your needs is a seamless process with our expert guidance. Our team will assist you in evaluating your spending habits and financial objectives to identify the ideal match. We'll provide you with a comprehensive comparison of credit card options, highlighting the impressive rewards, competitive interest rates, and minimal fees our cards offer. Take advantage of our online resources and comparison tools to make an informed decision, and let us help you secure a credit card that maximizes your financial potential.
        </p>
        <Button styles='mt-10' />
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt='card' className='w-[100%] h-[100%]' />
      </div>
    </section>

)


export default CardDeal