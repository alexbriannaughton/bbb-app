import { useEffect, useState } from 'react'
import { Wrapper } from '@googlemaps/react-wrapper'

import BathroomNearMeMap from './components/BathroomNearMeMap'
import BathroomsNearMeMarkers from './components/BathroomsNearMeMarkers'

function BathroomsNearMe({ APIKey }) {

    const [currLocation, setCurrLocation] = useState({})
    const [bathrooms, setBathrooms] = useState([])


    useEffect(() => {
        getLocationJs()
    }, [])

    const getLocationJs = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position.coords)
            const { latitude, longitude } = position.coords;
            setCurrLocation({ lat: latitude, lng: longitude })
        })
    }
// console.log(currLocation.lat)
//     useEffect(() => {
//         fetch(`/bathrooms-near-me/${currLocation.lat}/${currLocation.lng}`)
//         .then(r => r.json())
//         .then(b => setBathrooms(b))
//     },[])

    function renderMap() {
        if (currLocation) {
            return (
                <Wrapper
                    classname="Wrapper"
                    apiKey={APIKey}
                >
                    <BathroomNearMeMap
                        center={currLocation}
                        zoom={14}
                            >
                            <BathroomsNearMeMarkers
                                position={currLocation}
                                // bathroom={bathroom}
                            />
                    </BathroomNearMeMap>
                </Wrapper >
            )
        }
    }

    return (
        <>
            {renderMap()}
        </>
    )
}

export default BathroomsNearMe