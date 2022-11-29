import styles from '../app.module.css'


const SearchResult = ({keyword,data}) => {
  return (
      <div>
          {keyword.length? <h2>Search Results are</h2> : <h2>Please Enter Search Keyword</h2>}
          {keyword&& data.length<1 && <h2>Data Not Found</h2>}
          <div>
              {
                  data.map((x, index) => (
                      <div key={index}>
                          <a href={`https://www.${x?.Result?.url}`} target="_blank"  rel="noreferrer">
                              <img  className={styles.adsimg} src={x.imageUrl} alt="ads img" />
                          </a>
                          <h1>{x.Result.name}</h1>
                          <h2>{x.headLine}</h2>
                          <p>{x.primaryText}</p>
                      </div>
                  ))
              }

          </div>
      </div>
  )
}

export default SearchResult