import React from 'react';
import styles from "./style.module.css";
import { useState } from 'react';
import { RiMenuAddLine } from "react-icons/Ri";
import getUser from '@/lib/getUser';

function Dashboard() {
    const [toogleMenu, setToogleMenu] = useState(false);
    console.log(getUser().then(e => console.log(e)))

    function sendForm() {
        console.log('abc')
    }
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <div> <span onClick={() => setToogleMenu(!toogleMenu)}><RiMenuAddLine /></span></div>
                {
                    toogleMenu && (
                        <div className={styles.board}>
                            <input className={styles.input} type="text" placeholder='Nome' />
                            <input className={styles.input} type="text" placeholder='Descrição' />
                            <input className={styles.input} type="numer" placeholder='Preço' />
                            <button onClick={() => sendForm()} className={styles.buttonForm}>Confirmar</button>
                        </div>
                    )
                }

            </div>
            <div className={styles.table} >
                <h1>a</h1>
            </div>
        </div>
    )
}

export default Dashboard;