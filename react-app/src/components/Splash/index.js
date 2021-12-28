import React from 'react';
// import { useSelector } from 'react-redux';
// import { NavLink } from 'react-router-dom';
import SearchBar from '../SearchBar';
import './Splash.css'




const Splash = () => {

        return (
          <>
            <div className="splash-parent">
                <div className="splash-image-wrapper">
                  <div className="splash-div1">
                    <SearchBar/>
                  </div>
                </div>
                
                <div className="splash-div2">  
                    <div className='description'>
                      Welcome to Traileo, a loose clone of AllTrails
                    </div>
                </div>
                <div className="splash-div3">
                    <div className='card-container'>
                      <div className='desc-card'>
                        <p>
                          Find trails via search or map.
                        </p>
                      </div>
                      <div className='divider'></div>
                      <div className='desc-card'>
                        <p>
                          Post reviews.
                        </p>
                      </div>
                      <div className='divider'></div>
                      <div className='desc-card'>
                        <p>
                          Upload photos of your trip.
                        </p>
                      </div>
                  </div>
                </div>
                <div className="splash-div4"></div>
                <div className="splash-div5">
                <div className='link-container'>
                  <div>
                    <a href="https://github.com/juniporous">
                      <img
                        className="github_icon"
                        alt="github_icon"
                        src="https://cdn.discordapp.com/attachments/907133739128217621/907463508101316659/github.png"
                      />
                    </a>
                  </div>
                
                  <div>
                    <a href="https://www.linkedin.com/in/anthony-fahden-a9251260/">
                      <img
                        className="linkedin_icon"
                        alt="linkedin_icon"
                        src="https://media.discordapp.net/attachments/907133739128217621/907465323828084746/linkedin.png"
                      />
                    </a>
                    </div>
                  </div>
                </div>
            </div>
           
          </>
        );
    }
    
    export default Splash;