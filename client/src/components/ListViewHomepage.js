import React from "react";
import { Link } from "react-router-dom"
import useSound from "use-sound";
import doorOpening from "../audio/door-opening.mp3"

function ListView ({ bathrooms }) {

    const [playDoor] = useSound(doorOpening)
    // const uniqueN = [... new Set(bathrooms.sort((a, b) => a.neighborhood.localeCompare(b.neighborhood)).map(bathroom => bathroom.neighborhood))]
    
    const unique = (value, index, self) => {
        return self.indexOf(value) === index
    }
    const neighborhoods = bathrooms.sort((a, b) => a.neighborhood.localeCompare(b.neighborhood)).map(bathroom => bathroom.neighborhood)
    const uniqueNeighborhoods = neighborhoods.filter(unique)
    

    const neighborhoodLinks = uniqueNeighborhoods.map(n => {
        return (
            <a className="nounderline nb" href={`/#${n}`} key={n}>
                <h3 className="NL">{n}</h3>
            </a> 
        )
    })

    const newBathrooms = uniqueNeighborhoods.map(n => {
        const filtered = bathrooms.filter(bathroom => bathroom.neighborhood === n)
        
        return (
            <div id={n}>
                <h2 className="LVNTitle">{n}</h2>
                {filtered.map(bathroom => {
                    return (
                        <Link className="nounderline" onClick={playDoor} to={`bathrooms/${bathroom.id}`} key={bathroom.id}>
                            
                            <div className="LVOneBathroom">
                                <p className="LVLocation">{bathroom.location}</p>
                                <p className="LVPublic">{bathroom.public === true ? "Public" : ""}</p>
                                <p className="LVScore">{bathroom.b_average_score}</p>
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