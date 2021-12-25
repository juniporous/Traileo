import React from "react";
import { useEffect } from "react";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'


const AllHikesMap = ({hikes}) => {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_GOOGLE_MAPS_API_KEY
    })

    const center={lat: 38.905065, lng: -120.098954}
    const mapContainerStyle={height: '400px', width: '400px'}
    return (
        <>
            <div>
                {isLoaded && (
                <GoogleMap
                zoom={10}
                center={center}
                mapContainerStyle={mapContainerStyle}
                > 
                </GoogleMap>
                )}
            </div>
        </>
    )
}

export default AllHikesMap