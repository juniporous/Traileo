import React from "react";
import { useEffect, useState } from "react";
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api'


const AllHikesMap = ({hikes}) => {
    const [selectedCenter, setSelectedCenter] = useState(null);
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_MAPS_API
    })

    const center={lat: 38.905065, lng: -120.098954}
    const containerStyle={height: '400px', width: '400px'}
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
            <div>
                {isLoaded && (
                <GoogleMap
                zoom={10}
                center={center}
                mapContainerStyle={containerStyle}
                >
                    {hikes.map((center, idx) => (
                        <Marker
                            key={idx}
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
                        <div>{selectedCenter.hike_name}</div>
                    </InfoWindow>
                    )}

                </GoogleMap>
                )}
            </div>
        </>
    )
}

export default AllHikesMap