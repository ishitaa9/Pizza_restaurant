import styles from "../styles/OrderDetail.module.css";
import { useState } from "react";

const OrderDetail = ({ total, createOrder }) => {
    const [customer, setCustomer] = useState("");
    const [address, setAddress] = useState("");

    const handleClick = () => {
        createOrder({customer, address, total, method:0 });
    };


    return (
        <div className={styles.container}>
        <div className={styles.wrapper}>
            <h1 className={styles.title}> You will pay $12 after delivery.</h1>
            <div className={styles.item}>
                <label className={styles.label}>Name Surname</label>
                <input 
                className={styles.input}
                placeholder="Alex Doe" 
                type="text"  
                onChange={(e) => setCustomer(e.target.value)} 
                />
            </div>
            <div className={styles.item}>
                <label className={styles.label}>Phone Number</label>
                <input 
                className={styles.input}
                placeholder="+49 162 8826033" 
                type="text" 
                />
            </div>
            <div className={styles.item}>
                <label className={styles.label}>Adress</label>
                <input 
                className={styles.textarea}
                placeholder="Bahnhofstrasse 104" 
                type="text" 
                onChange={(e) => setAddress(e.target.value)} 
                />
            </div>
            <button className={styles.button} onClick={handleClick()}>
                Order
            </button>
        </div>


        </div>
    )
}

export default OrderDetail;