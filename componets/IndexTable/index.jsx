import {useState,useEffect} from 'react';
import styles from "./style.module.css";
import List from "./List/index";
import SearchBar from "../../componets/Layout/SearchBar";
function IndexTable({data}) {
    
    const [searchResults,setSearchResults]=useState(data)
    useEffect(() => {
        setSearchResults(data)
    },[data])//Watch changes of data
    return  (
        <div className={styles.container}>
            <h1 className={styles.title}> DashBoard</h1>
            <SearchBar posts={data} setSearchResults={setSearchResults}/>
            <div className={styles.table} >
                <List prodList={searchResults} />
            </div>
        </div>

    )
}

export default IndexTable;