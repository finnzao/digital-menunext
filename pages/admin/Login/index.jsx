import styles from "./style.module.css";
import Head from 'next/head'
import Image from 'next/image'
import LoginForm from '../../../componets/FormLogin'
import {AuthProvider} from '../../../contexts/AuthContext'
function index() {
    return (
    <>
    <Head>
        <title>Login System</title>
    </Head>
    <AuthProvider>
        <LoginForm/>
    </AuthProvider>
    </>
    )
}

export default index;