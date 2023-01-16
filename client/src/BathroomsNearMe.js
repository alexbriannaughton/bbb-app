import { useEffect, useState } from 'react'
import { Wrapper } from '@googlemaps/react-wrapper'
import Marker from './components/Marker'
import BathroomNearMeMap from './components/BathroomNearMeMap'
import BathroomsNearMeMarkers from './components/BathroomsNearMeMarkers'

function BathroomsNearMe({ APIKey }) {

    const [currLocation, setCurrLocation] = useState({})
    const [bathrooms, setBathrooms] = useState([])

    const allBathrooms = bathrooms.map(bathroom => {
        let position = {
            lat: bathroom.lat,
            lng: bathroom.lng
        }
        return (
            <Marker key={bathroom.id} position={position} bathroom={bathroom} bathrooms={bathrooms} />
        )
    })

console.log(currLocation)

    useEffect(() => {
        getLocationJs()
    }, [])

    const getLocationJs = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            setCurrLocation({ lat: latitude, lng: longitude })
        })
    }

    useEffect(() => {
        fetch(`/bathrooms-near-me/${currLocation.lat}/${currLocation.lng}`)
            .then(r => r.json())
            .then(b => setBathrooms(b))
    }, [])

    function renderMap() {
        if (Object.values(currLocation).length !== 0) {
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
                        {allBathrooms}
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