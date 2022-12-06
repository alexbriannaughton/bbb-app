import React, { useState } from "react";
import { Link } from "react-router-dom"
import AllBathroomsMap from "./AllBathroomsMap";
import { Wrapper } from '@googlemaps/react-wrapper';
import Marker from "../Marker";

function MapView ({ bathrooms, APIKey }) {

    const seattle = {lat: 47.6062, lng: -122.3321}

    // const latlongify = 

    const allBathrooms = bathrooms.map(bathroom => {
        let position = {
            lat: bathroom.lat,
            lng: bathroom.lng
        }

        // // fetch(`https://maps.googleapis.com/maps /api/geocode/json?address=${bathroom.location}&key=${`)
        //         .then(res => res.json())
        //         .then(res => {
        //             console.log(res)
        //             coordinates = {
        //                 lat: res.results[0].geometry.location.lat,
        //                 lng: res.results[0].geometry.location.lng
        //             }
        //         })
        return (
                <Marker key={bathroom.id} position={position} bathroom={bathroom}/>
        )
    })

    return (
        <div>
            <h1>map view</h1>
            <Wrapper classname="Wrapper" apiKey={APIKey} >
                <AllBathroomsMap center={seattle} zoom={11}>
                    {allBathrooms}
                </AllBathroomsMap>
            </Wrapper>
            
        </div>
    )
}

export default MapView