import Header from "./Header"
import Login from './Login';
import styles from "./style.module.css"

function FormLogin() {
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <Header/>
                <Login/>
            </div>
        </div>
    )
}

export default FormLogin;

