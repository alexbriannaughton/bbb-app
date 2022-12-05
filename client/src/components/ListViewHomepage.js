import React from "react";
import { Link } from "react-router-dom"

function ListView ({ bathrooms }) {

    const allBathrooms = bathrooms.map(bathroom => {
        return (
            // clicking on the link doesn't work yet,
            // need to work on the routing
            <Link className="nounderline" to={`bathrooms/${bathroom.id}`} key={bathroom.id}>
                <div className="LVOneBathroom">
                    <p className="LVLocation">{bathroom.location}</p>
                    <p className="LVDescription">{bathroom.description}</p>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
            </Link>
        )
    })

    return (
        <div>
            <h1>list view</h1>
            {allBathrooms}
        </div>
    )
}

export default ListView