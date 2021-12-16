import { useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getHikes, searchHikes } from '../../store/hike'
import { NavLink } from 'react-router-dom';

import './SearchBar.css'


function SearchBar() {
    const dispatch = useDispatch()
    const ulRef = useRef();
    const inputRef = useRef();
    const [search, setSearch] = useState('')
    const hikeResult = useSelector(state => Object.values(state.hike))
    useEffect(()=>{
        dispatch(searchHikes(search))
    }, [dispatch, search])

    return (
        <>
          <form>
            <div>
                <div>
                  <div>Search</div>
                </div>
                <div>
                    <input
                    type="text"
                    value={search}
                    placeholder="Find a hike..."
                    onChange={(e) => setSearch(e.target.value)}
                    />{" "}
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
                    <div className ={search.length == 0 ? "hide-text" : "dropdown"}>
                        {hikeResult.map(res => (
                            <div>
                            <NavLink to={`/hikes/${res?.id}`} exact={true} activeClassName="active">
                                {res.hike_name}
                            </NavLink>
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