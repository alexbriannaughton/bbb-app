import {Link} from "react-router-dom"

function BestBathrooms({bathrooms}) {
    // this filter doesn't work correctly - right now it's getting the shortest descriptions
    // but i think we need a custom serializer to return more JSON related to bathrooms
    // so we can do like bathroom.reviews.~average rating~
    // maybe a custom model to get the average from the three scores in each review
    const bestBathrooms = bathrooms.filter(bathroom => bathroom.b_average_score >= 4).map(bathroom => {
        return (
            <Link className="nounderline" to={`/bathrooms/${bathroom.id}`} key={bathroom.id}>
                <div className="LVOneBathroom">
                    <p className="LVLocation">{bathroom.location}</p>
                    <p id="public">{bathroom.public === true ? "Public" : ""}</p>
                    <p id="neighborhood">{bathroom.neighborhood}</p>
                    <p className="LVDescription">{bathroom.description}</p>
                    <p></p>
                </div>
            </Link>
        )
    })

    return (
        <div>
            <h1>best bathrooms</h1>
            {bestBathrooms}
        </div>
    )
}

export default BestBathrooms