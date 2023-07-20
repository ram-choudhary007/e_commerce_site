import React, { useRef, useState } from 'react'
import {FaCartPlus} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import SearchResult from './SearchResult';
import LogOut from './LogOut'

export default function Header({ cartCount, isLoggedIn, setIsLoggedIn }) {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);

  const fetchData = (value) => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((json) => {
        const filteredResults = json.filter((product) =>
          value && product && product.title && product.title.toLowerCase().includes(value.toLowerCase())
        );
        setResults(filteredResults);
      })
      .catch((error) => {
        console.error('Error fetching product data:', error);
      });
  };
  
  const handleLogout = () => {
    setIsLoggedIn(false);
  }

  const navbarRef = useRef();

  // Function to close the menu
  const closeMenu = () => {
    if (navbarRef.current) {
      navbarRef.current.classList.remove('show');
    }
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  const [isSearchBoxVisible, setSearchBoxVisible] = useState(true);

  const showSearchBox = () => {
    setSearchBoxVisible(true);
  };
  
 

  return (
    <div className='header'>

   <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">B4U</Link>
        {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" ref={navbarRef} id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" onClick={closeMenu} aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" onClick={closeMenu} aria-current="page" to="/about">About</Link>
            </li>
            
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                category
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link onClick={closeMenu} className="dropdown-item" to="/Electronics">Electronics</Link></li>
                <li><Link onClick={closeMenu} className="dropdown-item" to="/Clothes">Clothes</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="/">Something else here</a></li>
              </ul>
            </li>
          </ul>

          <div className='search-box'>
          <form className="d-flex">
            <input className="form-control me-2" type="search" onClick={showSearchBox} placeholder="Search" value={input} onChange={(e) => handleChange(e.target.value)} aria-label="Search" />
          <SearchResult results={results} isSearchBoxVisible={isSearchBoxVisible} setSearchBoxVisible={setSearchBoxVisible}/>
            {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
          </form>
          </div>

          <div className='LogIn-SignUp-box'  onClick={closeMenu}>
          {isLoggedIn ? (
            <LogOut onClick={handleLogout}/> 
          ) : (
            <Link to='/login'>LogIn & SignUp</Link>
          )}
        </div>

          <div>
          <Link to="/cartList" onClick={closeMenu} className='HeaderCartImg'><FaCartPlus fontSize="25px" />
                  <sup className='cartCount'>{cartCount}</sup>
          </Link>
          </div>
        </div>
      </div>
    </nav>
    </div>
  )
}
