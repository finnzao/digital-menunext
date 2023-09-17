
import Highlight from "./HighlightLayout";
import styles from './style.module.css'
function index({data}) {
    return (
        <div className={styles.container}>
            <Highlight data={data}/>
        </div>
    )
}

export default index