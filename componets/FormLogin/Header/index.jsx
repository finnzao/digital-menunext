import Image from 'next/image'
import Icon from "../../../assents/icon.png";
import styles from "./style.module.css"

function Header() {
    return (
        <div className="mb-10">
            <div className={styles.container}>
                <Image 
                    alt=""
                    src={Icon}/>
                        <h1>Dashboard</h1>
            </div>

        </div>

    )
}

export default Header;