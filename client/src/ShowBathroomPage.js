import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import ReviewForm from "./components/ReviewForm";
import { Wrapper } from '@googlemaps/react-wrapper';
import OneBathroomMap from "./OneBathroomMap";
import Marker from "./Marker";
import DeleteButton from "./components/DeleteButton";
import EditForm from "./components/EditForm";
import getToilets from "./components/getToilets";

function ShowBathroomPage({ user, APIKey }) {

    const params = useParams()

    const [bathroom, setBathroom] = useState({})
    const [showReviewForm, setShowReviewForm] = useState(false)
    const [location, setLocation] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)

    const [showEditForm, setShowEditForm] = useState(false)

    const [currentReview, setCurrentReview] = useState('')

    useEffect(() => {
        fetch(`/bathrooms/${params.bathroomid}`)
            .then((res) => res.json())
            .then(data => {
                setBathroom(data)
                setLocation({
                    lat: data.lat,
                    lng: data.lng
                })
                setIsLoaded(true)

            });
    }, [params.bathroomid]);

    function handleEditClick(review) {
        setShowEditForm(true)
        setCurrentReview(review)
    }

    function rerenderPage() {
        fetch(`/bathrooms/${params.bathroomid}`)
            .then((res) => res.json())
            .then((data) => setBathroom(data))
    }

    return (
        <>
            {isLoaded === false ?
                <h2>loading...</h2>
                :
                <div>
                    <div id="OneBathroomTop">
                        <div id="OneBathroomTopLeft">
                            <div id="OneBathroomAbout">
                                <h2>{bathroom.location}</h2>
                                <p>{bathroom.description}</p>
                                <p>{bathroom.public ? "Public bathroom" : ""}</p>
                                <h3>Average score: {bathroom.b_average_score}/5</h3>
                            </div>
                            {/* <button onClick={(e) => setShowReviewForm(true)}>
                                Write a review of this bathroom
                            </button> */}
                            <ReviewForm
                                setShowReviewForm={setShowReviewForm}
                                rerenderPage={rerenderPage}
                                user={user}
                                bathroomId={bathroom.id}
                            />
                        </div>
                        <Wrapper classname="Wrapper" apiKey={APIKey} >
                            <OneBathroomMap center={location} zoom={14}>
                                <Marker position={location} bathroom={bathroom} />
                            </OneBathroomMap>
                        </Wrapper>
                    </div>
                    <div>
                        <h3>Reviews:</h3>
                        {bathroom.reviews && bathroom.reviews.map((review) => (
                            <div className="review-div">
                                <p>{review.user.username} used this bathroom on {review.date}:</p>
                                <p>Description: {review.description}</p>
                                <p>Cleanliness: <br />{review.cleanliness}</p>
                                <p>Cleanliness Rating: {getToilets(review.cleanliness_rating)}</p>
                                <p>Function: <br />{review.function}</p>
                                <p>Function Rating: {getToilets(review.function_rating)}</p>
                                <p>Style: <br />{review.style}</p>
                                <p>Style Rating: {getToilets(review.style_rating)}</p>
                                <p>Final Score: {review.average_score}/5</p>

                                {user && review.user_id === user.id ?
                                    <DeleteButton
                                        reviewId={review.id}
                                        rerenderPage={rerenderPage}
                                    />
                                    : null}

                                {user && review.user_id === user.id ?
                                    <button onClick={(e) => handleEditClick(review)}>
                                        Edit
                                    </button>
                                    : null}
                                <EditForm
                                    reviewId={review.id}
                                    rerenderPage={rerenderPage}
                                    showEditForm={showEditForm}
                                    setShowEditForm={setShowEditForm}
                                    currentReview={currentReview}
                                />

                            </div>
                        ))}
                    </div>

                </div>
            }
        </>
    )
}

export default ShowBathroomPage