import React from 'react';
import styles from "../styles/Footer.module.css";
import Image from 'next/image';

export const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
      <Image src="/img/bg.png" layout="fill" objectFit="cover" alt=""/>
      </div>
      <div className={styles.item}>
      <div className={styles.card}>
        <h2 className={styles.motto}>
          ALL YOU NEED IS PIZZA!!
        </h2>
      </div>
      <div className={styles.card}>
        <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
        <p className={styles.text}>1653 R. Don Road 
          <br /> New Delhi, 110062
          <br /> +91 9910615987
        </p>
        <p className={styles.text}>2387 K. Laquie Rd 
          <br /> New Delhi, 110062
          <br /> +91 9910615987
        </p>
        <p className={styles.text}>1614 E. Erwin St
          <br /> New Delhi, 110062
          <br /> +91 9910615987
        </p>
      </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY - FRIDAY 
            <br /> 9:00 - 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY 
            <br /> 12:00 - 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer