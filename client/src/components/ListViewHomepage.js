import React from "react";
import { Link } from "react-router-dom"

function ListView ({ bathrooms }) {

    // const uniqueN = [... new Set(bathrooms.sort((a, b) => a.neighborhood.localeCompare(b.neighborhood)).map(bathroom => bathroom.neighborhood))]
    
    const unique = (value, index, self) => {
        return self.indexOf(value) === index
    }
    const neighborhoods = bathrooms.sort((a, b) => a.neighborhood.localeCompare(b.neighborhood)).map(bathroom => bathroom.neighborhood)
    const uniqueNeighborhoods = neighborhoods.filter(unique)
    

    const neighborhoodLinks = uniqueNeighborhoods.map(n => {
        return (
            <a className="nounderline nb" href={`/#${n}`} key={n}>
                <h2>{n}</h2>
            </a> 
        )
    })

    const newBathrooms = uniqueNeighborhoods.map(n => {
        const filtered = bathrooms.filter(bathroom => bathroom.neighborhood === n)
        return (
            <div id={n}>
                <h2>{n}</h2>
                {filtered.map(bathroom => {
                    return (
                        <Link className="nounderline" to={`bathrooms/${bathroom.id}`} key={bathroom.id}>
                            
                            <div className="LVOneBathroom">
                                <p className="LVLocation">{bathroom.location}</p>
                                <p id="public">{bathroom.public === true ? "Public" : ""}</p>
                                <p className="LVDescription">{bathroom.description}</p>
                                <p></p>
                            </div>
                        </Link>
                    )
                })}
            </div>
        )
    })

    

    

    return (
        <div>
            <div id="neighborhoodLinks">{neighborhoodLinks}</div>
            <div>{newBathrooms}</div>
        </div>
    )
}

export default ListView