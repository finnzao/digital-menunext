import styles from "./style.module.css";



const buttonsCategories = ({category,setCategorySelect}) => {
      
    let categorySelect=(e)=>{
    setCategorySelect(e.target.id)
    }

    return (
           <button onClick={categorySelect} id={category} className={styles.button} type="button">{category}</button>
    )
}

export default buttonsCategories;