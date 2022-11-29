import React, { useEffect, useState } from 'react'
import styles from './app.module.css'
import SearchResult from './Component/SearchResult'

const App = () => {

    const [search, _search] = useState("")
    const [searchData, _searchData] = useState([])

    const handleChange = e => {
        _search(e.target.value)
    }


    useEffect(() => {
        if (search){
            fetch(`http://localhost:4000/search?keyword=${search}`)
            .then(res => res.json())
            .then(res => {
                _searchData(res)
                })
                .catch(err => console.log(err.message))
            }
    }, [search])

    return (
        <div>
            <h1 className={styles.header}>Search Ads</h1>
            <div className={styles.searchContainer}>
                <div className={styles.textboxContainer}>
                    <img src="https://img.icons8.com/emoji/48/null/magnifying-glass-tilted-left-emoji.png" alt="search logo" height='31px' />
                    <input type="text" placeholder='Search Keyword' className={styles.textbox} onChange={handleChange} />
                </div>
            </div>
            <SearchResult keyword={search} data={search.length?searchData:[]}/>
        </div>
    )
}

export default App