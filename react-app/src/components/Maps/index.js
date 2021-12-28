import React from "react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api'
// import { getKey } from "../../store/key";
import './map.css'

const AllHikesMap = ({hikes, hike, apiKey}) => {
    
    const styles = require('./mapStyles.json')
    const [selectedCenter, setSelectedCenter] = useState(null);

    
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: apiKey
    }) 
    //process.env.REACT_APP_MAPS_API
    //important, heroku is unable to read config vars for
    // google maps api key. process.env.VARIABLE works for local
    // for heroku, api key is passed up through back end
    
   

    const center={lat: parseFloat(hike.lat), lng: parseFloat(hike.long)}

    const containerStyle={height: '35vw', width: '35vw'}
    useEffect(() => {
        const listener = e => {
           if (e.key === "Escape") {
              setSelectedCenter(null);
           }
        };
        window.addEventListener("keydown", listener);
        return () => {
           window.removeEventListener("keydown", listener);
        };
     }, []);

    return (
        <>
            <div className='map-container'>
                {/* Important, !isNan(center.lat) makes map only load when props data is available to map.
                User will not see disruption without this logic but it stops a console error.   */}
                {isLoaded && !isNaN(center.lat) && (
                <GoogleMap
                options={{
                    styles: styles,
                    mapTypeId:'terrain'
                }}
                zoom={13}
                center={center}
                mapContainerStyle={containerStyle}
            
                >
                    {hikes.map((center, idx) => (
                        <Marker
                            key={idx}
                            icon={{
                                url: 'https://res.cloudinary.com/dfy0z2yzj/image/upload/v1640476624/Traileo/map_icon_y5nix8.png'
                            }}
                            position={{
                            lat: center.lat,
                            lng: center.long
                            }}
                        
                            
                            onClick={() => {
                                setSelectedCenter(center);
                             }}
                        />
                    ))}

                    {selectedCenter && (
                    <InfoWindow
                        onCloseClick={() => {
                            setSelectedCenter(null);
                        }}
                        position={{
                            lat: selectedCenter.lat,
                            lng: selectedCenter.long
                        }}
                    >
                        <div>
                            <NavLink className='marker-navlink' to={`/hikes/${selectedCenter.id}`}>
                                {selectedCenter.hike_name}
                            </NavLink>
                        </div>
                    </InfoWindow>
                    )}

                </GoogleMap>
                )}
            </div>
        </>
    )
}

export default AllHikesMap