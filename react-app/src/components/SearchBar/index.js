import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { searchHikes } from '../../store/hike'
import { NavLink } from 'react-router-dom';

import './SearchBar.css'


function SearchBar() {
    const dispatch = useDispatch()
    const homePage = window.location.href.includes('home')
    // const ulRef = useRef();
    // const inputRef = useRef();
    const [search, setSearch] = useState('')
    const hikeResult = useSelector(state => Object.values(state.hike))
    useEffect(()=>{
        dispatch(searchHikes(search))
    }, [search])
    // Memory leak behavior tentatively fixed. Dependency array originally held dispatch/search
    // search alone appears to fix but pending heroku push

    window.onclick = () => {
        setSearch('')
    }

    return (
        <>
          <form>
            <div>
                <div>
                </div>
                <div>
                    <div>
                        <input
                        className={homePage ? 'homepage-search-window' : 'search-window'}
                        type="text"
                        value={search}
                        placeholder="Find a hike..."
                        onChange={(e) => setSearch(e.target.value)}
                        />{" "}
                    </div>
                    {/* <ul id='results' className='list-group' ref={ulRef}>
                    {results?.map((result, index) => {
                        return (
                            <button
                                type="button"
                                key={index}
                                onClick={(e) => {
                                    inputRef.current.value = result;
                                }}
                                className="list-group-item list-group-item-action"
                            >
                                {result}
                            </button>
                        );
                      })}
                    </ul> */}
                    <div className ={search.length === 0 ? "hide-text" : homePage ? "homepage-dropdown" : "dropdown"}>
                        {hikeResult.map(res => (
                            <div key={res.id} className="nav-search-container">
        
                                <NavLink to={`/hikes/${res?.id}`} exact={true} activeClassName="active" className="search-text">
                                    {res.hike_name}
                                </NavLink>
                                <div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            

          </form>


        </>
    )

}

export default SearchBar;