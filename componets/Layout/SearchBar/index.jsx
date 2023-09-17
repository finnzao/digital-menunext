import styles from "./style.module.css";
import { BiSearchAlt } from "react-icons/bi";
const SearchBar= ({posts,setSearchResults})=>{
		const handleSubmit=(e)=>{
			e.preventDefault()
			if(!e.target.value) return setSearchResults(posts)

			const resultsArray=posts.filter(post =>post.title.includes(e.target.value)) ||
			posts.body.includes(e.target.value)
			setSearchResults(resultsArray)
		}
		const handleSearchChange =(e)=>{
			if(!e.target.value) return setSearchResults(posts)

			const resultsArray=posts.filter(post =>post.title.includes(e.target.value)) ||
			posts.body.includes(e.target.value)
			setSearchResults(resultsArray)
				console.log(resultsArray)
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