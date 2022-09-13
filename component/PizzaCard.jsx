import React from 'react';
import styles from "../styles/PizzaCard.module.css";
import Link from 'next/link';
import Image from 'next/image';

const PizzaCard = ({pizza}) => {
  return (
    <div className={styles.container}>
      <Link href={`/product/${pizza._id}`} passHref>
        <Image src={pizza.img} alt="" width="500" height="500" />
      </Link>
        <h1 className={styles.title}>{pizza.title}</h1>
        <span className={styles.price}>${pizza.prices[0]}</span>
        <p className={styles.desc}>
          {pizza.desc}
        {/* Made using the freshest pizza dough, 
        100% authentic mozzarella cheese, and secret herbs. */}
        </p>
    </div>
  );
};

export default PizzaCard;