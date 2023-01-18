import { useEffect, useState } from 'react'
import { Wrapper } from '@googlemaps/react-wrapper'
import Marker from './components/Marker'
import BathroomNearMeMap from './components/BathroomNearMeMap'
import BathroomsNearMeMarkers from './components/BathroomsNearMeMarkers'
import { Link } from "react-router-dom"

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

    // const getLocation = async() => {
    //     const response = await fetch('https://ipapi.co/json')
    //     const data = await response.json()
    //     setCurrLocation({ lat: data.latitude, lng: data.longitude })
    // }


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

    function renderList() {
        if (bathrooms.length > 0) {
            return (
                bathrooms.map(bathroom => {
                    return (
                        <Link className="nounderline " to={`/bathrooms/${bathroom.id}`} key={bathroom.id}>
                            <div className="LVOneBathroom BB">
                                <p className="LVLocation">{bathroom.location}</p>
                                <p className="LVPublic">{bathroom.public === true ? "Public" : ""}</p>
                                <p id="neighborhood">{bathroom.neighborhood}</p>
                                <p className="LVDescription">{bathroom.description}</p>
                            </div>
                        </Link>
                    )
                })
            )
        }
    }

    return (
        <>
            <h1 id="BBTitle">Bathrooms near me</h1>
            {renderMap()}
            {renderList()}
        </>
    )
}

export default BathroomsNearMe