import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import ReviewForm from "./components/ReviewForm";
import { Wrapper } from '@googlemaps/react-wrapper';
import OneBathroomMap from "./OneBathroomMap";
import Marker from "./Marker";

function ShowBathroomPage({ user }) {

    const params = useParams()

    const APIKey = "AIzaSyDieB4V0IYhdHBcPm1JNClD_RVu7w1tac0"

    const [bathroom, setBathroom] = useState({})
    const [showReviewForm, setShowReviewForm] = useState(false)
    const [location, setLocation] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        fetch(`/bathrooms/${params.bathroomid}`)
            .then((res) => res.json())
            .then(data => {
                setBathroom(data)
                // for the map!
                // doesn't call the API until bathroom is set
                fetch(`https://maps.googleapis.com/maps/api/geocode/json?address="309 E Harrison St, Seattle, Seattle"&key=${APIKey}`)
                .then(res => res.json())
                .then(res => {
                    console.log(res)
                    setLocation({
                        lat: res.results[0].geometry.location.lat,
                        lng: res.results[0].geometry.location.lng
                    })
                    setIsLoaded(true)
                    console.log("loaded!")
                })
                
                
            });
    }, []);


    function rerenderPage() {
        fetch(`/bathrooms/${params.bathroomid}`)
            .then((res) => res.json())
            .then((data) => setBathroom(data))
    }

    // if (bathroom !== undefined && location == null) {
    //         fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${bathroom.location}&key=${APIKey}`)
    //         .then(res => res.json())
    //         .then(res => {
    //             setLocation({
    //                 lat: res.results[0].geometry.location.lat,
    //                 lng: res.results[0].geometry.location.lng
    //             })
    //         })
    // }

    console.log(bathroom.location)
    console.log(location)


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

    console.log(bathroom.reviews)

    return (
        <>
        {isLoaded === false ?
         <h2>loading...</h2>
         :
        <div>

            <div>
                <p>{bathroom.location}</p>
                <p>{bathroom.description}</p>
                <p>{bathroom.public ? "Public bathroom" : "Private bathroom"}</p>
                <p>Average score: {bathroom.b_average_score}/5</p>
            </div>
            
            <button onClick={(e) => setShowReviewForm(true)}>Write a review of this bathroom</button>
            {showReviewForm ? <ReviewForm setShowReviewForm={setShowReviewForm} rerenderPage={rerenderPage} user={user} bathroomId={bathroom.id} /> : null}
            
            <div>
                <h3>Reviews:</h3>
                {bathroom.reviews && bathroom.reviews.map((review) => (
                    <div className="review-div">
                        <p>{review.date}</p>
                        <p>{review.description}</p>
                        <p>Cleanliness: <br/>{review.cleanliness}</p>
                        <p>Cleanliness Rating: {getToilets(review.cleanliness_rating)}</p>
                        <p>Function: <br/>{review.function}</p>
                        <p>Function Rating: {getToilets(review.function_rating)}</p>
                        <p>Style: <br/>{review.style}</p>
                        <p>Style Rating: {getToilets(review.style_rating)}</p>
                        <p>Final Score: {review.average_score}/5</p>
                    </div>
                ))}
            </div>
            <div>
                <Wrapper classname="Wrapper" apiKey={APIKey} >
                    <OneBathroomMap center={location} zoom={14}>
                        <Marker position={location} bathroom={bathroom} />
                    </OneBathroomMap>
                </Wrapper>
            </div>
        </div>
        }
        </>
    )
}

export default ShowBathroomPage