import React from "react";
import AllHikesMap from "../Maps";
import './PageNotFound.css'
import SearchBar from "../SearchBar";


function PageNotFound () {

    return  (
        <div className='container'>
            <div className='text-container'>
              <p className='text'>  
              Page Not Found
              </p>
              <div className='search'>
               <SearchBar/>
              </div>
            </div>
            <div>
                
            </div>

        </div>
    )
}

export default PageNotFound;