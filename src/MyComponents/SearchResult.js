import { Link } from 'react-router-dom';

export default function SearchResult({ results, isSearchBoxVisible, setSearchBoxVisible }) {

  const hideSearchBox = () => {
    setSearchBoxVisible(false);
  };

  return (
    <div className={`searchResultBox ${results.length === 0 || !isSearchBoxVisible  ? 'hidden' : ''}`}>
      <div className='SearchResultTitle'>
        {results.map(result => (
          <div key={result.id} >
            <Link to={`/products/${result.id}`} onClick={hideSearchBox} >
              {result.title.substring(0, 35)}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
