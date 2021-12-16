import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getHikes, searchHikes } from '../../store/hike'


function SearchBar() {
    const dispatch = useDispatch()
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
                <input
                type="text"
                value={search}
                placeholder="Find a hike..."
                onChange={(e) => setSearch(e.target.value)}
                />{" "}
            </div>
            <div>
                {hikeResult.map(res => (
                    <div>{res.hike_name}</div>
                ))}
            </div>

          </form>


        </>
    )

}

export default SearchBar;