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
                <div class="div2">
                  <div>Find a Trail</div>
                  <div>Kiss the Sky</div>
                  <div>Have Fun</div>
                </div>
                <div class="div3"> test</div>
            </div>
            <div>
            <a href="https://github.com/juniporous">
              <img
                className="github_icon"
                alt="github_icon"
                src="https://cdn.discordapp.com/attachments/907133739128217621/907463508101316659/github.png"
              />
            </a>
          </div>
          <div className='linkedbox'>
            <a href="https://www.linkedin.com/in/anthony-fahden-a9251260/">
              <img
                className="linkedin_icon"
                alt="linkedin_icon"
                src="https://media.discordapp.net/attachments/907133739128217621/907465323828084746/linkedin.png"
              />
            </a>
            </div>
          </>
        );
    }
    
    export default Splash;