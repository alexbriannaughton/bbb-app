import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'

function ShowBathroomPage() {

    const params = useParams()

    const [bathroom, setBathroom] = useState({})

    useEffect(() => {
        fetch(`/bathrooms/${params.bathroomid}`)
            .then((res) => res.json())
            .then((data) => setBathroom(data));
    }, []);

    function getToilets(rating) {
        if (rating === 1) {
            return "🚽"
        }
        else if (rating === 2) {
            return "🚽🚽"
        }
        else if (rating === 3) {
            return "🚽🚽🚽"
        }
        else if (rating === 4) {
            return "🚽🚽🚽🚽"
        }
        else if (rating === 5) {
            return "🚽🚽🚽🚽🚽"
        }
    }

    return (
        <div>
            <p>{bathroom.location}</p>
            <p>{bathroom.description}</p>
            <p>{bathroom.public ? "Public bathroom" : "Private bathroom"}</p>
            <h3>Reviews:</h3>
            {bathroom.reviews && bathroom.reviews.map((review) => (
                <>
                    <p>{review.date}</p>
                    <p>{review.description}</p>
                    <p>Cleanliness: <br/>{review.cleanliness}</p>
                    <p>Cleanliness Rating: {getToilets(review.cleanliness_rating)}</p>
                    <p>Function: <br/>{review.function}</p>
                    <p>Function Rating: {getToilets(review.function_rating)}</p>
                    <p>Style: <br/>{review.style}</p>
                    <p>Style Rating: {getToilets(review.style_rating)}</p>
                </>
            ))}


        </div>
    )
}

export default ShowBathroomPage