import styles from "./style.module.css";
import Head from 'next/head';
import LoginForm from '../../componets/FormLogin';
import { Suspense } from "react";
function index() {
    return (
    <>
    <Head>
        <title>Login System</title>
    </Head>
        <Suspense fallback={<div>Loadings...</div>}>
        <LoginForm/>

        </Suspense>

    </>
    )
}

export default index;

