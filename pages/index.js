import Head from 'next/head';
import Image from 'next/image';
import  Features  from '../component/Features';
import PizzaList from '../component/PizzaList';
import styles from '../styles/Home.module.css';
import axios from "axios";


export default function Home({pizzaList}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant</title>
        <meta name="description" content="Best pizza in town!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Features />
      <PizzaList pizzaList={pizzaList} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props:{
      pizzaList:res.data,
    }
  }
}