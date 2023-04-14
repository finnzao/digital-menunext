import styles from "./style.module.css";
import { BiSearchAlt } from "react-icons/bi";
const SearchBar= ({posts,setSearchResults})=>{

		
		const handleSubmit=(e)=>e.preventDefault()
		const handleSearchChange =(e)=>{
			if(!e.target.value) return setSearchResults(posts)

			const resultsArray=posts.filter(post =>post.title.includes(e.target.value)) ||
			post.body.includes(e.target.value)
			setSearchResults(resultsArray)
		};

		return(

			<header className={styles.box}>
			<form className={styles.input} onSubmit={handleSubmit}>
				<input 
				className={styles.seachInput}
				type="text"
				id="seacrh"
				onChange={handleSearchChange}
				placeholder="Pesquisar..."
				/>
	
				<span className={styles.seachButton}><BiSearchAlt size={20}/></span>
			</form>
			</header>

	)

}

export default SearchBar;