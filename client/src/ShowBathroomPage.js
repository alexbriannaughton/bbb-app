import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import ReviewForm from "./components/ReviewForm";

function ShowBathroomPage({ user }) {

    const params = useParams()

    const [bathroom, setBathroom] = useState({})
    const [showReviewForm, setShowReviewForm] = useState(false)

    useEffect(() => {
        fetch(`/bathrooms/${params.bathroomid}`)
            .then((res) => res.json())
            .then((data) => setBathroom(data));
    }, []);

    function rerenderPage() {
        fetch(`/bathrooms/${params.bathroomid}`)
            .then((res) => res.json())
            .then((data) => setBathroom(data))
    }

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
        <div>
            <p>{bathroom.location}</p>
            <p>{bathroom.description}</p>
            <p>{bathroom.public ? "Public bathroom" : "Private bathroom"}</p>
            <p>Average score: {bathroom.b_average_score}/5</p>

            <button onClick={(e) => setShowReviewForm(true)}>Write a review of this bathroom</button>
            {showReviewForm ? <ReviewForm setShowReviewForm={setShowReviewForm} rerenderPage={rerenderPage} user={user} bathroomId={bathroom.id} /> : null}


            <h3>Reviews:</h3>
            {bathroom.reviews && bathroom.reviews.map((review) => (
                <div className="review-div">
                    <p>{review.user.username} used this bathroom on {review.date}</p>
                    <p>{review.description}</p>
                    <p>Cleanliness: <br />{review.cleanliness}</p>
                    <p>Cleanliness Rating: {getToilets(review.cleanliness_rating)}</p>
                    <p>Function: <br />{review.function}</p>
                    <p>Function Rating: {getToilets(review.function_rating)}</p>
                    <p>Style: <br />{review.style}</p>
                    <p>Style Rating: {getToilets(review.style_rating)}</p>
                    <p>Final Score: {review.average_score}/5</p>
                </div>
            ))}


        </div>
    )
}

export default ShowBathroomPage