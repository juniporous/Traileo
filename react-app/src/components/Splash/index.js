import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './Splash.css'




const Splash = () => {

    
    const user = useSelector((state) => state.session.user);
    
    

        return (
          <>
            <div class="parent"> test
                <div class="div1"></div>
                <div class="div2"> test2</div>
                <div class="div3"> test</div>
            </div>
          </>
        );
    }
    
    export default Splash;